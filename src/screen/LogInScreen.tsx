import React from 'react'
import { StyleSheet, View} from 'react-native'
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack} from 'native-base'
import {NavigationContainer} from '@react-navigation/native'



const styles = StyleSheet.create({
    box: {
      marginTop: 25,
    },
    topForm: {
      width: 300,
      height: 64,
      borderRadius: 16,
      borderColor: '#FDDBDDB3',
    },
    topFormText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#8D8D8D',
      padding:10
    },
    bottomForm: {
      marginTop: 20,
      width: 300,
      height: 64,
      borderRadius: 16,
      borderColor: '#CB1F2C0F'
    },
    bottomFormText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#8D8D8D',
      padding: 10
    },
    button: {
    // backgroundColor: '#E24E59',
    borderRadius: 16,
    height: 60,
    marginTop: 330,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
    }

})


const LogInScreen = ({navigation}) => {
  return (
     <Center w='100%'>
      <Box style={styles.box} >
        <Heading size='lg' fontWeight='700' color='#080808' _dark={{
        color: '#080808'
      }}>
          Sign In
        </Heading>
        {/* <Heading mt='1' _dark={{
        color: 'warmGray.200'
      }} color='coolGray.600' fontWeight='medium' size='xs'>
          Sign in to continue!
        </Heading> */}

        <VStack space={5} mt='6'>
          <FormControl style={styles.topForm} >
            <Text style={styles.topFormText}>Email adress</Text>
            <Input />
          </FormControl>
          <FormControl style={styles.bottomForm}>
            <Text style={styles.bottomFormText}>Password</Text>
            <Input type='password' />
            {/* <Link _text={{
            fontSize: 'xs',
            fontWeight: '500',
            color: 'indigo.500'
          }} alignSelf='flex-end' mt='1'>
              Forget Password?
            </Link> */}
          </FormControl>
          <Button onPress={()=>navigation.navigate('SignIn')}  style={styles.button} size='md' variant='subtle' colorScheme='secondary'>
            Continue
          </Button>
          <HStack mt='6' justifyContent='center'>
            <Text fontSize='sm' color='coolGray.600' _dark={{
            color: 'warmGray.200'
          }}>
              Don't have an account?{' '}
            </Text>
            <Link _text={{
            color: '#080808',
            fontWeight: 'medium',
            fontSize: 'sm'
          }} href='#'>
              Register
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>

  )
}

export default LogInScreen
