import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Allitems from './Allitems'
import CreateScreen from './CreateScreen'
// import React, { useState } from 'react'


const data=[
  {id:1,name:"Wheat",stock:53,unit:"kg},"},
  {id:2,name:"rice",stock:59,unit:"kg},"},
  {id:3,name:"Basmati Rice",stock:5,unit:"kg},"},
  {id:4,name:"Pulse",stock:35,unit:"kg},"},
  {id:5,name:"Corn",stock:25,unit:"kg},"},
  {id:6,name:"Maize",stock:15,unit:"kg},"},
]

const HomeScreen = () => {
  const [view, setview] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>

        <Pressable style={[styles.button, view === 0 ? { backgroundColor: "green" } : null]} onPress={() => setview(0)}>
          <Text style={[styles.btnText, view === 0 ? { color: "white" } : null]}>All items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? { backgroundColor: "green" } : null]} onPress={() => setview(1)}>
          <Text style={[styles.btnText, view === 1 ? { color: "white" } : null]}>Low Stock </Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? { backgroundColor: "green" } : null]} onPress={() => setview(2)}>
          <Text sstyle={[styles.btnText, view === 2 ? { color: "white" } : null]}>Create items</Text>
        </Pressable>
      </View>
      {view === 0 && <Allitems data={data}/>}
      {view === 1 && <Allitems />}
      {view === 2 && <CreateScreen />}

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: "4%",
    backgroundColor: "#f2f2f2"
  },
  title: {
    fontsize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10
  },
  button: {
    paddingVertical: "5",
    paddingHorizontal: "10",
    backgroundColor: "#007bff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#007bff"

  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12
  }
})