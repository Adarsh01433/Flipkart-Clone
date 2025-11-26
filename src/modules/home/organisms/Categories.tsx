import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { navigate } from '@navigation/NavigationUtil'
import { Colors, screenHeight, screenWidth } from '@utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'

const Categories: FC<{ data: any }> = ({ data }) => {

  const renderItem = ({ item }: any) => {
    return (
      <Pressable 
        onPress={() => navigate("Categories")}
        style={styles.itemContainer}
      >
        <Image 
          source={{ uri: item?.image_uri }}
          style={styles.contentImage}
        />
        <Text style={styles.nameText}>{item?.name}</Text>
      </Pressable>
    )
  }

  return (
  <ScrollView 
    horizontal 
    showsVerticalScrollIndicator = {false}
  >
    <FlatList
      numColumns={Math.ceil(data?.data?.length / 2)}
      data={data?.data}
      renderItem={renderItem}
      scrollEnabled={false}
    
      keyExtractor={item => item?.id?.toString()}
      contentContainerStyle={styles.listContainer}
      style={styles.listContentContainer}
      showsHorizontalScrollIndicator={false}
    />
  </ScrollView>
);

}



const styles = StyleSheet.create({

  listContentContainer: {
    paddingVertical: 15, 
  },

  listContainer: {
    paddingHorizontal: 12,
  },

  itemContainer: {
    width: screenWidth * 0.23,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    marginRight: 16,
  },

  contentImage: {
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 6,
  },

  nameText: {
    textAlign: "center",
    fontWeight: "500",
    color: Colors.text,
    fontSize: RFValue(10),
  },
})

export default Categories
