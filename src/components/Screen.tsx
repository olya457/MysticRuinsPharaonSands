import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {assets} from '../theme/assets';
import {colors, layout, shadow} from '../theme/theme';
import {getResponsiveMetrics} from '../theme/responsive';

type BackgroundScreenProps = {
  children: React.ReactNode;
  scroll?: boolean;
  withBottomNav?: boolean;
  centered?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
};

export function BackgroundScreen({
  children,
  scroll = true,
  withBottomNav = false,
  centered = false,
  contentStyle,
}: BackgroundScreenProps) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const bottomPadding = withBottomNav ? metrics.contentBottomWithNav : 28;

  const content = (
    <View
      style={[
        styles.content,
        centered && styles.centered,
        {
          paddingBottom: bottomPadding,
          paddingHorizontal: metrics.horizontal,
          paddingTop: metrics.topInset,
        },
        contentStyle,
      ]}>
      {children}
    </View>
  );

  return (
    <ImageBackground
      source={assets.background}
      resizeMode="cover"
      style={styles.background}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}>
        {scroll ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scroll}>
            {content}
          </ScrollView>
        ) : (
          content
        )}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export function ScreenTitle({children}: {children: React.ReactNode}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <Text
      style={[
        styles.title,
        {
          fontSize: metrics.titleSize,
          lineHeight: metrics.titleLine,
          marginBottom: metrics.titleBottom,
        },
      ]}>
      {children}
    </Text>
  );
}

export function BackTitle({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <View style={styles.backRow}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBack}
        style={styles.backButton}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>
      <Text
        style={[
          styles.backTitle,
          {
            fontSize: metrics.backTitleSize,
            lineHeight: metrics.backTitleLine,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

export function Panel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.panel, style]}>{children}</View>;
}

export function ActionButton({
  title,
  onPress,
  tone = 'blue',
  disabled = false,
  style,
}: {
  title: string;
  onPress: () => void;
  tone?: 'blue' | 'orange' | 'green' | 'dark';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const palette = {
    blue: [colors.blue, colors.blueDark],
    orange: [colors.orange, colors.orangeDark],
    green: [colors.green, '#236a21'],
    dark: ['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.08)'],
  }[tone];

  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.action,
        {
          backgroundColor: disabled
            ? 'rgba(86, 170, 247, 0.38)'
            : palette[0],
          minHeight: metrics.actionHeight,
          paddingHorizontal: metrics.tiny ? 14 : 18,
        },
        tone === 'dark' && styles.darkAction,
        style,
      ]}>
      <Text
        style={[
          styles.actionText,
          {fontSize: metrics.tiny ? 15 : 16},
          disabled && styles.disabledText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#8a3a08',
  },
  scroll: {
    flexGrow: 1,
  },
  content: {
    width: '100%',
    maxWidth: layout.screenMaxWidth,
    alignSelf: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: '800',
    textAlign: 'center',
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 42,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  backText: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 36,
    fontWeight: '300',
  },
  backTitle: {
    flex: 1,
    color: colors.white,
    fontWeight: '800',
  },
  panel: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: layout.radius,
    backgroundColor: colors.panelSoft,
    overflow: 'hidden',
    ...shadow,
  },
  action: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkAction: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  actionText: {
    color: colors.white,
    lineHeight: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  disabledText: {
    color: 'rgba(255,255,255,0.58)',
  },
});
