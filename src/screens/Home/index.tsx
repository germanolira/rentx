import { useNavigation } from '@react-navigation/native';
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
  Carlist,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: 'Tesla',
    name: 'Model X',
    rent: {
      period: 'AO DIA',
      price: 80,
    },
    thumbnail: 'http://pngimg.com/uploads/tesla_car/tesla_car_PNG47.png'
  };

  function handleCarDetaisl() {
    navigation.navigate('CarDetails');
  }

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

      <Carlist
        data={[1, 2, 3, 4, 5]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car data={carData} onPress={handleCarDetaisl} />}
      />

    </Container>
  );
}