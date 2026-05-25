import React, {useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {assets} from '../theme/assets';
import {colors} from '../theme/theme';
import {ActionButton, BackgroundScreen, Panel} from '../components/Screen';

const slides = [
  {
    title: 'Welcome to the world of the pharaohs',
    text: 'I will be your guide among the ancient pyramids, mysterious ruins and legendary museums of Egypt. Atmospheric places, history and the true spirit of the ancient world await you here.',
    button: 'Hello!',
    image: assets.guideWaving,
    imageStyle: 'guide',
  },
  {
    title: 'Explore place categories',
    text: 'Discover pyramids, museums and ruins with detailed descriptions, coordinates and atmospheric illustrations. Each place will help you immerse yourself in the culture of ancient Egypt.',
    button: 'Continue',
    image: assets.onboardingMapBoard,
    imageStyle: 'wide',
  },
  {
    title: 'Travel through the interactive map',
    text: 'Find historical locations on the interactive map, view coordinates and save interesting places for future routes.',
    button: 'Okay',
    image: assets.guideMapOrb,
    imageStyle: 'guide',
  },
  {
    title: 'Egypt Facts and Stories',
    text: 'Read interesting facts about ancient Egypt and discover atmospheric articles with beautiful illustrations and stories about legendary places.',
    button: 'Next',
    image: assets.onboardingScroll,
    imageStyle: 'scroll',
  },
  {
    title: 'Find your vibe',
    text: 'Choose your mood - mysterious, calm or adventurous. Desert Mood Route will randomly select a location that best matches your vibe and travel mood.',
    button: 'Start!',
    image: assets.guideThumbs,
    imageStyle: 'guide',
  },
];

export function OnboardingScreen({onDone}: {onDone: () => void}) {
  const [index, setIndex] = useState(0);
  const {height, width} = useWindowDimensions();
  const slide = slides[index];
  const isLast = index === slides.length - 1;
  const tiny = height < 700 || width < 360;
  const compact = height < 780 || width < 380;

  const metrics = useMemo(
    () => ({
      contentTop: tiny ? 46 : compact ? 56 : 68,
      visualHeight: tiny ? 212 : compact ? 252 : 300,
      guideHeight: tiny ? 230 : compact ? 272 : 320,
      wideHeight: tiny ? 190 : compact ? 228 : 275,
      scrollHeight: tiny ? 226 : compact ? 270 : 320,
      panelHorizontal: tiny ? 14 : compact ? 16 : 20,
      panelVertical: tiny ? 13 : compact ? 15 : 18,
      titleSize: tiny ? 15 : 16,
      textSize: tiny ? 13 : 14,
      textLine: tiny ? 17 : 18,
      textTop: tiny ? 10 : 14,
      buttonTop: tiny ? 16 : compact ? 22 : 28,
      buttonWidth: tiny
        ? ('74%' as const)
        : compact
          ? ('68%' as const)
          : ('64%' as const),
      dotsTop: tiny ? 10 : compact ? 14 : 18,
    }),
    [compact, tiny],
  );

  const imageStyle = useMemo(() => {
    if (slide.imageStyle === 'wide') {
      return [styles.wideImage, {height: metrics.wideHeight}];
    }
    if (slide.imageStyle === 'scroll') {
      return [styles.scrollImage, {height: metrics.scrollHeight}];
    }
    return [styles.guideImage, {height: metrics.guideHeight}];
  }, [metrics.guideHeight, metrics.scrollHeight, metrics.wideHeight, slide.imageStyle]);

  const next = () => {
    if (isLast) {
      onDone();
    } else {
      setIndex(current => current + 1);
    }
  };

  return (
    <BackgroundScreen
      scroll
      contentStyle={{
        minHeight: '100%',
        justifyContent: 'flex-end',
        paddingTop: metrics.contentTop,
      }}>
      <TouchableOpacity activeOpacity={0.8} onPress={onDone} style={styles.skip}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
      <View style={styles.shiftedContent}>
        <View style={[styles.visualWrap, {minHeight: metrics.visualHeight}]}>
          <Image source={slide.image} style={imageStyle} resizeMode="contain" />
        </View>
        <Panel
          style={[
            styles.panel,
            {
              paddingHorizontal: metrics.panelHorizontal,
              paddingVertical: metrics.panelVertical,
            },
          ]}>
          <Text style={[styles.title, {fontSize: metrics.titleSize}]}>
            {slide.title}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: metrics.textSize,
                lineHeight: metrics.textLine,
                marginTop: metrics.textTop,
              },
            ]}>
            {slide.text}
          </Text>
        </Panel>
        <ActionButton
          title={slide.button}
          onPress={next}
          style={[
            styles.button,
            {marginTop: metrics.buttonTop, width: metrics.buttonWidth},
          ]}
        />
        <View style={[styles.dots, {marginTop: metrics.dotsTop}]}>
          {slides.map((item, dotIndex) => (
            <View
              key={item.title}
              style={[styles.dot, dotIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  skip: {
    position: 'absolute',
    right: 18,
    top: 70,
    zIndex: 2,
    minHeight: 34,
    justifyContent: 'center',
  },
  skipText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  shiftedContent: {
    transform: [{translateY: -40}],
  },
  visualWrap: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  guideImage: {
    width: '96%',
    height: 320,
  },
  wideImage: {
    width: '96%',
    height: 275,
  },
  scrollImage: {
    width: '96%',
    height: 320,
  },
  panel: {
    marginTop: 8,
  },
  title: {
    color: colors.white,
    lineHeight: 21,
    fontWeight: '900',
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  activeDot: {
    backgroundColor: colors.white,
  },
});
