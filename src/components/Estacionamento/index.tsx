import React from 'react';
import { View ,Text,StyleSheet, TouchableOpacity,Image} from 'react-native';
import * as Seven from './style'
import { AntDesign,FontAwesome,Fontisto ,FontAwesome5 ,Entypo} from "@expo/vector-icons"
const img = require('./1.png')
export default function Estacionamento(props:{Tema : String}){
    return(
        <Seven.Conteiner>
            <Seven.Imagecard>
                    <Image source={img} style={{
                    width:75,
                    height:70
                }}/> 
            </Seven.Imagecard>
            <Seven.AllCardtext>
                    <Text style={styles.Texto}>Estacionamento {props.Tema}</Text>
                    <Seven.Instrucao>
                    <AntDesign name='notification' size={10} style={{left:3}}/><Text style={{fontSize:10}}>8 lugares disponiveis</Text>

                    <FontAwesome name='road' size={10} style={{left:3}}/><Text style={{fontSize:10}}>500M</Text>

                    <Entypo name='time-slot' size={10}style={{left:3}}/><Text style={{fontSize:10}}>750HR</Text>

                    <AntDesign name='hearto' size={15} style={{left:33}}/>

                    </Seven.Instrucao>
                    <TouchableOpacity style={{width:55, borderRadius:25,height:20, backgroundColor:'#240044', alignItems:'center',}}>
                         <Text style={{fontSize:8, fontWeight:'500',lineHeight:21,color:'#fff'}}>Parquear</Text>
                    </TouchableOpacity>
            </Seven.AllCardtext> 
        </Seven.Conteiner>
    )
}
const styles = StyleSheet.create({
        Texto:{
            fontSize:13,
            fontWeight:'600',
            lineHeight:21,
        },
        btn:{
            backgroundColor:'pink',
            height:20,
            width:'80%'
        }

})
