import React from 'react';

import Tweet from '../Tweet'

import { Container, Tab, Tweets,  MenuOptions } from './styles';

const Feed: React.FC = () => {
  return (
      <Container>
          <MenuOptions>
            <Tab className="selected">Tweets</Tab>
            <Tab>Tweets e respostas</Tab>
            <Tab>Mídia</Tab>
            <Tab>Curtidas</Tab>
          </MenuOptions>

          <Tweets>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
          </Tweets>
      </Container>
  );
}

export default Feed;