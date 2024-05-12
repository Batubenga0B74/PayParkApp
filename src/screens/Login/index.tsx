import React from 'react';
import { View } from 'react-native';
import { Input } from '../../components/Input/Input';

export default function(){
    return(
        <View style={{flex:1,backgroundColor:'red'}}>
            <Input>
                <Input.Field/>
            </Input>
        </View>
    )
}