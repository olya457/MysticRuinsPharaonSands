import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNav} from '../components/BottomNav';
import {
  readOnboardingComplete,
  useSavedItems,
  writeOnboardingComplete,
} from '../storage/savedStorage';
import {BlogScreen} from '../screens/BlogScreen';
import {ExploreScreen} from '../screens/ExploreScreen';
import {FactsScreen} from '../screens/FactsScreen';
import {LoadingScreen} from '../screens/LoadingScreen';
import {MapScreen} from '../screens/MapScreen';
import {MoodScreen} from '../screens/MoodScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {PlaceDetailScreen} from '../screens/PlaceDetailScreen';
import {SavedScreen} from '../screens/SavedScreen';
import type {Article, MainTab, Place} from '../types/app';

type Stage = 'loading' | 'onboarding' | 'main';

export function AppNavigator() {
  const [stage, setStage] = useState<Stage>('loading');
  const [activeTab, setActiveTab] = useState<MainTab>('places');
  const [detail, setDetail] = useState<{place: Place; source: MainTab}>();
  const [articleId, setArticleId] = useState<string | undefined>();
  const savedItems = useSavedItems();

  const finishLoading = useCallback(async () => {
    const complete = await readOnboardingComplete().catch(() => false);
    setStage(complete ? 'main' : 'onboarding');
  }, []);

  const finishOnboarding = useCallback(async () => {
    await writeOnboardingComplete().catch(() => undefined);
    setStage('main');
  }, []);

  const selectTab = useCallback((tab: MainTab) => {
    setDetail(undefined);
    setActiveTab(tab);
    if (tab !== 'blog') {
      setArticleId(undefined);
    }
  }, []);

  const openPlace = useCallback(
    (place: Place) => {
      setDetail({place, source: activeTab});
    },
    [activeTab],
  );

  const openArticle = useCallback((article: Article) => {
    setDetail(undefined);
    setArticleId(article.id);
    setActiveTab('blog');
  }, []);

  if (stage === 'loading') {
    return <LoadingScreen onFinish={finishLoading} />;
  }

  if (stage === 'onboarding') {
    return <OnboardingScreen onDone={finishOnboarding} />;
  }

  const activeNav = detail?.source ?? activeTab;
  const screen = detail ? (
    <PlaceDetailScreen
      place={detail.place}
      saved={savedItems.isSaved('places', detail.place.id)}
      onToggleSaved={() => savedItems.toggleSaved('places', detail.place.id)}
      onBack={() => setDetail(undefined)}
    />
  ) : activeTab === 'places' ? (
    <ExploreScreen
      isSaved={id => savedItems.isSaved('places', id)}
      onToggleSaved={id => savedItems.toggleSaved('places', id)}
      onOpenPlace={openPlace}
    />
  ) : activeTab === 'map' ? (
    <MapScreen
      isSaved={id => savedItems.isSaved('places', id)}
      onToggleSaved={id => savedItems.toggleSaved('places', id)}
      onOpenPlace={openPlace}
    />
  ) : activeTab === 'facts' ? (
    <FactsScreen
      isSaved={id => savedItems.isSaved('facts', id)}
      onToggleSaved={id => savedItems.toggleSaved('facts', id)}
    />
  ) : activeTab === 'blog' ? (
    <BlogScreen
      articleId={articleId}
      isSaved={id => savedItems.isSaved('articles', id)}
      onToggleSaved={id => savedItems.toggleSaved('articles', id)}
    />
  ) : activeTab === 'mood' ? (
    <MoodScreen
      isSaved={id => savedItems.isSaved('places', id)}
      onToggleSaved={id => savedItems.toggleSaved('places', id)}
      onOpenPlace={openPlace}
    />
  ) : (
    <SavedScreen
      saved={savedItems.saved}
      hasAnySaved={savedItems.hasAnySaved}
      isPlaceSaved={id => savedItems.isSaved('places', id)}
      isFactSaved={id => savedItems.isSaved('facts', id)}
      isArticleSaved={id => savedItems.isSaved('articles', id)}
      onTogglePlace={id => savedItems.toggleSaved('places', id)}
      onToggleFact={id => savedItems.toggleSaved('facts', id)}
      onToggleArticle={id => savedItems.toggleSaved('articles', id)}
      onOpenPlace={openPlace}
      onOpenArticle={openArticle}
    />
  );

  return (
    <View style={styles.root}>
      {screen}
      <BottomNav active={activeNav} onSelect={selectTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
