import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Details({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Text/>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> 
        <Text/>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Text/>
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        />
      </View>

  );
}