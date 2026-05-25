import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {PlaceCard} from '../components/Cards';
import {BackgroundScreen, ScreenTitle} from '../components/Screen';
import {categoryLabels, places} from '../data/places';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Place, PlaceCategory} from '../types/app';

const categories: PlaceCategory[] = ['pyramids', 'museums', 'ruins'];

export function ExploreScreen({
  isSaved,
  onToggleSaved,
  onOpenPlace,
}: {
  isSaved: (id: string) => boolean;
  onToggleSaved: (id: string) => void;
  onOpenPlace: (place: Place) => void;
}) {
  const [category, setCategory] = useState<PlaceCategory>('pyramids');
  const [query, setQuery] = useState('');
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return places.filter(place => {
      const inCategory = place.category === category;
      if (!normalized) {
        return inCategory;
      }
      return (
        inCategory &&
        `${place.title} ${place.description}`.toLowerCase().includes(normalized)
      );
    });
  }, [category, query]);

  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Explore Places</ScreenTitle>
      <View
        style={[
          styles.searchWrap,
          {
            height: metrics.tiny ? 42 : 48,
            paddingHorizontal: metrics.tiny ? 12 : 14,
            marginBottom: metrics.gap,
          },
        ]}>
        <Text
          style={[
            styles.searchIcon,
            {
              fontSize: metrics.tiny ? 16 : 18,
              marginRight: metrics.tiny ? 8 : 10,
            },
          ]}>
          🔎
        </Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search ancient places..."
          placeholderTextColor="rgba(255,255,255,0.52)"
          style={styles.search}
          autoCorrect={false}
          selectionColor={colors.blue}
        />
      </View>
      <View
        style={[
          styles.tabs,
          {gap: metrics.tiny ? 8 : 14, marginBottom: metrics.gap},
        ]}>
        {categories.map(item => {
          const active = category === item;
          return (
            <TouchableOpacity
              key={item}
              activeOpacity={0.82}
              onPress={() => setCategory(item)}
              style={[
                styles.tab,
                {minHeight: metrics.tiny ? 38 : 44},
                active && styles.activeTab,
              ]}>
              <Text
                style={[
                  styles.tabText,
                  {
                    fontSize: metrics.tiny ? 14 : 15,
                    lineHeight: metrics.tiny ? 18 : 19,
                  },
                  active && styles.activeTabText,
                ]}>
                {categoryLabels[item]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {filtered.map(place => (
        <PlaceCard
          key={place.id}
          place={place}
          saved={isSaved(place.id)}
          onToggleSaved={() => onToggleSaved(place.id)}
          onOpen={() => onOpenPlace(place)}
        />
      ))}
      {filtered.length === 0 ? (
        <Text style={styles.empty}>No places found</Text>
      ) : null}
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  searchWrap: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'rgba(70, 26, 8, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    lineHeight: 22,
    opacity: 0.78,
  },
  search: {
    flex: 1,
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    padding: 0,
  },
  tabs: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(86,170,247,0.48)',
  },
  activeTab: {
    backgroundColor: colors.blue,
  },
  tabText: {
    color: 'rgba(255,255,255,0.58)',
    fontWeight: '800',
    textAlign: 'center',
  },
  activeTabText: {
    color: colors.white,
  },
  empty: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
  },
});
