import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`

  background-color: #00f;
  flex: 1;

`
const Texto = styled.Text`

  color: ${props => props.cor};
  font-size: 20px;

`

export default () => {
  return (
    <Page>
      <Texto cor="#0f0" >Olá, Mundo!</Texto>
      <Texto cor="#f00" >Olá, Galáxia!</Texto>
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
