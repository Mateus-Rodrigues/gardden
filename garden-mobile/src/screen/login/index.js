import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar, Pressable } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";
import Icon from 'react-native-vector-icons/FontAwesome';
import api from "../../services/api";
import Cadastro from "../cadastro";


const Login = () => {
  const navigation = useNavigation();  // Hook para acessar navegação

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin  ()  {
    // Lógica de login aqui
    try{
      const response = await api.post("/usuarios/login", {
        email,
        senha
      });

      console.log(response.data);
    } catch (error) {
      console.log(error)

    }

  };

  const [isSenhaVisible, setIsSenhaVisible] = useState(false);

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


            <View style={styles.olhoInput}>

              <TextInput
                placeholder="Senha"
                style={styles.inpTex}
                onChangeText={text => setSenha(text)}
                placeholderTextColor={'#fff'}
                secureTextEntry={!isSenhaVisible} />

              <TouchableOpacity onPress={() => setIsSenhaVisible(!isSenhaVisible)}>
                <Icon name={isSenhaVisible ? 'eye' : 'eye-slash'} size={20} color="#000" style={styles.iconInput} />
              </TouchableOpacity>
            </View>


          </View>
          <MyButton title="ENTRAR" onClick={handleLogin} />

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
