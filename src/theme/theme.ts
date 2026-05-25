import {Platform} from 'react-native';

export const colors = {
  parchment: '#f9ead2',
  white: '#ffffff',
  muted: '#dac8b4',
  panel: '#5a2108',
  panelDark: '#421806',
  panelSoft: 'rgba(71, 28, 9, 0.92)',
  border: '#d8aa70',
  blue: '#56aaf7',
  blueDark: '#287dcd',
  orange: '#e85a11',
  orangeDark: '#a73706',
  green: '#3b8731',
  nav: 'rgba(69, 26, 10, 0.96)',
  inactive: 'rgba(255, 255, 255, 0.64)',
};

export const layout = {
  screenMaxWidth: 430,
  horizontal: 16,
  radius: 8,
  navHeight: 70,
  topInset: Platform.OS === 'android' ? 30 : 56,
  bottomGap: Platform.OS === 'android' ? 30 : 20,
};

export const shadow = {
  shadowColor: '#160702',
  shadowOffset: {width: 0, height: 10},
  shadowOpacity: 0.25,
  shadowRadius: 16,
  elevation: 12,
};
