import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`

  /* flex: 1; */

`
const Quadrado = styled.View`

  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;

`

const Header = styled.View`

  background-color: #ddd;
  flex-direction: row;
  justify-content: center;
  height: 200px;

`

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="#f00"></Quadrado>
        <Quadrado style={{alignSelf: 'flex-end'}} cor="#0f0"></Quadrado>
        <Quadrado cor="#ccc"></Quadrado>
        <Quadrado cor="#00f"></Quadrado>
      </Header>      
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
