import { useRef,useCallback,useMemo } from "react";

import React from "react";
import * as CT from "./style"
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import { AntDesign,FontAwesome,Fontisto ,FontAwesome5 ,Entypo} from "@expo/vector-icons"
import Estacionamento from "../../components/Estacionamento";


export default function(){
    const bottomSheetref = useRef(null);
    const Snappoint = useMemo(()=>["30%","80%"],[])
    return(

        <CT.Container>
                <StatusBar style='light' translucent={false} backgroundColor='#240046' />
            
            <CT.Head>
                <View style={[styles.box,{paddingHorizontal:20}]}>

                    <View style={styles.texts}>
                        <Text style={[styles.Stexto,{fontSize:14}]}> Escolha Parques e</Text>
                        <Text style={[styles.Stexto,{fontSize:16,fontWeight:'700'}]}>Viaturas </Text>
                    </View>

                    <AntDesign name="setting" size={24} color="#fff"/>
                </View>


                <View style={styles.box}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.toque}>
                        <FontAwesome5 name="car" size={28} color="#240046" style={styles.icon}/>
                        <Text style={styles.Stexto}>carro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.toque}>
                        <FontAwesome name="bus" size={28} color="#240046" style={styles.icon}/>
                        <Text style={styles.Stexto}>Autocarro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.toque}>
                        <Fontisto name="motorcycle" size={28} color="#240046" style={styles.icon}/>
                        <Text style={styles.Stexto}>Mota</Text>
                    </TouchableOpacity>
                </View>


            </CT.Head> 

            <CT.BotoonShet>
            <View style={[styles.box,{paddingHorizontal:20}]}>

                <View style={[styles.texts,{ width:'100%', height:50 ,top:10}]}>
                    <Text style={[styles.Stexto,{fontSize:14,color:"#000"}]}>A sua localização</Text>
                    <Text style={[styles.Stexto,{fontSize:16,fontWeight:'700', color:'#000' }]}>Rangel CTT</Text>
                </View>

                <Entypo name="location" size={24} color="#000" style={{
                    top:20,
                    right:30,
                }}/>
            </View>
            <CT.Casamae>
                <Estacionamento Tema='Candando' />
                <Estacionamento Tema='Digital.AO'/>
                <Estacionamento Tema='Coca-cola'/>
                <Estacionamento Tema='Ngola Mbande'/>
                <Estacionamento Tema='TPA'/>
                <Estacionamento Tema='Brigada'/>
                <Estacionamento Tema='Ango-Mart'/>
            </CT.Casamae>
            </CT.BotoonShet>


    
    
        </CT.Container>
    )
}

const styles = StyleSheet.create({
    box:{
        width:"100%",
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:40
    },
    texts:{
        flexDirection:"column"
    },
    icon:{
        backgroundColor:"#fff",
        width:46,
        height:46,
        borderRadius:100,
        textAlign:"center",
        textAlignVertical:'center'
        // borderRadius:100,
    },
    toque:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:10
    },
    Stexto:{
        fontWeight:'400',
        fontSize:12,
        color:"#fff"
    }
})