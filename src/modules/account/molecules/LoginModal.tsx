import { Alert, Keyboard, KeyboardAvoidingView, Modal, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { loginOrSignUp } from '../api/api';
import { setData } from '../api/slice';
import { navigate } from '@navigation/NavigationUtil';
import { clearCart } from '@modules/cart/api/slice';
import { modalStyles } from '@styles/modalStyles';

const LoginModal:FC<{visible:boolean, onClose:()=>void}> = ({visible, onClose}) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state=>state.account.user) as any
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState("")

    const handlerLogin = async()=> {
        const data = await loginOrSignUp(number, address)
        if(data){
            dispatch(setData(data))
            onClose()
        } else {
            Alert.alert("There was an error")
        }
    }

    useEffect(()=> {
        if(user?.phone){
            setNumber(user?.phone)
            setAddress(user?.address)
        }
    },[user])


 const handleLogOut = async()=> {
    onClose()
    navigate("Home")
    setAddress('')
    setNumber("")
    await dispatch(clearCart())
    await dispatch(setData(null))
 }
  return (
    <Modal
    visible = {visible}
    animationType = 'slide'
    transparent = {true}
    onRequestClose={onClose}
     >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style = {modalStyles.modalContainer}>
                <KeyboardAvoidingView behavior= {Platform.OS === 'ios' ? 'padding' : "height"}
                style = {modalStyles.keyboardAvoidingView}>
                   <ScrollView>

                   </ScrollView>
                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>
 
    </Modal>
  )
}

export default LoginModal

const styles = StyleSheet.create({})