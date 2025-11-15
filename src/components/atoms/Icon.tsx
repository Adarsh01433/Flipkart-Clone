import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface IconProps  {
   color?:string;
   size : number;
   name : string;
   iconFamily : "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons"

}

const Icon:FC<IconProps> = ({color, size, name, iconFamily}) => {
  return (
    <>
    {iconFamily === 'Ionicons' && <Ionicons name={name}  color={color} size={size}/>} 
    {iconFamily === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name}  color={color} size={size}/>} 
    {iconFamily === 'MaterialIcons' && <MaterialIcons name={name}  color={color} size={size}/>} 
    </>
  )
}

export default Icon