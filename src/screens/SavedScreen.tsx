import React, {useMemo, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  EmptyMedia,
  FactCard,
  PlaceCard,
  SavedArticleRow,
} from '../components/Cards';
import {ActionButton, BackgroundScreen, ScreenTitle} from '../components/Screen';
import {articles} from '../data/articles';
import {facts} from '../data/facts';
import {places} from '../data/places';
import {assets} from '../theme/assets';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Article, Place, SavedKind, SavedState} from '../types/app';

const modes: Array<{id: SavedKind; label: string}> = [
  {id: 'places', label: 'Places'},
  {id: 'facts', label: 'Facts'},
  {id: 'articles', label: 'Articles'},
];

export function SavedScreen({
  saved,
  hasAnySaved,
  isPlaceSaved,
  isFactSaved,
  isArticleSaved,
  onTogglePlace,
  onToggleFact,
  onToggleArticle,
  onOpenPlace,
  onOpenArticle,
}: {
  saved: SavedState;
  hasAnySaved: boolean;
  isPlaceSaved: (id: string) => boolean;
  isFactSaved: (id: string) => boolean;
  isArticleSaved: (id: string) => boolean;
  onTogglePlace: (id: string) => void;
  onToggleFact: (id: string) => void;
  onToggleArticle: (id: string) => void;
  onOpenPlace: (place: Place) => void;
  onOpenArticle: (article: Article) => void;
}) {
  const [mode, setMode] = useState<SavedKind>('places');
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  const savedPlaces = useMemo(
    () => places.filter(place => saved.places.includes(place.id)),
    [saved.places],
  );
  const savedFacts = useMemo(
    () => facts.filter(fact => saved.facts.includes(fact.id)),
    [saved.facts],
  );
  const savedArticles = useMemo(
    () => articles.filter(article => saved.articles.includes(article.id)),
    [saved.articles],
  );

  if (!hasAnySaved) {
    return (
      <BackgroundScreen withBottomNav>
        <ScreenTitle>Saved</ScreenTitle>
        <EmptyMedia
          title="Nothing saved yet"
          text="Start building your collection of ancient monuments by saving your favorite places, stories, and facts!"
        />
        <View
          style={[
            styles.emptyButtons,
            {
              width: metrics.tiny ? '76%' : '68%',
              marginTop: metrics.tiny ? 18 : 28,
              gap: metrics.tiny ? 10 : 14,
            },
          ]}>
          {modes.map(item => (
            <ActionButton
              key={item.id}
              title={item.id === 'articles' ? 'Blog' : item.label}
              onPress={() => setMode(item.id)}
              style={styles.emptyButton}
            />
          ))}
        </View>
        <Image
          source={assets.guidePapyrus}
          style={[
            styles.emptyGuide,
            {
              width: metrics.tiny ? 200 : 250,
              height: metrics.tiny ? 178 : 230,
              marginTop: metrics.tiny ? 12 : 20,
            },
          ]}
          resizeMode="contain"
        />
      </BackgroundScreen>
    );
  }

  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Saved</ScreenTitle>
      <View
        style={[
          styles.tabs,
          {gap: metrics.tiny ? 8 : 14, marginBottom: metrics.gap},
        ]}>
        {modes.map(item => {
          const active = mode === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.82}
              onPress={() => setMode(item.id)}
              style={[
                styles.tab,
                {minHeight: metrics.tiny ? 46 : 56},
                active && styles.activeTab,
              ]}>
              <Text
                style={[
                  styles.tabText,
                  {fontSize: metrics.tiny ? 15 : 16},
                  active && styles.activeTabText,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {mode === 'places' ? (
        savedPlaces.length > 0 ? (
          savedPlaces.map(place => (
            <PlaceCard
              key={place.id}
              place={place}
              saved={isPlaceSaved(place.id)}
              onToggleSaved={() => onTogglePlace(place.id)}
              onOpen={() => onOpenPlace(place)}
            />
          ))
        ) : (
          <Text style={styles.emptyLine}>No saved places yet</Text>
        )
      ) : null}
      {mode === 'facts' ? (
        savedFacts.length > 0 ? (
          savedFacts.map(fact => (
            <FactCard
              key={fact.id}
              fact={fact}
              saved={isFactSaved(fact.id)}
              onToggleSaved={() => onToggleFact(fact.id)}
            />
          ))
        ) : (
          <Text style={styles.emptyLine}>No saved facts yet</Text>
        )
      ) : null}
      {mode === 'articles' ? (
        savedArticles.length > 0 ? (
          savedArticles.map(article => (
            <SavedArticleRow
              key={article.id}
              article={article}
              saved={isArticleSaved(article.id)}
              onToggleSaved={() => onToggleArticle(article.id)}
              onOpen={() => onOpenArticle(article)}
            />
          ))
        ) : (
          <Text style={styles.emptyLine}>No saved articles yet</Text>
        )
      ) : null}
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  emptyButtons: {
    alignSelf: 'center',
  },
  emptyButton: {
    width: '100%',
  },
  emptyGuide: {
    alignSelf: 'center',
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(86,170,247,0.5)',
  },
  activeTab: {
    backgroundColor: colors.blue,
  },
  tabText: {
    color: 'rgba(255,255,255,0.58)',
    lineHeight: 20,
    fontWeight: '800',
  },
  activeTabText: {
    color: colors.white,
  },
  emptyLine: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 36,
  },
});
