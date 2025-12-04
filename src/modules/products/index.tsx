import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { getProductsByCategory } from './api/getProducts';
import { screenHeight } from '@utils/Constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from './atoms/SearchBar';
import ProductItem from './atoms/ProductItem';
import { useAppSelector } from '@store/reduxHook';
import { selectTotalItemsInCart } from '@modules/cart/api/slice';

const Products: FC = () => {
  const route = useRoute();
  const category = route?.params as any;
  const count = useAppSelector(selectTotalItemsInCart);
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const data = await getProductsByCategory(category?.id);
    setProducts(data);
  };

  useEffect(() => {
    if (category?.id) {
      fetchProducts();
    }
  }, [category?.id]);

   const renderItem = ({item, index}:any)=> {
    const isOdd = index % 2 !== 0
    return(
      
      <ProductItem isOdd = {isOdd} item = {item}/>
    )
   }

  return (
    <SafeAreaView style = {styles.container}>
        <SearchBar cartLength={count} />
        <FlatList bounces = {false} data={products} 
         renderItem={renderItem} keyExtractor={(item)=>item._id.toString()}
         numColumns={2} 
         ListEmptyComponent={
          <View style = {styles.emptyContainer}>
            <Text style = {styles.emptyText}>Ooops! No item in this category</Text>
          </View>
         } contentContainerStyle = {styles.listContainer}/>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#E0E0E0",

  }, 
  listContainer : {
    paddingBottom : 30,
    backgroundColor : "#fff",
  },

  emptyContainer : {
    height : screenHeight - 80,
    width : '100%',
    justifyContent : "center",
    alignItems : "center"
  },
  emptyText : {

  }
});

