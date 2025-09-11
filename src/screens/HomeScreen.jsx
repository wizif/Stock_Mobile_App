import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

const HomeScreen = () => {
const [view, setview] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>

      <Pressable style={styles.button} onPress={()=>setview(0)}>
        <Text style={styles.btnText}>All items</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>setview(1)}>
        <Text style={styles.btnText}>Low Stock </Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=>setview(2)}>
        <Text style={styles.btnText}>Create items</Text>
      </Pressable>
      </View>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:"4%",
        backgroundColor:"#f2f2f2"
    },
    title:{
        fontsize:24,
        fontWeight:"bold",
        color:"#333",
    },
buttonContainer:{
    flexDirection:"row",
    gap:10,
    marginVertical:10
},
button:{
    paddingVertical:"5",
    paddingHorizontal:"10",
    backgroundColor:"#007bff",
    borderRadius:50,
    borderWidth:1,
    borderColor:"#007bff"

},
btnText:{
    color:"#fff",
    fontWeight:"bold"  ,
    fontSize:12 
}
})