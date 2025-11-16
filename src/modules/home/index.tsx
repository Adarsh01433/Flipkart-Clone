import { Platform, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { screenHeight } from '@utils/Constants'
import MenuHeader from './molecules/MenuHeader'
import SearchBar from './molecules/SearchBar'
import MainList from './templates/MainList'

const Home = () => {

  const insets = useSafeAreaInsets()
  const scrollYGlobal = useSharedValue(0)

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ translateY }],
    }
  })

  return (
    <SafeAreaView style={styles.container}>  
      {/* NO spacer needed anymore */}

      <Animated.View style={[moveUpStyle]}>
        <MenuHeader scrollY={scrollYGlobal} />
        <SearchBar/>
      </Animated.View>

      <Animated.View style={[moveUpStyle, { height: screenHeight }]}>
       <MainList/>
      </Animated.View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
