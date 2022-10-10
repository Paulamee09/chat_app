import React from 'react'
import { NativeBaseProvider} from 'native-base'
import { StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// import screens
import IntroScreen from './src/screen/IntroScreen'
import SignInScreen from './src/screen/SignInScreen'
import LogInScreen from './src/screen/LogInScreen'

// create stack
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={IntroScreen}/>
          <Stack.Screen name='LogIn' component={LogInScreen}/>
          <Stack.Screen name='SignIn' component={SignInScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
