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

const CalcButton = styled.Button`

  margin-top: 10px;

`

const ResultArea = styled.View`

  width: 100%;
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;

`

const ResultItemTitle = styled.Text`

  font-size: 18px;
  font-weight: bold;

`

const ResultItem = styled.Text`

  font-size: 15px;

`

const PerCentContainer = styled.View`

  margin: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`

export default () => {

  const [bill, setBill] = useState('0')
  const [tip, setTip] = useState(0)
  const [perCent, setPerCent] = useState(10)

  const calc = () => {
    let numericBill = parseFloat(bill)

    if(numericBill)
    {
      setTip( ((perCent/100) * numericBill).toFixed(2) )
    }
    else
    {
      alert('Digite o valor da conta!')
    }
  }

  const calcPerCent = (perCent) => {
    setPerCent(perCent)
  }

  const calcBill = (perCent) => {
    calcPerCent(perCent)
    calc();
  }
  
  return (
    <Page>

      <HeaderText>Calculadora de Gorjeta</HeaderText>

      <Input 
        placeholder='Quanto deu a conta?'
        keyboardType='numeric'
        value={bill}
        onChangeText={n=>setBill(n)}
      />

      <PerCentContainer>
        <Button 
          title="2%"
          onPress={() => calcBill(2)}
        />
        <Button 
          title="5%"
          onPress={() => calcBill(5)}
        />
        <Button 
          title="10%"
          onPress={() => calcBill(10)}
        />
      </PerCentContainer>

      {/* <CalcButton 
        title="Calcular"
        onPress={calc}
      /> */}

      {tip > 0 &&
      
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {bill ? parseFloat(bill).toFixed(2) : 0}</ResultItem>
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip} ({perCent}%)</ResultItem>
          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill)+parseFloat(tip) ? (parseFloat(bill)+parseFloat(tip)).toFixed(2) : 0}</ResultItem>
        </ResultArea>
      
      }
        

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
