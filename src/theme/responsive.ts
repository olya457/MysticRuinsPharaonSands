import {Platform} from 'react-native';
import {layout} from './theme';

export const getResponsiveMetrics = (width: number, height: number) => {
  const tiny = height <= 670 || width <= 340;
  const compact = height <= 740 || width <= 380;
  const navHeight = tiny ? 58 : compact ? 62 : layout.navHeight;
  const bottomGap = Platform.OS === 'android' ? 30 : 20;
  const topInset =
    Platform.OS === 'android' ? 30 : tiny ? 32 : compact ? 42 : layout.topInset;

  return {
    tiny,
    compact,
    navHeight,
    bottomGap,
    topInset,
    contentBottomWithNav:
      navHeight + bottomGap + (tiny ? 10 : compact ? 14 : 26),
    horizontal: tiny ? 12 : layout.horizontal,
    titleSize: tiny ? 27 : compact ? 29 : 32,
    titleLine: tiny ? 32 : compact ? 35 : 38,
    titleBottom: tiny ? 14 : compact ? 18 : 22,
    backTitleSize: tiny ? 25 : compact ? 28 : 30,
    backTitleLine: tiny ? 31 : compact ? 34 : 36,
    gap: tiny ? 10 : compact ? 12 : 14,
    cardPadding: tiny ? 10 : compact ? 12 : 14,
    actionHeight: tiny ? 44 : compact ? 48 : 52,
    smallActionHeight: tiny ? 40 : 42,
  };
};
