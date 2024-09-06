import { useState } from "react";

import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = () => {

  
  const [usuario, setUsuario] = useState(' ');
  const [senha, setSenha] = useState(' ');
  
  const handleLogin = () => {
    // Lógica de login aqui
    
    console.log('Usuario:', usuario);
    console.log('Senha:', senha);
  
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
            <TextInput style={styles.inpTex} placeholder="Nome de usuário"/* value="Nome de usuário"*/ onChangeText={setUsuario} keyboardType="defult"  placeholderTextColor={'#fff'} />
            <TextInput style={styles.inpTex} placeholder="Senha" /*value="Senha"*/ onChangeText={setSenha} keyboardType="default" placeholderTextColor={'#fff'} />
          </View>
          <MyButton title="ENTRAR" onPress={() => alert({nome}, {email} )} />

          <View>
            <Text style={styles.links}>Esqueceu a senha</Text>
            <Text style={styles.links}>Cadastre-se</Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
