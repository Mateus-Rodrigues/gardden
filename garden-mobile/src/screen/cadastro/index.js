import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Button, Image, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';
import api from "../../services/api";
// import axios from 'axios';
// import { text } from "@fortawesome/fontawesome-svg-core";





export default function Cadastro() {
  const navigation = useNavigation();  // Hook para acessar navegação
  function validateSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!regex.test(senha)) {
      return false;
    }
    return true;
  };

  function ValidateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      return false;
    }
    return true
  };


  const Validacao = () => {

    if (senha !== confirmar) {
      Alert.alert('As senhas não coincidem!');
      return;
    }

    if (validateSenha(senha)) {
      Alert.alert('Senha válida!');
      handleLogin();  // Aqui você poderia chamar a função de login ou cadastro
    } else {
      Alert.alert(
        'A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
      );

      if (ValidateEmail(email)) {
        Alert.alert('Email válido!');
        handleLogin();
      } else {
        Alert.alert(
          'O E-mail que voce digitou não atende aos requisitos de segurança do email'
        );
      }

    }
  }


  const handleRegister = async () => {
    try {
      const response = await api.post('/usuarios', {
        usu_nome,
        usu_nick,
        usu_email,
        usu_senha,
        usu_adm
      });
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
    }
  };

  const [usu_nome, setNome] = useState('');
  const [usu_nick, setUsuario] = useState('');
  const [usu_email, setEmail] = useState('');
  // const [trabalho, setTrabalho] = useState('');
  // const [estCivil, setEstCivil] = useState('');
  const [usu_senha, setSenha] = useState('');
  const [usu_adm, setAdm] = useState('');
  // const [confirmar, setConfirmar] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Nome:', usu_nome);
    console.log('Usuario:', usu_nick);
    console.log('Email:', usu_email);
    // console.log('Profissão:', trabalho);
    // console.log('estado civil:', estCivil);
    console.log('Senha:', usu_senha);
    console.log('Adm:', usu_adm);
    // console.log('Confirmar Senha:', confirmar);
    console.log("*******************");

  };

  const [isSenhaVisible, setIsSenhaVisible] = useState(false);

  // function cadastrarUsu(){

  /*}*/

  return (
    <View>
      <StatusBar
        barStyle="light-content" // Define o estilo da barra (pode ser "light-content", "dark-content" ou "default")
        backgroundColor="#000" // Define a cor de fundo da barra de status (Android)
        translucent={false} // Controla se a barra de status é translúcida (Android)
      />
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")} >
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.title}>GARDEN</Text>

            <View style={styles.container}>

              <Text style={styles.cad}>Cadastre-se</Text>

              <View style={styles.textForm}>

                <TextInput placeholder="Nome Completo " style={styles.inpTex} onChangeText={setNome} keyboardType="default" placeholderTextColor={'#fff'} />
                <TextInput placeholder="Nome de usuário" style={styles.inpTex} onChangeText={setUsuario} placeholderTextColor={'#fff'} />
                <TextInput placeholder="E-mail" style={styles.inpTex} onChangeText={setEmail} placeholderTextColor={'#fff'} />
                
                

                <View style={styles.olhoInput}>
                  <TextInput 
                  placeholder="Senha" 
                  style={styles.inpTex} 
                  onChangeText={text => setSenha(text)} 
                  placeholderTextColor={'#fff'} 
                  secureTextEntry={!isSenhaVisible}/>
                  
                  <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
                  <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
                  </TouchableOpacity>
                  
                

                </View>
                <TextInput placeholder="Adm" style={styles.inpTex} onChangeText={setAdm} placeholderTextColor={'#fff'} />


               
               
               
               
               
               
               
               
               
               
                

              </View>

              <MyButton title="CRIAR" onClick={handleRegister} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};


