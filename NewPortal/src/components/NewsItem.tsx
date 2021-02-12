import { CardItem, Body, Text, H3 } from 'native-base';
import { Article } from '../model/Article';
import * as React from 'react';
import { Image } from 'react-native';

interface Props {
  article: Article;
}

export const NewsItem: React.FC<Props> = props => {
  return (
    <CardItem>
      <Body>
        <H3>{props.article.title}</H3>
        <Image source={{ uri: props.article.urlToImage }} style={{height: 200, width: 200, flex: 1}} resizeMode={'contain'}/>
        <Text>{props.article.description}</Text>
      </Body>
    </CardItem>
  );
};
