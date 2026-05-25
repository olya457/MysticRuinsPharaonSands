import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {getResponsiveMetrics} from '../theme/responsive';
import {colors, layout} from '../theme/theme';
import type {Article, Fact, Place} from '../types/app';
import {ActionButton, Panel} from './Screen';
import {SaveButton} from './SaveButton';

const previewText = (text: string, length = 185) =>
  text.length > length ? `${text.slice(0, length).trim()}...` : text;

export function shareContent(title: string, message: string) {
  Share.share({title, message: `${title}\n\n${message}`}).catch(
    () => undefined,
  );
}

export function PlaceCard({
  place,
  saved,
  onToggleSaved,
  onOpen,
  compact = false,
}: {
  place: Place;
  saved: boolean;
  onToggleSaved: () => void;
  onOpen: () => void;
  compact?: boolean;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const imageHeight = compact
    ? metrics.tiny
      ? 122
      : metrics.compact
        ? 136
        : 150
    : metrics.tiny
      ? 134
      : metrics.compact
        ? 160
        : 184;
  const previewLength = metrics.tiny ? 135 : metrics.compact ? 158 : 185;

  return (
    <Panel style={[styles.card, {marginBottom: metrics.gap}]}>
      <Image
        source={place.image}
        style={[styles.placeImage, {height: imageHeight}]}
      />
      <View
        style={[
          styles.saveTop,
          {
            right: metrics.tiny ? 8 : 12,
            top: metrics.tiny ? 8 : 12,
          },
        ]}>
        <SaveButton active={saved} onPress={onToggleSaved} />
      </View>
      <View style={{padding: metrics.cardPadding}}>
        <Text
          style={[
            styles.cardTitle,
            {
              fontSize: metrics.tiny ? 17 : 18,
              lineHeight: metrics.tiny ? 21 : 23,
            },
          ]}
          numberOfLines={2}>
          {place.title}
        </Text>
        <Text
          style={[
            styles.coordinates,
            {marginTop: metrics.tiny ? 3 : 5},
          ]}>
          Coordinates: {place.coordinates}
        </Text>
        <Text
          style={[
            styles.bodyText,
            {
              fontSize: metrics.tiny ? 13 : 14,
              lineHeight: metrics.tiny ? 17 : 18,
              marginTop: metrics.tiny ? 9 : 14,
            },
          ]}>
          {previewText(place.description, previewLength)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOpen}
          style={[
            styles.link,
            {
              marginTop: metrics.tiny ? 6 : 10,
              minHeight: metrics.tiny ? 24 : 28,
            },
          ]}>
          <Text
            style={[
              styles.linkText,
              {fontSize: metrics.tiny ? 15 : 16},
            ]}>
            Learn More
          </Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>
      </View>
    </Panel>
  );
}

export function CompactPlaceCard({
  place,
  saved,
  onToggleSaved,
  onOpen,
}: {
  place: Place;
  saved: boolean;
  onToggleSaved: () => void;
  onOpen: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);
  const thumbSize = metrics.tiny ? 74 : metrics.compact ? 84 : 92;

  return (
    <Panel
      style={[
        styles.compactPlace,
        {
          padding: metrics.tiny ? 8 : 12,
          marginBottom: metrics.gap,
        },
      ]}>
      <Image
        source={place.image}
        style={[
          styles.thumb,
          {
            width: thumbSize,
            height: thumbSize,
            marginRight: metrics.tiny ? 8 : 12,
          },
        ]}
      />
      <View style={styles.compactBody}>
        <Text
          style={[
            styles.cardTitle,
            {
              fontSize: metrics.tiny ? 16 : 18,
              lineHeight: metrics.tiny ? 20 : 23,
            },
          ]}
          numberOfLines={1}>
          {place.title}
        </Text>
        <Text
          style={[
            styles.coordinates,
            {marginTop: metrics.tiny ? 3 : 5},
          ]}
          numberOfLines={1}>
          Coordinates: {place.coordinates}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOpen}
          style={[
            styles.link,
            {
              marginTop: metrics.tiny ? 6 : 10,
              minHeight: metrics.tiny ? 24 : 28,
            },
          ]}>
          <Text
            style={[
              styles.linkText,
              {fontSize: metrics.tiny ? 15 : 16},
            ]}>
            Learn More
          </Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>
      </View>
      <SaveButton active={saved} onPress={onToggleSaved} />
    </Panel>
  );
}

export function FactCard({
  fact,
  saved,
  onToggleSaved,
}: {
  fact: Fact;
  saved: boolean;
  onToggleSaved: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <Panel
      style={[
        styles.factCard,
        {
          padding: metrics.tiny ? 12 : 18,
          marginBottom: metrics.gap,
          minHeight: metrics.tiny ? 260 : metrics.compact ? 286 : 310,
        },
      ]}>
      <View
        style={[
          styles.saveTop,
          {
            right: metrics.tiny ? 8 : 12,
            top: metrics.tiny ? 8 : 12,
          },
        ]}>
        <SaveButton active={saved} onPress={onToggleSaved} />
      </View>
      <Text
        style={[
          styles.factTitle,
          {marginTop: metrics.tiny ? 12 : 20},
        ]}>
        Did you know?
      </Text>
      <Text
        style={[
          styles.factText,
          {
            fontSize: metrics.tiny ? 14 : 15,
            lineHeight: metrics.tiny ? 18 : 19,
            marginTop: metrics.tiny ? 12 : 16,
          },
        ]}>
        {fact.text}
      </Text>
      <Image
        source={fact.image}
        style={{
          width: metrics.tiny ? 118 : 150,
          height: metrics.tiny ? 94 : 122,
          marginTop: metrics.tiny ? 8 : 12,
        }}
        resizeMode="contain"
      />
      <ActionButton
        title="Share"
        tone="orange"
        onPress={() => shareContent('Did you know?', fact.text)}
        style={[
          styles.shareButton,
          {
            minHeight: metrics.smallActionHeight,
            marginTop: metrics.tiny ? -4 : -2,
          },
        ]}
      />
    </Panel>
  );
}

export function ArticlePanel({
  article,
  saved,
  onToggleSaved,
  onNext,
}: {
  article: Article;
  saved: boolean;
  onToggleSaved: () => void;
  onNext: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <Panel style={{marginBottom: metrics.gap}}>
      <Image
        source={article.image}
        style={[
          styles.articleImage,
          {height: metrics.tiny ? 148 : metrics.compact ? 174 : 202},
        ]}
      />
      <View
        style={[
          styles.saveTop,
          {
            right: metrics.tiny ? 8 : 12,
            top: metrics.tiny ? 8 : 12,
          },
        ]}>
        <SaveButton active={saved} onPress={onToggleSaved} />
      </View>
      <View style={{padding: metrics.cardPadding}}>
        <Text style={styles.articleTitle}>{article.title}</Text>
        <Text
          style={[
            styles.bodyText,
            {
              fontSize: metrics.tiny ? 13 : 14,
              lineHeight: metrics.tiny ? 17 : 18,
              marginTop: metrics.tiny ? 10 : 14,
            },
          ]}>
          {article.text}
        </Text>
        <View
          style={[
            styles.articleActions,
            {
              gap: metrics.tiny ? 8 : 12,
              marginTop: metrics.tiny ? 12 : 18,
            },
          ]}>
          <ActionButton
            title="Share"
            tone="orange"
            onPress={() => shareContent(article.title, article.text)}
            style={styles.articleButton}
          />
          <ActionButton
            title="Next article"
            onPress={onNext}
            style={styles.articleButton}
          />
        </View>
      </View>
    </Panel>
  );
}

export function SavedArticleRow({
  article,
  saved,
  onToggleSaved,
  onOpen,
}: {
  article: Article;
  saved: boolean;
  onToggleSaved: () => void;
  onOpen: () => void;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <Panel
      style={[
        styles.savedArticle,
        {
          minHeight: metrics.tiny ? 92 : 108,
          padding: metrics.tiny ? 8 : 12,
          marginBottom: metrics.gap,
        },
      ]}>
      <Image
        source={article.image}
        style={[
          styles.savedArticleImage,
          {
            width: metrics.tiny ? 74 : 92,
            height: metrics.tiny ? 58 : 70,
            marginRight: metrics.tiny ? 8 : 12,
          },
        ]}
      />
      <View style={styles.savedArticleText}>
        <Text
          style={[
            styles.cardTitle,
            {
              fontSize: metrics.tiny ? 16 : 18,
              lineHeight: metrics.tiny ? 20 : 23,
            },
          ]}
          numberOfLines={1}>
          {article.title}
        </Text>
        <Text
          style={[
            styles.coordinates,
            {marginTop: metrics.tiny ? 3 : 5},
          ]}
          numberOfLines={2}>
          {previewText(article.text, 58)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onOpen}
          style={[
            styles.link,
            {
              marginTop: metrics.tiny ? 6 : 10,
              minHeight: metrics.tiny ? 24 : 28,
            },
          ]}>
          <Text
            style={[
              styles.linkText,
              {fontSize: metrics.tiny ? 15 : 16},
            ]}>
            Learn More
          </Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>
      </View>
      <SaveButton active={saved} onPress={onToggleSaved} />
    </Panel>
  );
}

export function EmptyMedia({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image?: ImageSourcePropType;
}) {
  const {width, height} = useWindowDimensions();
  const metrics = getResponsiveMetrics(width, height);

  return (
    <View style={styles.empty}>
      <Text
        style={[
          styles.emptyTitle,
          {
            fontSize: metrics.tiny ? 22 : 24,
            lineHeight: metrics.tiny ? 27 : 30,
            marginTop: metrics.tiny ? 4 : 12,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.emptyText,
          {
            fontSize: metrics.tiny ? 14 : 16,
            lineHeight: metrics.tiny ? 18 : 21,
            marginTop: metrics.tiny ? 10 : 16,
          },
        ]}>
        {text}
      </Text>
      {image ? (
        <Image
          source={image}
          style={[
            styles.emptyImage,
            {
              width: metrics.tiny ? 190 : 230,
              height: metrics.tiny ? 196 : 250,
              marginTop: metrics.tiny ? 14 : 24,
            },
          ]}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
  },
  placeImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  saveTop: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 2,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },
  coordinates: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 5,
  },
  bodyText: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 18,
    marginTop: 14,
  },
  link: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    minHeight: 28,
  },
  linkText: {
    color: colors.blue,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
  },
  linkArrow: {
    color: colors.blue,
    fontSize: 25,
    lineHeight: 26,
    marginLeft: 8,
  },
  compactPlace: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumb: {
    borderRadius: 4,
    resizeMode: 'cover',
  },
  compactBody: {
    flex: 1,
    minWidth: 0,
  },
  factCard: {
    alignItems: 'center',
  },
  factTitle: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  factText: {
    color: colors.white,
    textAlign: 'center',
  },
  shareButton: {
    width: 114,
  },
  articleImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  articleTitle: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },
  articleActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleButton: {
    flex: 1,
  },
  savedArticle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savedArticleImage: {
    borderRadius: 4,
    resizeMode: 'cover',
  },
  savedArticleText: {
    flex: 1,
    minWidth: 0,
    paddingRight: 10,
  },
  empty: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyTitle: {
    color: colors.white,
    fontWeight: '800',
    textAlign: 'center',
  },
  emptyText: {
    color: colors.white,
    textAlign: 'center',
    maxWidth: layout.screenMaxWidth - 64,
  },
  emptyImage: {
    resizeMode: 'contain',
  },
});
