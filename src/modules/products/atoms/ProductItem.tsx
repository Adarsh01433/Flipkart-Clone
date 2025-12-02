import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.48;

const ProductItem = ({ item, isOdd }: any) => {
  return (
    <View style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}>
      
      {/* FULL WIDTH IMAGE FIXED */}
      <Image
        source={{ uri: item?.image_uri }}
        style={styles.productImage}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {item?.name}
        </Text>

        <Text style={styles.productDesc} numberOfLines={2}>
          {item?.desc}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountPrice}>₹{item?.price + 599}</Text>
          <Text style={styles.finalPrice}>₹{item?.price}</Text>
        </View>

        <View style={styles.hotDealContainer}>
          <Text style={styles.hotDealText}>Hot Deal</Text>
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
    borderRadius: 8,
    overflow: 'hidden',   // IMPORTANT (removes outside shadow)
    marginBottom: 12,
    elevation: 2,
  },

  // FULL WIDTH IMAGE — NO SHADOW, NO GAP
  productImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',    // Fills full area cleanly
  },

  infoContainer: {
    padding: 10,
  },

  productName: {
    fontSize: RFValue(11),
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },

  productDesc: {
    fontSize: RFValue(9),
    color: '#555',
    marginBottom: 8,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },

  discountPrice: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
    fontSize: RFValue(10),
    color: '#444',
  },

  finalPrice: {
    fontSize: RFValue(12),
    fontWeight: '700',
    color: '#000',
  },

  hotDealContainer: {
    backgroundColor: '#E7F9EC',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },

  hotDealText: {
    color: '#35AB4F',
    fontSize: RFValue(9),
    fontWeight: '700',
  },
});
