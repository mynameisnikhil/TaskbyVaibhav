import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";


const image = require("../assets/images/fluteWallpaper.jpg");

const SignInPage = () => {
    return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <View style={[styles.container]}></View>
              <View style={[styles.container, styles.form]}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                ></TextInput>
                <TouchableOpacity
                    style={[styles.button, styles.blue, ]}
                >
                    <Text style={{color : "white"}}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.container]}></View>
          </ImageBackground>
        </View>
      );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    input: {
        width: 350,
        borderRadius: 50,
        margin: 10,
        padding: 13,
        backgroundColor: "lightgrey"
    },
    form: {
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        padding: 15,
        margin: 10,
        width:350,
        borderRadius: 50,
      },
    blue: {backgroundColor: "#212E58"},
    
  });

export default SignInPage;