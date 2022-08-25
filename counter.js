/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   ImageBackground,
   TextInput,
   Button,
 } from 'react-native';
 
//  const image = require('./src/assets/images/fluteWallpaper.jpg')
 
 export default () => {
 
   const [count, setCount] = useState(0)
 
   const handleInc = () => {
     setCount(count + 1)
   }
   const handleDec = () => {
     setCount(count - 1)
   }
 
 
   return (
     <View style={styles.container}>
       <View style={styles.btnContainer}>
         <Button title="Increment" style={styles.btn} onPress={handleInc} />
       </View>
       <Text style={styles.text}>{count}</Text>
       <View style={styles.btnContainer}>
         <Button title="Decrement" style={styles.btn} onPress={handleDec} />
       </View>
     </View>
   )
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     display: "flex",
     textAlign: "center",
     justifyContent: 'center',
   },
   btnContainer: {
    width: 100,
    margin: 20,
   },
   image: {
     flex: 1,
     justifyContent: "center"
   },
   text: {
     color: "white",
     fontSize: 42,
    //  lineHeight: 84,
     fontWeight: "bold",
     textAlign: "center",
     backgroundColor: "#000000c0"
   },
   btn : {
   }
 });
 