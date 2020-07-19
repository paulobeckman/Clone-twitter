import React from 'react';
import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body, Know_More } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
          <Body>
            <List 
              title = "Talvez você curta"
              elements = {[
                <FollowSuggestion 
                  name = "Paulo Beckman"
                  nickname = "@paulobeckman"
                />,
                <FollowSuggestion 
                  name = "Paulo Beckman"
                  nickname = "@paulobeckman"
                />,
                <FollowSuggestion 
                  name = "Paulo Beckman"
                  nickname = "@paulobeckman"
                />,
                <Know_More>
                  <span>Mostrar Mais</span>
                </Know_More>
              ]}            
            />
            <List 
              title = "O que está acontecendo"
              elements={[
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <Know_More>
                  <span>Mostrar Mais</span>
                </Know_More>
              ]}            
            />
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;