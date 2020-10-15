import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`

  flex: 1;
  flex-direction: row;
  /* justify-content: flex-end; */

`
const Quadrado = styled.View`

  background-color: ${props => props.cor};
  flex: ${props => props.flex};
  /* width: 50px; */
  /* height: 50px; */

`

export default () => {
  return (
    <Page>
      <Quadrado flex={1} cor="#f00"></Quadrado>
      <Quadrado flex={1} cor="#0f0"></Quadrado>
      <Quadrado flex={1} cor="#00f"></Quadrado>
    </Page>
  )
}

// const styles = StyleSheet.create({
//  page: {
//    width: 200,
//    height: 200,
//    backgroundColor: '#00ffff'
//  },
//  texto: {
//    fontSize: 20,
//    fontStyle: 'italic'
//  } 
// })

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
