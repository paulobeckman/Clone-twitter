import React from 'react';

import { Container,  Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
              Você retweetou
          </Retweeted>

          <Body>
              <Avatar>
                 <img src="https://pbs.twimg.com/profile_images/1191850742870618113/h7sMnTzY_400x400.jpg" alt="avatar_img"/>
              </Avatar>

              <Content>
                  <Header>
                      <strong>Paulo Beckman</strong>
                      <span>@paulobeckman</span>
                      <Dot />
                      <time>27 de jun</time>
                  </Header>

                  <Description>Foguete não tem ré <a href="https://rocketseat.com.br/">@Rocketseat</a></Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          999
                      </Status>                      
                  </Icons>

              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;