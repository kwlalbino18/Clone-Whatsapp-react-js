import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import welcomeImage from '@/assets/images/welcome.png';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;


const page = () => {

  const openLink = () => {
    console.log('openLink')
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headline}>Welcome to WhatsApp clone</Text>
      <Text style={styles.description}>
        Read our{' '}
        <Text style={styles.Link} onPress={openLink}>
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
     
      <Text style={styles.Link} onPress={openLink}>
            Terms of Service
      </Text>
      .
 </Text>
 {/* te lleva a la pagina que declaraste en _layour */}
 <Link href={'/otp'} asChild >   
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>

    </View>
  )
}
//declaramos todos los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  welcome: {
    width: '100%',
    height: 300,
    marginBottom: 80,

  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,

  },
  description: {
fontSize:14,
textAlign:'center',
marginBottom: 80,
color: Colors.gray,
  },
  Link: {
    color: Colors.primary,
  },
  button:{
width: '100%',
alignItems: 'center',
  },
  buttonText:{
fontSize: 22,
color: Colors.primary,
fontWeight: 'bold',
  }
});

export default page