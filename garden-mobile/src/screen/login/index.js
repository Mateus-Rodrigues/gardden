import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Pressable } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';
import Cadastro from "../cadastro";


const Login = () => {
  const navigation = useNavigation();  // Hook para acessar navegação

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

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
      <ImageBackground style={styles.img} source={require("../../../assets/image21.png")} >
        <Text style={styles.title}>GARDEN</Text>

        <View style={styles.container}>

          <Text style={styles.cad}>Login</Text>

          <View style={styles.textForm}>
            <TextInput style={styles.inpTex} placeholder="Nome de usuário"/* value="Nome de usuário"*/ onChangeText={setUsuario} placeholderTextColor={'#fff'} />

            {/* <Icon name="eye" size={20} color="#fff" style={styles.icon} /> */}
            <TextInput style={styles.inpTex} placeholder="Senha" /*value="Senha"*/ onChangeText={setSenha} placeholderTextColor={'#fff'} secureTextEntry={true} />
          </View>
          <MyButton title="ENTRAR" onPress={handleLogin} />

          <View>
            <Pressable onPress={() => navigation.navigate('Cadastro')} style={styles.botao}>
              <Text style={styles.links}>Cadastre-se</Text>
            </Pressable>
            <Text style={styles.links}>Esqueceu a senha?</Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
