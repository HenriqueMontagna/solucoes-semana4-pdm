import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState('')

  const[previsoes, setPrevisoes] = useState('')

  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q="

  const apiKey = "106ef2f5efca972629c768cfd89a6816"

  // const apiKey = "2484cdd300b2f15e8ec0d8d9bff9f955"


  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then( (dados) => dados.json())
    .then( (dados) => {
      setPrevisoes(dados)
      Keyboard.dismiss()
    });
  }


  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style = {styles.nomeCidade}
          placeholder = "Digite o Nome da Cidade"
          value = {cidade}
          onChangeText = {capturarCidade}
        />
        <Button 
          title = "ok"
          onPress = {obterPrevisoes}
        />
      </View>


      <PrevisaoItem previsao = {previsoes} />
      {/* <FlatList 
        data = {previsoes}
        renderItem = {
          previsao => (
            <PrevisaoItem previsao = {previsao.item}/>
          )
        } 
      /> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },

  nomeCidade: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: "left",
    flexGrow: 0.9
  },

  entrada: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  }


});
