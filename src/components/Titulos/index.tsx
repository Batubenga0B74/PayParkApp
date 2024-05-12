import React from 'react';
import { View ,Text} from 'react-native';
import { StyleSheet } from 'react-native';
import * as Seven from './style'
import styled from 'styled-components';

// import { Container } from './styles';

export default function(props:{Tema : String}){
  return (
          <Seven.Conteiner>
              <Seven.Cardfortitle>
                <Text style={estilos.Txt}> {props.Tema}</Text>
                <Seven.Subtitulocard>
                <Text style={estilos.SubTitulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis sem.</Text>
                </Seven.Subtitulocard>
              </Seven.Cardfortitle>

              

          </Seven.Conteiner>
  );
}

const estilos = StyleSheet.create({
    Txt:{
      fontWeight:'600',
      fontSize:36,
      alignItems:'center',
      color:'#240046'
    },
    SubTitulo:{
      fontWeight:'400',
      fontSize:11,
      color:'#939394'

    }
})
