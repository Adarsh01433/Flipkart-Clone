import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { getHomeContent } from './api/actions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSharedValue } from 'react-native-reanimated'

const Home = () => {
    
  const insets = useSafeAreaInsets()

  const scrollYGlobal = useSharedValue(0)

  
  

  return (
    <View style = {styles.container}>
      <View  style = {{height : Platform.OS === 'android' ? insets.top : 0}} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#fff"
  }
})