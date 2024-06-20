import React, { useState } from "react";
import { Image, Button, TextInput, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import styles from './homeStyle'; // Importando o arquivo de estilos

// Abrindo o banco de dados SQLite
const db = SQLite.openDatabase('quiz.db');

// Definindo o componente principal da aplicação
export default function Add() {
    // Definindo o estado atual para cada campo do formulário
    const [pergunta, setPergunta] = useState('');
    const [alternativaA, setAlternativaA] = useState('');
    const [alternativaB, setAlternativaB] = useState('');
    const [alternativaC, setAlternativaC] = useState('');
    const [alternativaD, setAlternativaD] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');

    // Criando a tabela 'perguntas' se ela não existir no banco de dados
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS perguntas 
            (id INTEGER PRIMARY KEY AUTOINCREMENT, 
            pergunta TEXT, 
            alternativaA TEXT, 
            alternativaB TEXT, 
            alternativaC TEXT, 
            alternativaD TEXT, 
            resposta_correta TEXT);`
        );
    });

    // Função para adicionar uma pergunta ao banco de dados
    const adicionarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO perguntas (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, resposta_correta) VALUES (?, ?, ?, ?, ?, ?);`,
                [pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta],
                (_, { insertId }) => {
                    // Resetando o estado para cada campo do formulário
                    setPergunta('');
                    setAlternativaA('');
                    setAlternativaB('');
                    setAlternativaC('');
                    setAlternativaD('');
                    setRespostaCorreta('');
                    // Exibindo um alerta de sucesso
                    Alert.alert('Sucesso', 'Pergunta adicionada com sucesso');
                });
        });
    };

    // Renderizando o componente
    return (
        <View style={{ alignItems: 'center' }}>
            {/* Renderizando o logo */}
            <Image source={require('../assets/logoQuiz.png')} style={{ width: '90%', height: 150, marginBottom: 45 }} />
            {/* Renderizando os campos de texto com a borda e espaçamentos especificados */}
            <TextInput
                placeholder="Digite a pergunta"
                value={pergunta}
                multiline={true}
                onChangeText={setPergunta}
                numberOfLines={4}
                style={{ height: 80, borderColor: 'blue', borderWidth: 1, marginBottom: 15, width: '90%', padding: 10 }}
            />
            <TextInput
                placeholder="Digite a alternativa A"
                value={alternativaA}
                onChangeText={setAlternativaA}
                style={{ borderColor: 'blue', borderWidth: 1, marginBottom: 5, width: '90%', height: 50, padding: 10 }}
            />
            <TextInput
                placeholder="Digite a alternativa B"
                value={alternativaB}
                onChangeText={setAlternativaB}
                style={{ borderColor: 'blue', borderWidth: 1, marginBottom: 5, width: '90%', height: 50, padding: 10 }}
            />
            <TextInput
                placeholder="Digite a alternativa C"
                value={alternativaC}
                onChangeText={setAlternativaC}
                style={{ borderColor: 'blue', borderWidth: 1, marginBottom: 5, width: '90%', height: 50, padding: 10 }}
            />
            <TextInput
                placeholder="Digite a alternativa D"
                value={alternativaD}
                onChangeText={setAlternativaD}
                style={{ borderColor: 'blue', borderWidth: 1, marginBottom: 5, width: '90%', height: 50, padding: 10 }}
            />
            <TextInput
                placeholder="Digite a letra da resposta correta"
                value={respostaCorreta}
                onChangeText={setRespostaCorreta}
                style={{ borderColor: 'blue', borderWidth: 1, marginBottom: 15, width: '90%', height: 50, padding: 10 }}
            />

            {/* Renderizando o botão para adicionar uma pergunta */}
            <Button title="Adicionar pergunta" onPress={adicionarPergunta} />
        </View>
    );
}
