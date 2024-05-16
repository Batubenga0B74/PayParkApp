import React from 'react';
import { View, Text } from 'react-native';
import * as All from './style'



export function Botao(props:{Tema : String}){
  return (
    <All.ButtoN>
        <Text style = {{textAlign:'center', top:12, color:'#fff', fontWeight:'bold'}}> {props.Tema}</Text>
    </All.ButtoN>
  )
}

