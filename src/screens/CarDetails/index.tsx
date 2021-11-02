import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => { }}
        />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['http://pngimg.com/uploads/tesla_car/tesla_car_PNG47.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price> R$ 500</Price>
          </Rent>
        </Details>
      </Content>
    </Container>
  );
}