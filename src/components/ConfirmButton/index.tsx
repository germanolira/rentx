import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

// Como criar um botão com RectButtonProps
// Ao ínves de TouchableOpacity, e Button do React Native
// Aqui embaixo vai a interface, e no styled components o RectButton

interface Props extends RectButtonProps {
  title: string;
}

export function ConfirmButton({
  title,
  ...rest
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}