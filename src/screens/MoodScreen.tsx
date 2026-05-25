import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {PlaceCard} from '../components/Cards';
import {ActionButton, BackgroundScreen, Panel, ScreenTitle} from '../components/Screen';
import {places} from '../data/places';
import {assets} from '../theme/assets';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Place} from '../types/app';

type Mood = 'Mysterious' | 'Calm' | 'Adventurous';
type Companion = 'With someone' | 'Alone';
type TravelSign = 'Sunset' | 'Nile' | 'Temple';

const moods: Mood[] = ['Mysterious', 'Calm', 'Adventurous'];
const companions: Companion[] = ['With someone', 'Alone'];
const travelSigns: TravelSign[] = ['Sunset', 'Nile', 'Temple'];

const loaderHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        overflow: hidden;
      }
      body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ring {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 6px solid rgba(255, 255, 255, 0.22);
        border-top-color: #ffffff;
        border-right-color: #56aaf7;
        animation: spin 0.78s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="ring"></div>
  </body>
</html>`;

const pickPlace = (mood: Mood, sign: TravelSign) => {
  const moodPool =
    mood === 'Mysterious'
      ? places.filter(place => place.category === 'ruins')
      : mood === 'Calm'
        ? places.filter(place => place.category === 'museums')
        : places.filter(place => place.category === 'pyramids');

  const pool =
    sign === 'Nile'
      ? places.filter(place =>
          /nile|aswan|luxor|philae|kom ombo/i.test(
            `${place.title} ${place.description}`,
          ),
        )
      : sign === 'Temple'
        ? places.filter(place => place.category === 'ruins')
        : moodPool;

  if (pool.length === 0) {
    return moodPool[Math.floor(Math.random() * moodPool.length)] ?? places[0];
  }

  return pool[Math.floor(Math.random() * pool.length)] ?? places[0];
};

export function MoodScreen({
  isSaved,
  onToggleSaved,
  onOpenPlace,
}: {
  isSaved: (id: string) => boolean;
  onToggleSaved: (id: string) => void;
  onOpenPlace: (place: Place) => void;
}) {
  const [mood, setMood] = useState<Mood | undefined>();
  const [companion, setCompanion] = useState<Companion | undefined>();
  const [travelSign, setTravelSign] = useState<TravelSign | undefined>();
  const [result, setResult] = useState<Place | undefined>();
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  const canContinue = useMemo(
    () => Boolean(mood && companion && travelSign),
    [companion, mood, travelSign],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const continueMood = () => {
    if (!mood || !travelSign || !canContinue) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setLoading(true);
    setResult(undefined);
    timerRef.current = setTimeout(() => {
      setResult(pickPlace(mood, travelSign));
      setLoading(false);
    }, 3000);
  };

  if (loading) {
    return (
      <BackgroundScreen
        withBottomNav
        scroll={false}
        contentStyle={styles.loaderContent}>
        <ScreenTitle>Desert Mood</ScreenTitle>
        <View
          style={[
            styles.webFrame,
            {marginTop: metrics.tiny ? 112 : metrics.compact ? 148 : 180},
          ]}>
          <WebView
            originWhitelist={['*']}
            source={{html: loaderHtml}}
            scrollEnabled={false}
            style={styles.webView}
            containerStyle={styles.webContainer}
            opaque={false}
            javaScriptEnabled
            setSupportMultipleWindows={false}
          />
        </View>
      </BackgroundScreen>
    );
  }

  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Desert Mood</ScreenTitle>
      {result ? (
        <>
          <Panel
            style={[
              styles.resultIntro,
              {
                minHeight: metrics.tiny ? 104 : 122,
                padding: metrics.tiny ? 8 : 10,
                marginBottom: metrics.gap,
              },
            ]}>
            <Image
              source={assets.guideWaving}
              style={{
                width: metrics.tiny ? 104 : 132,
                height: metrics.tiny ? 88 : 104,
                marginRight: metrics.tiny ? 6 : 8,
              }}
              resizeMode="contain"
            />
            <View style={styles.resultTextWrap}>
              <Text
                style={[
                  styles.introText,
                  {
                    fontSize: metrics.tiny ? 13 : 14,
                    lineHeight: metrics.tiny ? 16 : 18,
                  },
                ]}>
                Here is the place I chose for you, taking into account your
                mood. I wish you a good time!
              </Text>
              <ActionButton
                title="Try again"
                onPress={() => {
                  setResult(undefined);
                  setTravelSign(undefined);
                }}
                style={[
                  styles.tryAgain,
                  {minHeight: metrics.smallActionHeight},
                ]}
              />
            </View>
          </Panel>
          <PlaceCard
            place={result}
            saved={isSaved(result.id)}
            onToggleSaved={() => onToggleSaved(result.id)}
            onOpen={() => onOpenPlace(result)}
          />
        </>
      ) : (
        <>
          <Panel
            style={[
              styles.intro,
              {
                minHeight: metrics.tiny ? 112 : metrics.compact ? 130 : 150,
                padding: metrics.tiny ? 8 : 12,
                marginBottom: metrics.gap,
              },
            ]}>
            <Image
              source={assets.guideThumbs}
              style={{
                width: metrics.tiny ? 104 : metrics.compact ? 122 : 140,
                height: metrics.tiny ? 96 : metrics.compact ? 112 : 126,
                marginRight: metrics.tiny ? 6 : 8,
              }}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.introText,
                {
                  fontSize: metrics.tiny ? 13 : 14,
                  lineHeight: metrics.tiny ? 16 : 18,
                },
              ]}>
              Tell me what mood you are in right now, and I will pick an
              atmospheric place just for you. Maybe today you are looking for
              mysterious ruins, a peaceful Nile bank, or an ancient temple under
              a warm sunset.
            </Text>
          </Panel>
          <Panel
            style={[
              styles.form,
              {padding: metrics.tiny ? 12 : metrics.compact ? 14 : 18},
            ]}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  fontSize: metrics.tiny ? 16 : 18,
                  lineHeight: metrics.tiny ? 20 : 23,
                  marginTop: metrics.tiny ? 8 : 14,
                  marginBottom: metrics.tiny ? 10 : 14,
                },
              ]}>
              Choose a mood:
            </Text>
            <View style={[styles.row, {gap: metrics.tiny ? 7 : 10}]}>
              {moods.map(item => (
                <MoodChip
                  key={item}
                  label={item}
                  active={mood === item}
                  onPress={() => setMood(item)}
                />
              ))}
            </View>
            <Text
              style={[
                styles.sectionTitle,
                {
                  fontSize: metrics.tiny ? 16 : 18,
                  lineHeight: metrics.tiny ? 20 : 23,
                  marginTop: metrics.tiny ? 12 : 14,
                  marginBottom: metrics.tiny ? 10 : 14,
                },
              ]}>
              Do you want to go with someone or alone?
            </Text>
            <View style={[styles.centerRow, {gap: metrics.tiny ? 8 : 14}]}>
              {companions.map(item => (
                <MoodChip
                  key={item}
                  label={item}
                  active={companion === item}
                  onPress={() => setCompanion(item)}
                />
              ))}
            </View>
            <Text
              style={[
                styles.sectionTitle,
                {
                  fontSize: metrics.tiny ? 16 : 18,
                  lineHeight: metrics.tiny ? 20 : 23,
                  marginTop: metrics.tiny ? 12 : 14,
                  marginBottom: metrics.tiny ? 10 : 14,
                },
              ]}>
              Pick a travel sign:
            </Text>
            <View style={[styles.row, {gap: metrics.tiny ? 7 : 10}]}>
              {travelSigns.map(item => (
                <MoodChip
                  key={item}
                  label={item}
                  active={travelSign === item}
                  onPress={() => setTravelSign(item)}
                />
              ))}
            </View>
            <ActionButton
              title="Continue"
              tone="green"
              disabled={!canContinue}
              onPress={continueMood}
              style={{
                width: metrics.tiny ? 190 : 220,
                marginTop: metrics.tiny ? 14 : 20,
              }}
            />
          </Panel>
        </>
      )}
    </BackgroundScreen>
  );
}

function MoodChip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[
        styles.chip,
        {
          minHeight: metrics.tiny ? 40 : 46,
          paddingHorizontal: metrics.tiny ? 4 : 10,
        },
        active && styles.activeChip,
      ]}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.78}
        style={[
          styles.chipText,
          {
            fontSize: metrics.tiny ? 13 : 14,
            lineHeight: metrics.tiny ? 16 : 18,
          },
          active && styles.activeChipText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loaderContent: {
    flex: 1,
    alignItems: 'center',
  },
  webFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  webView: {
    width: 120,
    height: 120,
    backgroundColor: 'transparent',
  },
  webContainer: {
    backgroundColor: 'transparent',
  },
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultIntro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introText: {
    flex: 1,
    color: colors.white,
  },
  resultTextWrap: {
    flex: 1,
  },
  tryAgain: {
    marginTop: 10,
    width: 126,
  },
  form: {
    alignItems: 'center',
  },
  sectionTitle: {
    color: colors.white,
    fontWeight: '900',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  centerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(86,170,247,0.48)',
  },
  activeChip: {
    backgroundColor: colors.blue,
  },
  chipText: {
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '800',
    textAlign: 'center',
  },
  activeChipText: {
    color: colors.white,
  },
});
