import { NavigationContainer } from '@react-navigation/native'
import { Text, Button, Heading} from 'native-base'
import React from 'react'
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import NextButton from '../components/NextButton'
import SkipButton from '../components/SkipButton'



const styles = StyleSheet.create ({
    container:{
      paddingHorizontal: 25,
      flex: 1
    },
    heading: {
      fontfamily: 'ProximaNova-Bold',
      paddingTop: 10,
      fontSize: 24,
      lineHeight: 30,
      fontWeight: '400',
      color: '#080808',
      textAlign: 'center'
    },
    paragraph: {
      lineHeight: 22,
      marginTop: 8,
      fontSize: 16,
      fontWeight: '400',
      color: '#8D8D8D',
      textAlign: 'center',
      marginBottom: 60
    }
})


interface ISlide {
  key: string
  title: string
  text: string
  image: ImageSourcePropType
  backgroundColor: string
}

const slides: ISlide[] = [
  {
    key: '1',
    title: 'Meet your perfect match',
    text: 'Please read our privacy policy and policy regarding before registering.',
    image: require('../../assets/images/img1.png'),
    backgroundColor: '#ffffff'
  },
  {
    key: '2',
    title: 'Meet new friends',
    text: 'Please read our privacy policy and policy regarding before registering.',
    image: require('../../assets/images/img2.png'),
    backgroundColor: '#ffffff'
  },
  {
    key: '3',
    title: 'Make your playlist',
    text: 'Please read our privacy policy and policy regarding before registering.',
    image: require('../../assets/images/img3.png'),
    backgroundColor: '#fffff'
  }
]

const IntroScreen = ({navigation}) => { // ignore this. I am talking about the navigation issue
  // return ( 
  //   <Box style={styles.container}>
  //       <View style={styles.topSection}>
  //         <Image
  //           resizeMode='contain'
  //           source={require('../../assets/images/img1.png')} />
  //       </View>

  //       <View style={styles.bottomSection}>
  //         <Heading style={styles.heading}>Meet your perfect match</Heading>
  //         <Text 
  //         style={styles.paragraph}>Please read our <Text underline>privacy policy</Text> and <Text underline>policy regarding</Text> before registering.
  //         </Text>
  //         <Button size='md' style={styles.topButton}>Next</Button>
  //         <Button size='md' variant="link" colorScheme='secondary' style={styles.lowerButton}>Skip</Button>
  //       </View>
  //   </Box>
  // )

  
  const _renderItem  = ({item}: {item: ISlide}) => {
    return (
      <View>
        <Image style={{width: 350, height: 350, marginTop: 50}}
        resizeMode='contain'
          source={item.image}/>
        <Heading style={styles.heading}>{item.title}</Heading>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <AppIntroSlider 
        data={slides} 
        renderItem={_renderItem} 
        activeDotStyle={{width: 10, backgroundColor: '#E24E59'}}
        dotStyle={{width: 10, backgroundColor: '#00033333'}}
        showDoneButton={false}
        showSkipButton={false}
        showNextButton={false}
      />
      <Text 
        style={styles.paragraph}>Please read our <Text underline>privacy policy</Text> and <Text underline>policy regarding</Text> before registering.
      </Text>
      <NextButton>Next</NextButton>
      <SkipButton onPress={()=>navigation.navigate('LogIn')}>Skip</SkipButton>
    </View>
  )
}

export default IntroScreen