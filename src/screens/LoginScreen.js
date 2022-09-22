
import React, { useLayoutEffect } from 'react'
import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';


import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../fetature/userSlice';

const loginValidationSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(10, 'Password should not excced 10 chars.').required(),
  
      })



const selectedEmail = (state) => state.user.email
const selectedPassword = (state) => state.user.password

export const LoginScreen = ({navigation}) => {
    const {user} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const email = useSelector(selectedEmail)
    const password = useSelector(selectedPassword)
    
    const onSubmit = values => {
        console.log('form data', values);
        navigation.navigate("home" , {})
        dispatch(setUser(user));
        // dispatch(loginUser({ id : 0,  email: "", password: ""}))
    }



    const inputStyle = {
        borderWidth: 1,
        borderColor: '#4e4e4e',
        padding: 12,
        marginBottom: 5,
      };
 
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false

        })

    }, [])

  return (
    <Formik
    initialValues={{
      email: email,
      password: password,
    }}
    
    onSubmit={onSubmit}
    validationSchema={loginValidationSchema}>
      {({values,  handleChange, errors, setFieldTouched, touched, isValid, handleSubmit,

        }) => (
        <View style={styles.container}>
       
            <TextInput  style={inputStyle} 
            onChangeText={handleChange( 'email')}
           
            // onChangeText={(val, event) => {
            //     console.log( val);
            //     handleChange( event);
            //     updateStore('email', val );    
            // }} 
            
            value= {values.email}
                onBlur={() => setFieldTouched('email')} placeholder="E-mail"
            />
                {touched.email && errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                    {errors.email}
                </Text>
            )}

            <TextInput  style={inputStyle}
             onChangeText={handleChange( 'password')}

             value = {values.password}
                // handleChange('password')}}
                    placeholder="Password" onBlur={() => setFieldTouched('password')} secureTextEntry={true}
            />
             {touched.password && errors.password && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>
            {errors.password}
             </Text>
            )}

            <Button color="#3740FE" title="Submit" disabled={!isValid} onPress={handleSubmit }
            />
            {/* <Button
                color="#3740FE"
                title="Login"
                disabled={!isValid}
                onPress={() => navigation.navigate('home') }
            /> */}
        </View>
        )}

        
        
    </Formik>
   
    
 
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    
        
        

    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10,

     },
   

})