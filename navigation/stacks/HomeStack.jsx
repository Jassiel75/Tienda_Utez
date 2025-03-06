import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../../src/modules/home/screens/Home";
import DetailProduct from '../../src/modules/home/screens/DetailsProduct';

const Stack = createStackNavigator(); 
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} options={{title:"Inicio"}}/>
      <Stack.Screen name="DetailProductStack" component={DetailProduct} options={{title:"Detalles"}}/>
    </Stack.Navigator>
  )
}