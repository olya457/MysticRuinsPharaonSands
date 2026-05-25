import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors} from '../theme/theme';

export function SaveButton({
  active,
  onPress,
}: {
  active: boolean;
  onPress: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const size = metrics.tiny ? 36 : 40;

  return (
    <TouchableOpacity
      activeOpacity={0.78}
      accessibilityRole="button"
      accessibilityLabel={active ? 'Remove from saved' : 'Save'}
      onPress={onPress}
      style={[
        styles.button,
        {width: size, height: size},
        active && styles.active,
      ]}>
      <Text
        style={[
          styles.icon,
          {fontSize: metrics.tiny ? 19 : 21},
          active && styles.activeIcon,
        ]}>
        🔖
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 18, 8, 0.54)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  active: {
    borderColor: colors.blue,
    backgroundColor: 'rgba(32, 105, 185, 0.22)',
  },
  icon: {
    fontSize: 21,
    lineHeight: 25,
    opacity: 0.78,
  },
  activeIcon: {
    opacity: 1,
  },
});
