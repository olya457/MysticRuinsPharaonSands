import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';
import type {Place} from '../types/app';

const region = {
  latitude: 27.1,
  longitude: 31.6,
  latitudeDelta: 9.8,
  longitudeDelta: 6.2,
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#5b5b5b'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#1f1f1f'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#777777'}]},
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#484848'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#3d3d3d'}],
  },
];

export function EgyptMapView({
  places,
  selectedId,
  onSelect,
  compact = false,
}: {
  places: Place[];
  selectedId?: string;
  onSelect?: (place: Place) => void;
  compact?: boolean;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const frameHeight = compact
    ? metrics.tiny
      ? 190
      : metrics.compact
        ? 220
        : 270
    : metrics.tiny
      ? 250
      : metrics.compact
        ? 314
        : 390;

  return (
    <View style={[styles.frame, {height: frameHeight}]}>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        style={StyleSheet.absoluteFill}
        initialRegion={region}
        customMapStyle={mapStyle}
        showsCompass={false}
        showsScale={false}
        showsMyLocationButton={false}
        toolbarEnabled={false}>
        {places.map(place => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            pinColor={selectedId === place.id ? colors.blue : '#ff2b2b'}
            onPress={() => onSelect?.(place)}
          />
        ))}
      </MapView>
      <View pointerEvents="none" style={styles.tint} />
      <View pointerEvents="none" style={styles.badge}>
        <Text style={styles.badgeText}>Egypt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#5c5c5c',
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(28,28,28,0.22)',
  },
  badge: {
    position: 'absolute',
    left: 12,
    top: 12,
    backgroundColor: 'rgba(0,0,0,0.42)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
  },
});
