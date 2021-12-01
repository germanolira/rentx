import React from 'react';
import { useWindowDimensions } from 'react-native';

// { Dimensions } só é usado em lugares que não consegue usar hooks
// Hooks só podem ser usados em componentes React, ou seja, dentro de uma função

import LogoSvg from '../../../assets/logo_background_gray.svg';
import DoneSvg from '../../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
} from './styles';

const { width } = useWindowDimensions();

export function SchedulingComplete() {
  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>
    </Container>
  );
}