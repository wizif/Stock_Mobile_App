import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native/types_generated/index'

const Allitems = () => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quality</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={({item})=>{
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Items</Text>
          <Text style={styles.itemText}>Quantity</Text>
        </View>
      }} />
    </View>
  )
}

export default Allitems

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    // backgroundColor:"lightgrey",
    // borderRadius:5
  },
  headingText:{
    fontSize:18,
    fontWeight:"bold",
    // color:"#333"
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    // borderBottomWidth:1,
    // borderBottomColor:"#ccc"
  }
})