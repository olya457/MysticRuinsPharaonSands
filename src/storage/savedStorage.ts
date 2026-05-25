import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useMemo, useState} from 'react';
import type {SavedKind, SavedState} from '../types/app';

const savedKey = '@mystic_ruins_saved_items';
const onboardingKey = '@mystic_ruins_onboarding_complete';

const emptySaved: SavedState = {
  places: [],
  facts: [],
  articles: [],
};

export const readOnboardingComplete = async () => {
  const value = await AsyncStorage.getItem(onboardingKey);
  return value === 'true';
};

export const writeOnboardingComplete = async () => {
  await AsyncStorage.setItem(onboardingKey, 'true');
};

export function useSavedItems() {
  const [saved, setSaved] = useState<SavedState>(emptySaved);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    AsyncStorage.getItem(savedKey)
      .then(value => {
        if (!mounted) {
          return;
        }

        if (value) {
          const parsed = JSON.parse(value) as SavedState;
          setSaved({
            places: Array.isArray(parsed.places) ? parsed.places : [],
            facts: Array.isArray(parsed.facts) ? parsed.facts : [],
            articles: Array.isArray(parsed.articles) ? parsed.articles : [],
          });
        }
      })
      .catch(() => undefined)
      .finally(() => {
        if (mounted) {
          setReady(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (ready) {
      AsyncStorage.setItem(savedKey, JSON.stringify(saved)).catch(
        () => undefined,
      );
    }
  }, [ready, saved]);

  const isSaved = useCallback(
    (kind: SavedKind, id: string) => saved[kind].includes(id),
    [saved],
  );

  const toggleSaved = useCallback((kind: SavedKind, id: string) => {
    setSaved(current => {
      const exists = current[kind].includes(id);
      return {
        ...current,
        [kind]: exists
          ? current[kind].filter(item => item !== id)
          : [id, ...current[kind]],
      };
    });
  }, []);

  const clearKind = useCallback((kind: SavedKind) => {
    setSaved(current => ({...current, [kind]: []}));
  }, []);

  const hasAnySaved = useMemo(
    () =>
      saved.places.length > 0 ||
      saved.facts.length > 0 ||
      saved.articles.length > 0,
    [saved],
  );

  return {saved, ready, isSaved, toggleSaved, clearKind, hasAnySaved};
}
