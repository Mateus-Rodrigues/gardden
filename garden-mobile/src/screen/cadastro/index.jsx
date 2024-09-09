import { useState } from "react";

import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Button } from "react-native";
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
      <ImageBackground style={styles.img} source={require("../../../assets/image22.png")} >
        <Text style={styles.title}>GARDEN</Text>

        <View style={styles.container}>

          <Text style={styles.cad}>Cadastre-se</Text>

          <View style={styles.textForm}>
            <Icon name="user" size={20} color="#000" style={styles.icon} />
            <TextInput style={styles.inpTex} placeholder="Nome Completo" /*value=""*/ onChangeText={setNome} keyboardType="default" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Nome de usuário" value="" onChangeText={setUsuario} keyboardType="defult" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="E-mail" value="" onChangeText={setEmail} keyboardType="email-address" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Trabalho" value="" onChangeText={setTrabalho} keyboardType="default" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Estado Civil" value="" onChangeText={setEstCivil} keyboardType="default" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Senha" value="" onChangeText={setSenha} keyboardType="default" placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Confirmar senha" value="" onChangeText={setConfirmar} keyboardType="default" placeholderTextColor={'#fff'} />
          </View>

          <MyButton title="CRIAR" onPress={() => alert({ nome }, { email })} />

        </View>
      </ImageBackground>
    </View>
  );
};

export default Cadastro;
