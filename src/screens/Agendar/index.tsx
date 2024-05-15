import React, { useState } from 'react';
import { View , Text,StyleSheet, TextInput,Button } from 'react-native';
import { Switch } from 'react-native-switch';
import * as Seven from './style'
import { AntDesign} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// import { Container } from './styles';

export function Agendar(){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selected, setSelected] = useState('');

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    const handleSetTime = () => {
      // Aqui você pode usar a hora e o minuto inseridos pelo usuário
      console.log('Hora:', hour);
      console.log('Minuto:', minute);
    };
    

  return (
     <View style = { styles.containe}>
            <StatusBar style='light' translucent={false} backgroundColor='#000' />
        <Seven.Daten>
            <AntDesign name='left' size={20}/>
           <Text style = {{fontWeight:'bold' , right:50}}>Data e Hora </Text>
        </Seven.Daten>
      <Seven.Header>
          <Seven.Textos>
              <Text style = { styles.text}>Receber notificação antecipadamente</Text>
          <Text style = {styles.textos}>
            Notificar o horario que deve estar no estacionamento
            antes de perder a sua vaga e ter de fazer tudo novamente
            </Text>
          </Seven.Textos>

              <Switch
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              circleSize={28}
              switchLeftPx={8}
              switchRightPx={8}
              barStyle={{ width: 100, height: 100 }}
              thumbStyle={{ width: 80, height: 80}} 
              accessibilityLabel=""


            />
      </Seven.Header>

       <Seven.Calende>
         <Calendar
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
           textDisabledColor: '#d9e'
          
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, }
        }}
         />
       </Seven.Calende>

       <Seven.timer>
         
         <TextInput
        placeholder="Hora"
        keyboardType="numeric"
        maxLength={2}
        onChangeText={(text) => setHour(text)}
        value={hour}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10,borderRadius:10 }}
      />
      <TextInput
        placeholder="Minuto"
        keyboardType="numeric"
        maxLength={2}
        onChangeText={(text) => setMinute(text)}
        value={minute}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10,borderRadius:10 }}
      />
     

         
       </Seven.timer>
     </View>
  )
  
}


const styles = StyleSheet.create({
    containe: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    textos:{
      fontSize:8,
      fontWeight:'bold',
      color:'#DADADA'
    },

    text:{
      fontSize:13,
      fontWeight:'bold',
      
    },
    input:{
       borderRadius:10,
    }
  });