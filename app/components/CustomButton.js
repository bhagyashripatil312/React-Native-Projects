import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants'

const CustomButton = ({onPress,title,buttonColor,titleColor,buttonStyle,textStyle}) => {
  return (
   <TouchableOpacity style={{...styles.Container,
                            ...buttonStyle,
                            backgroundColor:buttonColor || COLORS.buttonBackground,
                            }} onPress={onPress}>
    <Text style={{...styles.title,
                 ...textStyle,
                 color:titleColor || COLORS.white }} >{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
Container:{
    marginTop:50,
    backgroundColor:COLORS.quizbutton,
    height:48,
    alignItems:'center',
    justifyContent:'center',
    margin:70,
    borderWidth:4,
    borderRadius:20,
},
title:{
    color:COLORS.white,
    fontSize:20,
}

})