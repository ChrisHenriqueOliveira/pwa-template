import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const Home: React.FC = () => {

  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
        <Container> 
          <Button
            buttonStyle={{ width: 150 }}
            containerStyle={{ margin: 8 }}
            icon={{}}
            loadingProps={{ animating: true }}
            onPress={() => alert("chhlick")}
            title="Hello"
            titleProps={{}}
          />   
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;