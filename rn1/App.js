import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`

const Hello = ({ frase }) => {

  const [name, setName] = useState('Gabriel Martins Padoin')

  // const mudarTexto = (texto) => {
  //   setName(texto)
  // }

  return(
    <View>
      <Text>
        {name}
      </Text>
      <Input 
        value={name}
        onChangeText={t=>setName(t)} 
        placeholder="passa o radinho"
      />
    </View>
  )
}

const Page = styled.SafeAreaView`

  flex: 1;
  justify-content: center;
  align-items: center;

`
export default () => {

  return (
    <Page>
      <Hello frase="dai mermão passa o radinho"/>  
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
