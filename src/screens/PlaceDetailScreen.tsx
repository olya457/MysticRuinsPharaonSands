import React, {useState} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {shareContent} from '../components/Cards';
import {EgyptMapView} from '../components/EgyptMapView';
import {
  ActionButton,
  BackTitle,
  BackgroundScreen,
  Panel,
} from '../components/Screen';
import {SaveButton} from '../components/SaveButton';
import {places} from '../data/places';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Place} from '../types/app';

export function PlaceDetailScreen({
  place,
  saved,
  onToggleSaved,
  onBack,
}: {
  place: Place;
  saved: boolean;
  onToggleSaved: () => void;
  onBack: () => void;
}) {
  const [showMap, setShowMap] = useState(false);
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const imageHeight = metrics.tiny ? 138 : metrics.compact ? 160 : 185;

  return (
    <BackgroundScreen withBottomNav>
      <BackTitle title="Explore Places" onBack={onBack} />
      <Panel style={styles.card}>
        <Image
          source={place.image}
          style={[styles.image, {height: imageHeight}]}
        />
        <View
          style={[
            styles.save,
            {
              right: metrics.tiny ? 8 : 12,
              top: imageHeight + (metrics.tiny ? 8 : 17),
            },
          ]}>
          <SaveButton active={saved} onPress={onToggleSaved} />
        </View>
        <View style={{padding: metrics.cardPadding}}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.coordinates}>Coordinates: {place.coordinates}</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: metrics.tiny ? 13 : 14,
                lineHeight: metrics.tiny ? 17 : 18,
                marginTop: metrics.tiny ? 12 : 16,
              },
            ]}>
            {place.description}
          </Text>
          {showMap ? (
            <View
              style={[
                styles.mapWrap,
                {marginTop: metrics.tiny ? 12 : 18},
              ]}>
              <EgyptMapView
                places={places}
                selectedId={place.id}
                onSelect={() => undefined}
                compact
              />
            </View>
          ) : null}
          <View
            style={[
              styles.actions,
              {
                gap: metrics.tiny ? 8 : 12,
                marginTop: metrics.tiny ? 12 : 18,
              },
            ]}>
            <ActionButton
              title="Share"
              tone="orange"
              onPress={() => shareContent(place.title, place.description)}
              style={[
                styles.action,
                {minHeight: metrics.smallActionHeight},
              ]}
            />
            <ActionButton
              title={showMap ? 'Close map' : 'Map'}
              tone="dark"
              onPress={() => setShowMap(value => !value)}
              style={[
                styles.action,
                {minHeight: metrics.smallActionHeight},
              ]}
            />
          </View>
        </View>
      </Panel>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  save: {
    position: 'absolute',
    zIndex: 2,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
    paddingRight: 44,
  },
  coordinates: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 6,
  },
  text: {
    color: colors.white,
  },
  mapWrap: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    flex: 1,
    minWidth: 104,
  },
});
