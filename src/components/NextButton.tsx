import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Text } from 'native-base'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E24E59',
    borderRadius: 16,
    height: 60,
    paddingVertical: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    // fontFamily: 'ProximaNova-Regular'
  }
})
interface IPropType {
  children: string
}

const NextButton = (props: IPropType) => {
  return (
    <Pressable
      style={styles.button}
      
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
  )
}

export default NextButton