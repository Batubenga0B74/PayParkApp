// Início da configuração do NavigationContainer
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import{Profile} from '../screens/Entrar/profile'
const {Navigator , Screen} = createBottomTabNavigator();
import{ Feather,MaterialIcons,SimpleLineIcons} from '@expo/vector-icons';
import { Mapear } from "../screens/mapas/Mapear";
import Carteira from "../screens/carteira/Carteira";
import Favorito from "../screens/favorito/Favorito";
import Home from "../screens/parques/Home";

export function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{
                tabBarActiveTintColor:'#993399',
                headerShown:false,
                tabBarHideOnKeyboard:true,
               
            }}
            
            >
                <Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        tabBarIcon:({size,color})=> <Feather name="home" size={size} color={color}/>
                    }}
                />
                    <Screen
                     name="Map"
                    component={Mapear}
                    options={{
                            tabBarIcon:({size,color})=><Feather name="map" size={size} color={color}/>
                        }}
                    />   
                    <Screen
                        name="Favorito"
                        component={Favorito}
                        options={{
                            tabBarIcon:({size,color})=><MaterialIcons name="favorite-border" color={color} size={size}/>
                        }}
                    />
                    <Screen
                     name="pay"
                     component={Carteira}
                     options={{
                        tabBarIcon:({size,color})=><SimpleLineIcons name="wallet" size={size } color={color}/>
                     }}
                    />
                <Screen
                    name="Perfil"
                    component={Profile}
                    options={{
                        tabBarIcon:({size,color})=><Feather name="user" size={size} color={color}/>
                    }}
                    
                />

            </Navigator>
        </NavigationContainer>
    )
}
