
import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react'

import { Button,  Image } from 'react-native-elements';
import { SafeAreaView , View, Text } from 'react-native';
export const HomeScreen = ({navigation}) => {
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false

        })

    }, [])
  return (
    <SafeAreaView>
        <View>
            <StatusBar style = "light" />
            <Text>Home Page</Text>
            <Text> </Text>
          
     
       

        </View>
            
    </SafeAreaView>
    
 
    
  )
}



{/* <TextInput value={values.email} style={inputStyle} onChangeText={(val, _) => { 
    handleChange('email'), updateStore('email', val)}} */}