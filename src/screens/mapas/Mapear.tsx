import { View ,Text,StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
import { requestForegroundPermissionsAsync,getCurrentPositionAsync,LocationObject,watchPositionAsync, LocationAccuracy} from 'expo-location'
import { useEffect, useState,useRef } from "react";
import MapView ,{Marker}from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import{ FontAwesome5} from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export function Mapear(){
  const [Location, setLocation] = useState<LocationObject | null>(null);
const  mapRef = useRef<MapView>(null);

const Iconepth = require('./image/carro.png');
    async function requesLocationPermission() {
        const {granted} = await requestForegroundPermissionsAsync();
        if(granted){
            const currenPosition = await getCurrentPositionAsync();
            setLocation(currenPosition);
        }
    }
    useEffect(()=>{
        requesLocationPermission();
    },[]); 

    useEffect(()=>{
        watchPositionAsync({
            accuracy:LocationAccuracy.Highest,
            timeInterval:1000,
            distanceInterval:1
        },(response)=>{
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch:70,
                center:response.coords
            })
        });
    },[]); 
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
            <SafeAreaView style={{width:'100%', zIndex:1, backgroundColor:'transparent'}} >
                <GooglePlacesAutocomplete
                    placeholder="Onde vamos "
                    onPress={(data,details = null) =>{
                        console.log(data,details)
                    }}
                
                query={{
                    key: 'AIzaSyAlUb0n6PLMh604Hck0VR67hkKLEtwUK-E',
                    language:'pt-BR'
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                styles={{listView:{height:100}}}
                
                />

            </SafeAreaView>
            {
                Location &&
                <MapView 
                ref={mapRef}
                style={estilos.map}
               initialRegion={{
                 latitude: Location.coords.latitude,
                 longitude: Location.coords.longitude,
                 longitudeDelta:0.005,
                 latitudeDelta:0.005
               }}
               
               >
                <Marker
                    coordinate={{
                        latitude: Location.coords.latitude,
                         longitude: Location.coords.longitude,
                    }}
                />
                </MapView>
            }
            
        </View>
    )
}

const estilos = StyleSheet.create({
    map:{
        flex:1,
        width:'100%',
    }
})