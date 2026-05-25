import type {ImageSourcePropType} from 'react-native';

export type PlaceCategory = 'pyramids' | 'museums' | 'ruins';

export type SavedKind = 'places' | 'facts' | 'articles';

export type MainTab = 'places' | 'map' | 'facts' | 'blog' | 'mood' | 'saved';

export type Place = {
  id: string;
  title: string;
  category: PlaceCategory;
  coordinates: string;
  latitude: number;
  longitude: number;
  description: string;
  image: ImageSourcePropType;
};

export type Fact = {
  id: string;
  text: string;
  image: ImageSourcePropType;
};

export type Article = {
  id: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
};

export type SavedState = {
  places: string[];
  facts: string[];
  articles: string[];
};
