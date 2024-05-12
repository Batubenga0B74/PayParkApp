import { View ,Text,TextInput,StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Titulos from '../../components/Titulos';
import * as S from './style'
export function Profile(){
    return(
        <S.Conteiner>
            <Titulos Tema = "Entrar"/>
            <S.Formulario>
                <Text style={Estilos.Labell}>E-mail</Text>
                <TextInput
                    style={Estilos.Inpunt}
                    keyboardType="email-address"
                    placeholder="exemplo@gmail.com"
                />
                <Text style={Estilos.Labell2}>Senha</Text>
                 <TextInput
                    style={Estilos.Inpunt2}
                    secureTextEntry = {true}
                    textContentType="password"
                    placeholder="senha"
                />
                <TouchableOpacity style={Estilos.SenhaSend} >
                    <Text>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Estilos.btn}>
                    <Text style={{
                        fontSize:15,
                        lineHeight:21,
                        color:'#fff',
                        textAlign:'center',
                        top:15,
                    }}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    top:140,
                    left:40,
                    
                }}>
                    <Text 
                    style={{
                       color:'gray' 
                    }}
                    >Não possui uma conta? <Text 
                    style={{
                        color:'#240046'
                    }}
                     >se cadastrar</Text></Text>
                </TouchableOpacity>
            </S.Formulario>
        </S.Conteiner>
    )
}
const Estilos = StyleSheet.create({
    Inpunt:{
        borderWidth:2,
        borderColor:'grey',
        width:289,
        height:57,
        borderRadius:10,
        left:15,
        top:10,
        paddingHorizontal:15,
    },
    Labell:{
        left:19,
        fontSize:13,
        fontWeight:'700',
        color:'#240046',
        lineHeight:21,
        top:5,
    },

    Inpunt2:{
        borderWidth:2,
        borderColor:'grey',
        width:289,
        height:57,
        borderRadius:10,
        left:15,
        top:30,
        paddingHorizontal:15,
    },
    Labell2:{
        left:19,
        fontSize:13,
        fontWeight:'700',
        color:'#240046',
        lineHeight:21,
        top:25,
    },
    SenhaSend:{
        top:44,
        left:180,

    },
    btn:{
        width:289,
        height:57,
        top:85,
        left:13,
        borderRadius:10,
        backgroundColor:'#240046'
    }
})