import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton, Banner_Img} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Banner_Img>
                <img src="https://pbs.twimg.com/profile_banners/713537396189564928/1572994364/1500x500" alt=""/>
              </Banner_Img>

              <Avatar>
                <img src="https://pbs.twimg.com/profile_images/1191850742870618113/h7sMnTzY_400x400.jpg" alt="avatar-paulo"/>
              </ Avatar > 
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
         
            <h1>Paulo Beckman</h1>
            <h2>@paulobeckman</h2>

            <p>
            Não sei se pode, mas aqui é um Fotógrafo Programador
            </p>
            <ul>
                <li>
                    <LocationIcon />
                    Santarém, Pará
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