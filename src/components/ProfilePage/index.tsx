import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
         
            <h1>Paulo Beckman</h1>
            <h2>@paulobeckman</h2>

            <p>
            Não sei se pode, mas aqui é um Fotógrafo Programador  <a href="https://rocketseat.com.br/">@Rocketseat</a>
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 30 de outubro de 1999
                </li>
            </ul>

            <Followage>
                <span>
                    segindo <strong>40</strong>
                </span>
                <span>
                    <strong>90 </strong> seguidores
                </span>
            </Followage>
         </ProfileData>
        <Feed />
      </Container>
  );
}

export default ProfilePage;