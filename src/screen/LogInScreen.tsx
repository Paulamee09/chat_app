import React, { useState } from 'react'
import { StyleSheet, TextInput, View} from 'react-native'
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


const isValidObjectField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}


const updateError = (error, stateUpdater) => {
  stateUpdater(error)
  setTimeout(() => {
    stateUpdater('')
  }, 2500);
}

const LogInScreen = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    Emailadress: '',
    Password: '',
  })

const [error, setError] = useState('')


const { Emailadress, Password } = userInfo


const handleOnChnageText = (value,fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value})
  }

  
const isValidForm = () => {
    // Object.values(userInfo).every(value => value.trim())
    if(!isValidObjectField(userInfo)) return updateError('Required all fields!', setError)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Sign in</Text>

      <View style={styles.inputContainer}>
      <Text style={styles.labels}>Email adress</Text>
      <TextInput style={styles.inputStyle}
      value={Emailadress}
      onChangeText={(value) => handleOnChnageText(value,'Emailadress')}
      autoCapitalize= 'none'
      autoCorrect= {false}
      />
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.labels}>Password</Text>
      <TextInput style={styles.inputStyle}
      onChangeText={(value) => handleOnChnageText(value,'Emailadress')}
      value={Password}
      autoCapitalize= 'none'
      autoCorrect= {false}
      secureTextEntry= {true}
      />
      </View>
      
      
      <Button onPress={()=>navigation.navigate('SignIn')}  style={styles.button} size='md' variant='subtle' colorScheme='secondary'>
            Continue
      </Button>
      <HStack mt='4' justifyContent='center'>
            <Text fontSize='md' color='#8D8D8D' _dark={{
            color: 'warmGray.200'
          }}>
              Don't have an account?{' '}
            </Text>
            <Link _text={{
           color : 'black',
            fontWeight: 'bold',
            fontSize: 'md'
          }} href='#'>
              Register
            </Link>
          </HStack>
    </View>
  )
}

export default LogInScreen

