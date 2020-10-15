import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.texto}>Olá, Mundo!</Text>
      <Text style={[styles.texto, {fontSize: 16}]}>Olá, Galáxia!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 page: {
   width: 200,
   height: 200,
   backgroundColor: '#00ffff'
 },
 texto: {
   fontSize: 20,
   fontStyle: 'italic'
 } 
})

//-----------------------------------------------------

// import React, { Component } from 'react'
// import { Text } from 'react-native'

// const App = () => {
//   return (
//     <Text>
//       Jooj
//     </Text>
//   )
// }

// class App extends Component {
  
//   render(){
//     return (
//       <Text>
//         Componente de classe
//       </Text>
//     )
//   }
// }

// export default App
