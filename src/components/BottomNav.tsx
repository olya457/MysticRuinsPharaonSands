import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors, layout, shadow} from '../theme/theme';
import type {MainTab} from '../types/app';

const tabs: Array<{id: MainTab; icon: string; label: string}> = [
  {id: 'places', icon: '📍', label: 'Places'},
  {id: 'map', icon: '🗺️', label: 'Map'},
  {id: 'facts', icon: '📜', label: 'Facts'},
  {id: 'blog', icon: '📄', label: 'Blog'},
  {id: 'mood', icon: '🙂', label: 'Mood'},
  {id: 'saved', icon: '🔖', label: 'Saved'},
];

export function BottomNav({
  active,
  onSelect,
}: {
  active: MainTab;
  onSelect: (tab: MainTab) => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <View
      style={[
        styles.wrap,
        {
          left: metrics.horizontal,
          right: metrics.horizontal,
          bottom: metrics.bottomGap,
        },
      ]}
      pointerEvents="box-none">
      <View
        style={[
          styles.nav,
          {
            height: metrics.navHeight,
            paddingHorizontal: metrics.tiny ? 6 : 10,
          },
        ]}>
        {tabs.map(tab => {
          const isActive = active === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              activeOpacity={0.78}
              accessibilityRole="button"
              accessibilityLabel={tab.label}
              onPress={() => onSelect(tab.id)}
              style={[
                styles.item,
                {height: metrics.navHeight - (metrics.tiny ? 8 : 12)},
              ]}>
              <View
                style={[
                  styles.iconBubble,
                  {
                    width: metrics.tiny ? 31 : 34,
                    height: metrics.tiny ? 31 : 34,
                  },
                  isActive && styles.active,
                ]}>
                <Text
                  style={[
                    styles.icon,
                    {fontSize: metrics.tiny ? 17 : 19},
                    !isActive && styles.inactive,
                  ]}>
                  {tab.icon}
                </Text>
              </View>
              <View style={[styles.line, isActive && styles.activeLine]} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    alignItems: 'center',
  },
  nav: {
    width: '100%',
    maxWidth: layout.screenMaxWidth - layout.horizontal * 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: colors.nav,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    ...shadow,
  },
  item: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBubble: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  icon: {
    lineHeight: 24,
  },
  inactive: {
    opacity: 0.58,
  },
  line: {
    marginTop: 3,
    width: 20,
    height: 1,
    backgroundColor: 'transparent',
  },
  activeLine: {
    backgroundColor: colors.white,
  },
});
