import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import AutoScroll from '@homielab/react-native-auto-scroll'
import { slipData } from '@utils/db'
import Icon from '@components/atoms/Icon'


const FilmSlip = () => {
  return (
    <View>
     <AutoScroll style = {styles.container} endPaddingWidth={0}
     duration={14000}>
     <View style = {styles.girdContainer}>
       {slipData?.map((item, index)=> (
        <View key={index} style = {styles.gridItems}>
            <Text style = {styles.gridText}>
                {"     "}{item}
            </Text>
            <Text style = {styles.gridTextStar}>
                {"     "}
            </Text>
            <Icon name='star-four-points' size={18} color='#888' iconFamily='MaterialCommunityIcons'/>
             </View>
       ))} 
     </View>
     </AutoScroll>
    </View>
  )
}

export default FilmSlip

const styles = StyleSheet.create({
    container : {
        height : 40,
        width : "100%"
    },
    girdContainer :{
        flexDirection : "row",
        alignItems : "center",
        

    },
    gridItems : {
        height : 40,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#000",
        flexDirection : "row"
    },
    gridText : {
       fontSize: RFValue(12),
       color : "#fff",
       fontWeight : "500",
       textAlign : "center"
    },
    gridTextStar : {
        fontSize: RFValue(12),
        color : "#999",
        fontWeight : "bold",
        textAlign : "center"
    }
}) 