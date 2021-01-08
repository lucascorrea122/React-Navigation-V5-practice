import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


import Home from './pages/home';
import Details from './pages/details';

export default function Routes() {
    return (
            
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
      
    );
}