import { StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme } from '@react-navigation/native';
import { BookDetail } from "./screens/";
import Tabs from "./navigation/Tabs";
import { useFonts } from 'expo-font';
import { Home } from './screens/';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}
export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
})

if(!loaded){
return null;
}
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
    }}
    initialRouteName='Home'>
        <Stack.Screen 
        name="Home"
        component={Tabs}/>
        <Stack.Screen 
        name='BookDetail'
        component={BookDetail}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({

});
