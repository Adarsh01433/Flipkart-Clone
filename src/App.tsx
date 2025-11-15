import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navgation from '@navigation/Navgation'
import { Provider } from 'react-redux'
import { store } from '@store/store'

const App = () => {
  return (
   <Provider store={store} >
     <Navgation/>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})