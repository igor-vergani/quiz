import React from "react";
import { Image, Button, View } from "react-native";
import styles from './homeStyle'; // Importando o arquivo de estilos

// Definindo o componente Home
export default function Home({ navigation }) {
    return (
        // Usando o estilo do container
        <View style={styles.container}>
            {/* Renderizando a imagem da logo com estilo */}
            <Image source={require('../assets/logoQuiz.png')} style={styles.logo} />

            {/* Criando um botão para navegar para a tela de adicionar pergunta */}
            <View style={styles.buttonContainer}>
                <Button title="Adicionar Pergunta" onPress={() => navigation.navigate('Add')} />
            </View>

            {/* Criando um botão para navegar para a tela de iniciar o quiz */}
            <View style={styles.buttonContainer}>
                <Button title="Iniciar Quiz" onPress={() => navigation.navigate('Quiz')} color={'green'} />
            </View>

            {/* Criando um botão para navegar para a tela de editar perguntas */}
            <View style={styles.buttonContainer}>
                <Button title="Editar Perguntas" onPress={() => navigation.navigate('Edit')} color={'gold'} />
            </View>
        </View>
    );
}