import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';




const Dots = (props : {index : number; active : number}) => {
      const {active, index} = props

  return (
    <View style = {{width : active === index ? 35 :20,
      height : 4,
      borderRadius : 50,
      backgroundColor : "#DFDFDF",
      overflow : "hidden",
      marginHorizontal : 5
    }}>
      <Animated.View style = {{height : "100%", backgroundColor : "#000",
      borderRadius : 50

      }}>

      </Animated.View>
    </View>
  )
}

export default Dots

const styles = StyleSheet.create({})