import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const ProductItem = ({ item, isOdd }: any) => {
  return (
    <View style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.image_uri }} style={styles.productImage} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.productName}>{item?.name}</Text>
        <Text numberOfLines={2} style={styles.productDesc}>
          {item?.desc}
        </Text>
        <Text>
          {styles.productPrice}
          <Text style={{ textDecorationLine: 'line-through', opacity: 0.6 }}>
            ₹{item?.price + 599}
          </Text>
          {''}₹{item?.price}
        </Text>
        <View style = {styles.flexRow}>
            <View style = {styles.hotDealContainer}> 
             <Text style = {styles.hotDealText}>Hot Deal</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    width: '48%',
    overflow: 'hidden',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#F7F7F7',
    width: '180%',
    height: 240,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName : {
    fontSize : RFValue(10),
    marginTop : 10,
  },
  productDesc : {
    fontSize : RFValue(9),
        color : "#555",
        textAlign : "left",
        marginTop : 5,
    
  },
  productPrice : {
    fontSize : RFValue(10),
    color : "#000",
    marginTop : 10,
    fontWeight : '500',
  },
  flexRow : {
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
  },
  hotDealContainer : {
    justifyContent : "center",
    alignItems : "center",
    padding : 5,
    marginTop : 10,
    borderRadius : 4,
    alignSelf : "flex-start",
    backgroundColor : "#E7F9EC"
  },
  hotDealText : {
    color : "#35AB4F",
    fontSize : RFValue(10),
    fontWeight : "700"
  }
});
