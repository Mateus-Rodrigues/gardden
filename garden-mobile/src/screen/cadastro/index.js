import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Button, Image, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { text } from "@fortawesome/fontawesome-svg-core";


export default function Cadastro() {
  const navigation = useNavigation();  // Hook para acessar navegação
  function validateSenha (senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!regex.test(senha)) {
      return false;
    }
    return true;
  };

  function ValidateEmail (email) {
    const regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if(!regex.test(email)) {
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

  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [trabalho, setTrabalho] = useState('');
  const [estCivil, setEstCivil] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Nome:', nome);
    console.log('Usuario:', usuario);
    console.log('Email:', email);
    console.log('Profissão:', trabalho);
    console.log('estado civil:', estCivil);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmar);
    console.log("*******************");

  };

  return (
    <View>
      <StatusBar
        barStyle="light-content" // Define o estilo da barra (pode ser "light-content", "dark-content" ou "default")
        backgroundColor="#000" // Define a cor de fundo da barra de status (Android)
        translucent={false} // Controla se a barra de status é translúcida (Android)
      />
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")} >
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text style={styles.title}>GARDEN</Text>

            <View style={styles.container}>

              <Text style={styles.cad}>Cadastre-se</Text>

              <View style={styles.textForm}>

                <TextInput placeholder="Nome Completo " style={styles.inpTex} onChangeText={setNome} keyboardType="default" placeholderTextColor={'#fff'} />
                <TextInput placeholder="Nome de usuário" style={styles.inpTex} onChangeText={setUsuario} placeholderTextColor={'#fff'} />
                <TextInput placeholder="E-mail" style={styles.inpTex} onChangeText={setEmail} placeholderTextColor={'#fff'} />
                <TextInput placeholder="Profissão" style={styles.inpTex} onChangeText={setTrabalho} placeholderTextColor={'#fff'} />
                <TextInput placeholder="Estado Civil" style={styles.inpTex} onChangeText={setEstCivil} placeholderTextColor={'#fff'} />


                <View style={styles.olhoInput}>
                  <TextInput placeholder="Senha" style={styles.inpTex} onChangeText={text => setSenha(text)} placeholderTextColor={'#fff'} />
                  <Icon name="eye" size={20} color="#000" style={styles.iconInput} />
                </View>


                <View style={styles.olhoInput}>
                  <TextInput placeholder="Confirmar senha" style={styles.inpTex} onChangeText={text => setConfirmar(text)} placeholderTextColor={'#fff'} />
                  <Icon name="eye" size={20} color="#000" style={styles.iconInput} />
                </View>

              </View>

              <MyButton title="CRIAR" onClick={Validacao} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};


