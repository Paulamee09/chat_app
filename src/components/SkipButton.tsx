import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Text } from 'native-base'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    height: 60,
    paddingVertical: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
  },
  buttonText: {
    color: '#E24E59',
    fontSize: 18,
    // fontFamily: 'ProximaNova-Regular',
  }
})

interface IPropType {
  children: string
  onPress: Function
}


const SkipButton = (props: IPropType) => {
  return (
    <Pressable
     style={styles.button}
     onPress={() => props.onPress()}
     
     >
      <Text style={styles.buttonText}>{props.children}</Text>
     </Pressable>
  )
}

export default SkipButton