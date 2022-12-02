/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { View , StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import { COLORS } from './app/constants';
import React from 'react'
import Home from './app/screens/Home';
import MyQuizApp from './app/screens/MyQuizApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  
   return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home} />
          <Stack.Screen 
          name="MyQuizApp"
          component={MyQuizApp}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('are you sure you want to end quiz ?')}
                title="End Quiz"
                color={COLORS.success}
              />
            ),
          }} 
         
          />
      </Stack.Navigator>
    </NavigationContainer>
  
   
   );
 };
 
 
 export default App;
 const styles = StyleSheet.create({
 Container :{
  backgroundColor:COLORS.background,
  flex:1,
 },
 
})