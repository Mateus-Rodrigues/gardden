import { useState } from "react";

import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Button, Image } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';


const Cadastro = () => {

  const [nome, setNome] = useState(' ');
  const [usuario, setUsuario] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [trabalho, setTrabalho] = useState(' ');
  const [estCivil, setEstCivil] = useState(' ');
  const [senha, setSenha] = useState(' ');
  const [confirmar, setConfirmar] = useState(' ');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Nome:', nome);
    console.log('Usuario:', usuario);
    console.log('Email:', email);
    console.log('Trabalho:', trabalho);
    console.log('estado civil:', estCivil);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmar);
  };

  return (
    <View>
      <StatusBar
        barStyle="light-content" // Define o estilo da barra (pode ser "light-content", "dark-content" ou "default")
        backgroundColor="#000" // Define a cor de fundo da barra de status (Android)
        translucent={false} // Controla se a barra de status é translúcida (Android)
      />
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")} >
        <Text style={styles.title}>GARDEN</Text>

        <View style={styles.container}>

          <Text style={styles.cad}>Cadastre-se</Text>

          <View style={styles.textForm}>

            <TextInput placeholder="Nome Completo " style={styles.inpTex} onChangeText={setNome} keyboardType="default" placeholderTextColor={'#fff'} />
            <TextInput placeholder="Nome de usuário" style={styles.inpTex} onChangeText={setUsuario} placeholderTextColor={'#fff'} />
            <TextInput placeholder="E-mail" style={styles.inpTex} onChangeText={setEmail} placeholderTextColor={'#fff'} />
            <TextInput placeholder="Profissão" style={styles.inpTex} onChangeText={setTrabalho} placeholderTextColor={'#fff'} />
            <TextInput placeholder="Estado Civil" style={styles.inpTex} onChangeText={setEstCivil} placeholderTextColor={'#fff'} />


            <View style={styles.olho}>
              <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={setSenha} placeholderTextColor={'#fff'} />
              <Icon name="eye" size={20} color="#000" style={styles.icon} />
            </View>


            <View style={styles.olho}>
              <TextInput placeholder="Confirmar senha" style={styles.inpTex} onChangeText={setConfirmar} placeholderTextColor={'#fff'} />
              <Icon name="eye" size={20} color="#000" style={styles.icon} />
            </View>
          </View>

          <MyButton title="CRIAR" onClick={handleLogin} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Cadastro;
