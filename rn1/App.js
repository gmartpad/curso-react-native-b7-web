import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`

const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000 !important;
  margin-top: 30px;
`

const Hello = ({ frase }) => {

  const [name, setName] = useState('Gabriel Martins Padoin')
  const [mostrar, setMostrar] = useState(false)

  const mudarTexto = (texto) => {
    setName(texto)
  }

  const handleClick = () => {
    setMostrar(!mostrar);
  }

  return(
    <View>

      <Input 
        value={name}
        onChangeText={mudarTexto} 
        placeholder="passa o radinho"
      />

      <Button onPress={handleClick} title={mostrar ? "Ocultar Nome" : "Mostrar Nome"} />

      {mostrar && 
      
        <Quadrado>
          <Text>{name}</Text>
        </Quadrado>
      
      }

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
