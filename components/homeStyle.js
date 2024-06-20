// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: '90%',
        height: 300,
        marginBottom: 45,
    },
    buttonContainer: {
        marginBottom: 15,
        width: '80%',
        borderWidth: 1, // Adicionando borda
        borderColor: '#000', // Cor da borda
        borderRadius: 5, // Bordas arredondadas
        overflow: 'hidden', // Garantir que o conteúdo não exceda as bordas
    },
    button: {
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    }
});

export default styles;
