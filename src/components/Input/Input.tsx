import { ReactNode } from "react"
import { TextInput, View } from "react-native"
function Input({children}:{children: ReactNode}){
    return(
        <View style={{width:'90%',
        alignItems:'flex-end',
          height:14,
          flexDirection:'row', 
          gap:3, padding:3,
          borderColor:'green'}}>
            {children}
        </View>
    )
}

function Filed(){
    return(
        <TextInput style={{flex:1,color:'white', backgroundColor:'yellow'}}/>
    )
}
Input.Field = Filed

export {Input}