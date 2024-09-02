import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const MyButton = () =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado!')}>
                <Text style={styles.buttonText}>CRIAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#074A05',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
    }
});

export default MyButton;