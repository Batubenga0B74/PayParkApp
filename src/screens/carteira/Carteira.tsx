import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather, Entypo,FontAwesome6} from '@expo/vector-icons';
import * as Seven from './style'
import { StatusBar } from 'expo-status-bar';
// Criação da secção de cartão';
export default function(){
    return(
        <Seven.Container>
            <StatusBar style='light' translucent={false} backgroundColor='#240046' />
            <View style={{width:'100%',height:400}}>
                <Seven.Header>
                    <Seven.CenterTxt>
                        <Entypo name='wallet' size={40} color='#fff'/>
                        <Text style={estilos.txt2}>Preço total</Text>
                        <View style={estilos.boxes}>
                            <Text style={estilos.txt3}>KZ205000.00</Text>
                            <TouchableOpacity style={{ borderRadius:100, width:35,height:35,backgroundColor:'yellow', justifyContent:'center',alignItems:'center',overflow:'hidden'}} activeOpacity={0.7} >
                            <Entypo name='plus' size={35} color='#fff' style={estilos.plus} />
                            </TouchableOpacity>
                            
                        </View>
                    </Seven.CenterTxt>

                    <View style={estilos.roll}>
                        <Text style={estilos.txtCD}>Os teus cartões</Text>
                        <ScrollView horizontal={true} style={{marginTop:12,paddingLeft:20, width:'100%'}} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={estilos.boxP2} activeOpacity={0.7}>
                              <Entypo name='plus' size={50} color='#fff'/>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('./5.png')} style={estilos.imgmg}/>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('./2.png')} style={estilos.imgmg}/>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('./1.png')} style={estilos.imgmg}/>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('./2.png')} style={estilos.imgmg}/>
                            </TouchableOpacity>
                        
                            <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('./1.png')} style={estilos.imgmg}/>
                            </TouchableOpacity>

                        </ScrollView>
                        {/*Fim da criação da secção de cartas */}
                    </View>

                </Seven.Header>
            </View >
            <View style={ estilos.temastrasi}>
            <Text style={estilos.tema}>Transações Recentes</Text>
            </View>
            
            <View style={estilos.caixatras}>
                <View style={estilos.textoback}>
                <Text style={estilos.texton}>Todas</Text>
            </View>

            <View style={estilos.textoback2}>
                <Text style={estilos.ponto1}>o</Text>
                <Text style={estilos.texton2}>Renda</Text>
            </View>

            <View style={estilos.textoback2}>
            <Text style={estilos.ponto2}>o</Text>
                <Text style={estilos.texton2}>despesas</Text>
            </View>
            
            </View>
            <View style={estilos.Diacaixa}>
                <Text style={estilos.Diatexto}> Hoje</Text>
            </View>

            <ScrollView style={estilos.Conteina}>
               
                <Seven.Inforcaixa>
                    <View style={estilos.titulocard}> 
                        <Text style={estilos.texto30}>
                            Aeroporto Internacional
                            4 de Fevereiro
                        </Text>
                        
                        <View style={estilos.thimecar}>
                        <Feather name='clock' color='#000' size={15}/>
                        <Text  style={estilos.hora}>08:00-24:00</Text>
                        </View>
                     </View>

                    <View>
                        <Text style={estilos.ponto}>o</Text>
                        <Text style={estilos.dinheiro}>-KZ200.00</Text>
                        <Text style={estilos.horaR}>14:30</Text>
                    </View>
                </Seven.Inforcaixa>

                <Seven.Inforcaixa>
                    <View style={estilos.titulocard}> 
                        <Text style={estilos.texto30}>
                            Aeroporto Internacional
                            4 de Fevereiro
                        </Text>
                        
                        <View style={estilos.thimecar}>
                        <Feather name='clock' color='#000' size={15}/>
                        <Text  style={estilos.hora}>08:00-24:00</Text>
                        </View>
                     </View>

                    <View>
                        <Text style={estilos.ponto}>o</Text>
                        <Text style={estilos.dinheiro}>-KZ200.00</Text>
                        <Text style={estilos.horaR}>14:30</Text>
                    </View>
                </Seven.Inforcaixa>

                <Seven.Inforcaixa>
                    <View style={estilos.titulocard}> 
                        <Text style={estilos.texto30}>
                            Aeroporto Internacional
                            4 de Fevereiro
                        </Text>
                        
                        <View style={estilos.thimecar}>
                        <Feather name='clock' color='#000' size={15}/>
                        <Text  style={estilos.hora}>08:00-24:00</Text>
                        </View>
                     </View>

                    <View>
                        <Text style={estilos.ponto}>o</Text>
                        <Text style={estilos.dinheiro}>-KZ200.00</Text>
                        <Text style={estilos.horaR}>14:30</Text>
                    </View>
                </Seven.Inforcaixa>

            </ScrollView>

        </Seven.Container>
    )
}
const estilos = StyleSheet.create({
    txt1:{
        fontSize:25, 
        marginLeft:80,
        color:'#fff',
        fontWeight:'500'
    },
    img:{
        marginLeft:30,
        borderWidth:1,
        borderColor:'transparent',
        borderStyle:'solid',
        padding:10,
        borderRadius:5,
        backgroundColor:'#191929',
    },
    txt2:{
        fontSize:20,
        marginTop:10,
        color:'#dedededf',
    },
    txt3:{
        fontSize:25,
        color:'#fff',
    },
    boxes:{
        flexDirection:'row',
        marginTop:15,
        width:'63%',
        justifyContent:'space-between'
    },
    plus:{
        borderRadius:100,
        width:'100%',
        height:'100%',
        backgroundColor:'#00f'
    },
    roll:{
        position:'absolute',
        width:'100%',
        height:200,
        bottom:-120,
    },
    txtCD:{
        fontSize:20,
        color:'#fff',
        marginLeft:30
    },
    boxP2:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
        height:'auto',
        borderRadius:8,
        backgroundColor:'#FFC300'
    },
    imgmg:{
        width: 250,
        height: 400,
        resizeMode:'contain',
        marginTop:-120,
        marginRight:20
    },
    textoback:{
      backgroundColor:'#FFC300',
      width:100,
      height:40,
      borderRadius:30,
      left:30,
      top:35,
      margin:4,

    },

    textoback2:{
        width:100,
        height:40,
        borderRadius:30,
        left:30,
        top:35,
        margin:4,
        flexDirection:'row'
  
      },

    texton:{
        color:'#fff',
        fontWeight:'600',
        fontSize:12,
        textAlign:'center',
        top:12,
        justifyContent:'center'
    },
    texton2:{
        color:'#000',
        fontWeight:'600',
        fontSize:12,
        textAlign:'center',
        top:12,
        justifyContent:'center'
    },
    temastrasi:{
        width:1000,
        height:21,
        top:20,
        left:31,
    },
     
    tema:{
        fontSize:15,
        fontWeight:'700',
    },

    caixatras:{
        width:100,
        flexDirection:"row",
        height:100,
    }, 

    Diacaixa:{
        width:100,
        height:21,
        top:-4,
        left:30,
    },
    Diatexto:{
        fontSize:16,
        color:'#6c757d',
        top:-3,
        fontWeight:'700',
    },
    thimecar:{
        width:125,
        height:33,
        left:40,
        top:17,
        flexDirection:'row',
    },
    titulocard:{
        width:168,
        height:24,
        left:30,
        top:20,
    },
    texto30:{
        fontSize:11,
        fontWeight:'700',
        textAlign:'center',
        lineHeight:13,
        letterSpacing:-0.32,
    },
    hora:{
        color:'gray',
        fontSize:12,
        left:6,
    },
    dinheiro:{
        right:20,
        top:11,
        fontSize:18,

    },
    horaR:{
        top:15,
    },
    ponto:{
        color:'#f00',
        backgroundColor:'#f00',
        borderRadius:20,
        top:5,
        left:50,
        width:9,
        height:9,
    },
    ponto1:{
        color:'#3cff00',
        backgroundColor:'#40ff00',
        borderRadius:20,
        top:18,
        left:50,
        width:8,
        height:8,
    },
    ponto2:{
        color:'#f00',
        backgroundColor:'#f00',
        borderRadius:20,
        borderBottomEndRadius:50,
        top:18,
        left:70,
        width:8,
        height:8,
    },
    Conteina:{
        width:'100%',
        right:10,
    }



})