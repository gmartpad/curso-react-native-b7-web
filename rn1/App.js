import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const Hello = ({ frase }) => {

  const [name, setName] = useState('Gabriel Martins Padoin')

  return(
    <Text>
      {frase} - {name}
    </Text>
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
