import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import Icon from '@components/atoms/Icon';
import { goBack, navigate } from '@navigation/NavigationUtil';

interface SearchBarProps {
  cartLength : number;
}

const SearchBar:FC<SearchBarProps> = ({cartLength}) => {
  return (
    <View style = {styles.container}>
      <Pressable onPress={()=> goBack()}>
        <Icon name='arrow-left' size={24} iconFamily='MaterialCommunityIcons' color='#000'/>
      </Pressable>
      <View style = {styles.searchContainer}>
        <Icon color = "#000" size={20} name='search' iconFamily='MaterialIcons' />
        <TextInput style = {styles.searchInput} placeholder='Search Products'  placeholderTextColor={"#666"}/>
        {cartLength > 0 && 
            <View style = {styles.badge}> 
            <Text style = {styles.badgeText}>{cartLength}</Text>
              </View>}
      </View>
      <Icon size={24} name='heart-outline' iconFamily='Ionicons' color='#000'/>
      <Pressable onPress={()=>navigate("cart")}>
        <Icon size={24} name='cart-sharp' iconFamily='Ionicons' color='#000'/>
      </Pressable>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container : {
    flexDirection :"row",
    alignItems : "center",
    padding : 10,
    gap : 5
  },
  searchContainer : {
    flexDirection : "row",
    alignItems : "center",
    backgroundColor : "#fff",
    borderRadius : 10,
    paddingHorizontal : 10,
    width: '70%',
    marginHorizontal : 10
  },
  searchIcon : {
    marginRight : 15,
  },
  searchInput : {
    flex : 1,
    height : 40,
    color : '#000'
  },
  cartContainer : {
    position : "relative"
  },
  badge : {
    position : 'relative',
    top : -5,
    right : -6,
    backgroundColor : "red",
    borderRadius : 10,
   width : 16,
   height : 16,
   justifyContent : "center",
   alignItems : "center"
  },
  badgeText : {
    color : "#fff",
    fontSize : 12,
    fontWeight : "bold"
  }

})