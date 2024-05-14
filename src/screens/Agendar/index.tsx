import React, { useState } from 'react';
import { View , Text,StyleSheet } from 'react-native';
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
  return (
     <View style = { styles.containe}>
            <StatusBar style='light' translucent={false} backgroundColor='#000' />
        <Seven.Date>
            <AntDesign name='left' size={20}/>
           <Text style = {{fontWeight:'bold' , right:50}}>Data e Hora </Text>
        </Seven.Date>
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
  });