import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View} from 'react-native'
import { Button, HStack, Link, Text } from 'native-base'
import {NavigationContainer} from '@react-navigation/native'



const styles = StyleSheet.create({
    mainContainer: {
      height: '100%',
      paddingHorizontal: 30,
      paddingTop: 30,
      backgroundColor: '#fff',
    },
    mainHeader: {
      fontfamily: 'ProximaNova-Bold',
      fontSize: 24,
      lineHeight: 30,
      fontWeight: '700',
      color: '#080808',
    },
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontSize: 18,
      color:'#8D8D8D',
      marginTop: 5,
      paddingBottom: 15,
      lineHeight: 25,
      fontFamily: 'ProximaNova-Regular'
    },
    inputStyle: {
      borderWidth: 2,
      borderColor: '#FDDBDDB3',
      paddingHorizontal: 15,
      borderRadius: 16,
      fontFamily: 'ProximaNova-Bold',
      fontSize: 18,
    },
    button: {
    borderRadius: 16,
    height: 60,
    marginTop: 330,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
    }

})



const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const submit = () => {
    if (!email && !password){
      Alert.alert('Please fill all the fields')
    }else
    Alert.alert('Thankyou!')
    navigation.navigate('SignIn')
  }


   return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Sign up</Text>

      <View style={styles.inputContainer}>
      <Text style={styles.labels}>Email adress</Text>
      <TextInput 
      style={styles.inputStyle}
      value={email}
      onChangeText= {(email) => setEmail(email)}
      autoCapitalize= 'none'
      autoCorrect= {false}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.labels}>Password</Text>
      <TextInput 
      style={styles.inputStyle}
      value={password}
      onChangeText= {(password) => setPassword(password)}
      autoCapitalize= 'none'
      autoCorrect= {false}
      secureTextEntry= {true}
      />
      </View>
      
      
      <Button 
      onPress={(submit)} 
        style={styles.button} size='md' variant='subtle' colorScheme='secondary'>
            Continue
      </Button>
      <HStack mt='4' justifyContent='center'>
            <Text fontSize='md' color='#8D8D8D' _dark={{
            color: 'warmGray.200'
          }}>
              Already have an account?{' '}
            </Text>
            <Link _text={{
           color : 'black',
            fontWeight: 'bold',
            fontSize: 'md'
          }} href='#'>
              Login
            </Link>
          </HStack>
    </View>
  )
}

export default SignInScreen

