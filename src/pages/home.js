import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Home({navigation}) {
  return(
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
    
  );
}