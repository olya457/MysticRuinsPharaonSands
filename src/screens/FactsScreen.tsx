import React from 'react';
import {FactCard} from '../components/Cards';
import {BackgroundScreen, ScreenTitle} from '../components/Screen';
import {facts} from '../data/facts';

export function FactsScreen({
  isSaved,
  onToggleSaved,
}: {
  isSaved: (id: string) => boolean;
  onToggleSaved: (id: string) => void;
}) {
  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Ancient Facts</ScreenTitle>
      {facts.map(fact => (
        <FactCard
          key={fact.id}
          fact={fact}
          saved={isSaved(fact.id)}
          onToggleSaved={() => onToggleSaved(fact.id)}
        />
      ))}
    </BackgroundScreen>
  );
}
