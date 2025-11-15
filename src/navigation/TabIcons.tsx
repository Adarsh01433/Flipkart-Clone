import React from "react";
import Icon from "@components/atoms/Icon";

interface TabIconProps {
    focused : boolean;
    size : number;
    color : string;
}

export const HomeIcon:React.FC<TabIconProps> = ({focused, size, color})=> {
  return(
    <Icon 
    name = {focused ? 'home' : 'home-outline'}
    size = {size}
    iconFamily = 'Ionicons'
    color = {color}
    />
  )
}


export const AccontIcon:React.FC<TabIconProps> = ({focused, size, color})=> {
  return(
    <Icon 
    name = {focused ? 'person' : 'person-outline'}
    size = {size}
    iconFamily = 'Ionicons'
    color = {color}
    />
  )
}



export const CategoriesIcon:React.FC<TabIconProps> = ({focused, size, color})=> {
  return(
    <Icon 
    name = {focused ? 'grid' : 'grid-outline'}
    size = {size}
    iconFamily = 'Ionicons'
    color = {color}
    />
  )
}

export const CartIcon:React.FC<TabIconProps> = ({focused, size, color})=> {
  return(
    <Icon 
    name = {focused ? 'cart' : 'cart-outline'}
    size = {size}
    iconFamily = 'MaterialCommunityIcons'
    color = {color}
    />
  )
}