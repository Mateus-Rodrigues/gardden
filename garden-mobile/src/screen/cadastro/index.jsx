
import { TextInput, Text, View, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import styles from "./styles";
import MyButton from "../../components/button";

const Cadastro = () => {
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
            <TextInput style={styles.inpTex} placeholder="Nome Completo" />
            <TextInput style={styles.inpTex}  placeholder="Nome de usuário" />
            <TextInput style={styles.inpTex}  placeholder="Trabalho" />
            <TextInput style={styles.inpTex}  placeholder="Estado Civil" />
            <TextInput style={styles.inpTex}  placeholder="Senha" />
            <TextInput style={styles.inpTex}  placeholder="Confirmar senha" />
          </View>
          <MyButton title="CRIAR" onPress={() => alert('Cadastro criado com sucesso !' )} />
        
        </View>
      </ImageBackground>
    </View> 
  );
};

export default Cadastro;
