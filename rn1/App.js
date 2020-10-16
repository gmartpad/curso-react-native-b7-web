import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`

const Hello = ({ frase }) => {

  const [name, setName] = useState('Gabriel Martins Padoin')
  const [backupName, setBackupName] = useState('');

  const mudarTexto = (texto) => {
    setName(texto)
  }

  const handleClick = () => {
    setBackupName(name);
  }

  return(
    <View>
      <Text>
        {backupName}
      </Text>
      <Input 
        value={name}
        onChangeText={mudarTexto} 
        placeholder="passa o radinho"
      />
      <Button onPress={handleClick} title="Salvar" />
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
