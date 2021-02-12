import { Card, Spinner } from 'native-base';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Article } from '../model/Article';
import { NewsService } from '../services/NewsService';
import { NewsItem } from './NewsItem';

const newsService = new NewsService();

export const NewsHolder = () => {
  const [news, setNews] = useState<Article[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await newsService.getTopHeadlinesByCountry('ro');
      setNews(articles);
    };
    fetchData();
  }, []);

  return (
    <Card style={{ flex: 0 }}>
      {!news ? (
        <Spinner color={'green'} />
      ) : (
        (news as Article[]).map(article => <NewsItem key={article.url} article={article} />)
      )}
    </Card>
  );
};
