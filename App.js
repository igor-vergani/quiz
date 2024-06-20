//Importando módulos necessarios
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importando os componentes das diferentes telas
import Home from './components/Home';
import Add from './components/Add';
import Quiz from './components/Quiz';
import Edit from './components/Edit';

//criando o objeto Stack para a navegação entre telas
const Stack = createStackNavigator();

//definindo o componente principal da aplicação
export default function App(){
  return(
    //iniciando o container de navegação
    <NavigationContainer>
      {/*Iniciandoo Stack Navigator com a tela inicial sendo "Home"*/}

      <Stack.Navigator initialRouteName="Home">
        {/*Definindo as diferentes telas que podem ser navegadas*/}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Add" component={Add}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="Edit" component={Edit}/>
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}

