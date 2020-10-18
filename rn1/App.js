import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`

  flex: 1;
  /* justify-content: center; */
  align-items: center;

`

const HeaderText = styled.Text`

  font-size: 25px;
  /* flex: 1; */
  margin-top: 20px;

`

const Input = styled.TextInput`

  width: 90%;
  height: 50px;
  font-size: 18px;
  background: #EEE;
  margin-top: 20px;
  padding: 0 10px;
  border-radius: 10px;

`

export default () => {

  const [bill, setBill] = useState('0')
  
  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder='Quanto deu a conta?'
        keyboardType='numeric'
        value={bill}
        onChangeText={n=>setBill(n)}
      />
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
