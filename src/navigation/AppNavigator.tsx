import React from 'react'
import Home from '../screens/Home'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddClub from '../screens/AddClub';
import ClubDetails from '../screens/ClubDetails';
import PlayerHistory from '../screens/PlayerHistory';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: true,
            ...TransitionPresets.SlideFromRightIOS, // Use slide animation
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddClub" component={AddClub} />
          <Stack.Screen name="ClubDetails" component={ClubDetails} />
          <Stack.Screen name="PlayerHistory" component={PlayerHistory} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator