import React, {useEffect, useMemo, useState} from 'react';
import {ArticlePanel} from '../components/Cards';
import {BackgroundScreen, ScreenTitle} from '../components/Screen';
import {articles} from '../data/articles';

export function BlogScreen({
  articleId,
  isSaved,
  onToggleSaved,
}: {
  articleId?: string;
  isSaved: (id: string) => boolean;
  onToggleSaved: (id: string) => void;
}) {
  const startIndex = useMemo(() => {
    if (!articleId) {
      return 0;
    }
    const found = articles.findIndex(article => article.id === articleId);
    return found >= 0 ? found : 0;
  }, [articleId]);
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const article = articles[index];

  return (
    <BackgroundScreen withBottomNav>
      <ScreenTitle>Blog</ScreenTitle>
      <ArticlePanel
        article={article}
        saved={isSaved(article.id)}
        onToggleSaved={() => onToggleSaved(article.id)}
        onNext={() => setIndex(current => (current + 1) % articles.length)}
      />
    </BackgroundScreen>
  );
}
