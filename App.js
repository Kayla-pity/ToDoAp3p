import React from "react";  
import { StyleSheet, Text , View } from "react-native";

export default  function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas </Text>
     <View style={styles.vermelho}></View>
     <View style={styles.verde}></View>
     <View style={styles.azul}></View>
    </View>
  )
}

const styles = StyleSheet.create ({
container: {
  height:90,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
gap:10
},
vermelho:{
  height:60,
  width:60,
  backgroundColor:'red'
},
verde:{
  height:60,
  width:60,
  backgroundColor:'green'
},
azul:{
  height:60,
  width:60,
  backgroundColor:'blue'
},
})