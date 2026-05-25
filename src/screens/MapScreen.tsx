import React, {useState} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {CompactPlaceCard} from '../components/Cards';
import {EgyptMapView} from '../components/EgyptMapView';
import {BackgroundScreen, Panel, ScreenTitle} from '../components/Screen';
import {places} from '../data/places';
import {assets} from '../theme/assets';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Place} from '../types/app';

export function MapScreen({
  isSaved,
  onToggleSaved,
  onOpenPlace,
}: {
  isSaved: (id: string) => boolean;
  onToggleSaved: (id: string) => void;
  onOpenPlace: (place: Place) => void;
}) {
  const [selected, setSelected] = useState<Place | undefined>();
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const panelPadding = metrics.tiny ? 10 : 14;

  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Map</ScreenTitle>
      <Panel
        style={[
          styles.intro,
          {
            minHeight: metrics.tiny ? 112 : metrics.compact ? 130 : 150,
            paddingHorizontal: metrics.tiny ? 8 : 12,
            paddingVertical: metrics.tiny ? 8 : 12,
            marginBottom: metrics.gap,
          },
        ]}>
        <Image
          source={assets.guidePapyrus}
          style={{
            width: metrics.tiny ? 104 : metrics.compact ? 118 : 132,
            height: metrics.tiny ? 98 : metrics.compact ? 112 : 126,
            marginRight: metrics.tiny ? 8 : 10,
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
          This map is filled with ancient pyramids, legendary museums, and
          mysterious ruins. Click on the landmarks to explore new places and
          find locations that could be your next adventure.
        </Text>
      </Panel>
      <Panel style={{padding: panelPadding}}>
        <EgyptMapView
          places={places}
          selectedId={selected?.id}
          onSelect={setSelected}
        />
        {selected ? (
          <View
            style={[
              styles.overlay,
              {
                left: panelPadding,
                right: panelPadding,
                bottom: panelPadding,
              },
            ]}>
            <CompactPlaceCard
              place={selected}
              saved={isSaved(selected.id)}
              onToggleSaved={() => onToggleSaved(selected.id)}
              onOpen={() => onOpenPlace(selected)}
            />
          </View>
        ) : null}
      </Panel>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  intro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introText: {
    flex: 1,
    color: colors.white,
  },
  overlay: {
    position: 'absolute',
  },
});
