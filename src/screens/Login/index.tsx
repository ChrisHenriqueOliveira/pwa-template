import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import { Container, LoginButton } from './styles';

const Login: React.FC = () => {

  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
        <Container> 
          <LoginButton iconName="send"> Login </LoginButton>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;