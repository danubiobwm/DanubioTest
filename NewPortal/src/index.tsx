import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { NewsAppHeader } from './components/NewsAppHeader';
import { NewsHolder } from './components/NewsHolder';

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <NewsAppHeader />
        <Content>
          <NewsHolder />
        </Content>
      </Container>
    );
  }
}
