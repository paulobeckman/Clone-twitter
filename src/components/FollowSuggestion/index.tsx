import React from 'react';

import { Container, Avatar, Infor, FollowButton } from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({
    name, nickname
}) => {
  return (
      <Container>
          <div>
              <Avatar />

              <Infor>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
              </Infor>
          </div>

          <FollowButton outlined>Seguir</FollowButton>
      </Container>
  );
}

export default FollowSuggestion;