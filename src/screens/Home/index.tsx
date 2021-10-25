import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
} from './styles';

export function Home() {
  const carData = {
    brand: 'Tesla',
    name: 'Model X',
    rent: {
      period: 'AO DIA',
      price: 80,
    },
    thumbnail: 'http://pngimg.com/uploads/tesla_car/tesla_car_PNG47.png'
  };

  const carData1 = {
    brand: 'Tesla',
    name: 'Model X',
    rent: {
      period: 'AO DIA',
      price: 80,
    },
    thumbnail: 'http://pngimg.com/uploads/tesla_car/tesla_car_PNG47.png'
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
      <Car data={carData1} />
    </Container>
  );
}