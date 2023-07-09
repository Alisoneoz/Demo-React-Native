import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='gray'/>
      <Image 
        source={{uri:'https://reactnative.dev/docs/assets/GettingStartedCongratulations.png'}}
        style={styles.image}
      />
      <Text style={{color:"green", fontWeight:"bold", fontSize:30, textAlign:"center"}}>Hola mandy mira este es Dukie el gatito de Michi</Text>
      
      <Image 
        source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={styles.image}
      />
      <Text style={styles.text}>Por cierto... Michi tiene dientes de Coneeejoo</Text>
      <TextInput onChangeText={(text) => console.log(text)} style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'purple',
    fontSize:15,
    fontWeight:"bold",
    padding:20
  },
  input:{
    backgroundColor:"aqua",
    borderRadius:15,
    paddingVertical: 10,
    paddingHorizontal:100,
  },
  image:{
    height:250,
    width:250,
  }
});
