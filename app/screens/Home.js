import React from 'react'
import { Text, View ,StyleSheet, Image} from 'react-native'
import CustomButton from '../components/CustomButton'
import { COLORS } from '../constants'


const Home = ({navigation}) => {
  const startQuizeHandler = () => {
    console.log("hello");
    navigation.navigate('MyQuizApp')
  }
    
  return (
    <View style={styles.Container}>
    <View style={styles.TitleContainer}>
    <Text style={styles.Title}>Welcome to Quiz App</Text>
    </View>
   <View>
    <Image style={styles.quizeImage} source={require('../assets/images/abc.jpg')}/>
   <CustomButton 
   buttonColor={COLORS.quizbutton}
   titleColor={COLORS.white}
   title="Start Quiz"
//    buttonStyle={{width:'60%',alignSelf:'self'}}
//    textStyle={{fontSize:20}}
//    onPress={startQuizeHandler}
      onPress ={startQuizeHandler}
   />
   </View>
   
  </View>
  )
  }

export default Home

const styles = StyleSheet.create({
    Container :{
     backgroundColor:COLORS.background,
     flex:1,
    },
    Title:{
     color: COLORS.white,
     fontSize: 25,
    //  marginTop:40,
    padding:30,
    
   },
   TitleContainer:{
    alignItems:'center', 
    justifyContent:'center',
    marginBottom:70,
    marginTop:50,
    borderWidth:5,
    borderColor:COLORS.success,
    marginLeft:40,
    marginRight:40,
    borderRadius:20,
   },
   quizeImage:{
    width: 110,
    height:90,
    // alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    marginLeft:130,
    borderRadius:600
   }
   })