import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const image = require("../assets/images/fluteWallpaper.jpg");

const App = () => {

    const onPress = () => {console.log("pressed")}

    return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <View style={{flex: 1, margin: 35, marginTop: 50}}>
                  <Text style={styles.text} >HELLO</Text>
                  <Text>lorem ipsum dolor sit amet</Text>
              </View>
              <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
                <TouchableOpacity
                    style={[styles.button, styles.blue, ]}
                    onPress={onPress}
                >
                    <Text style={{color : "white"}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.white]}
                    onPress={onPress}
                >
                    <Text style={{color : "#212E58"}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
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
  text: {
    color: "#10063F",
    fontSize: 60,
    fontWeight: "800",
  },
  button: {
    alignItems: "center",
    padding: 10,
    margin: 10,
    width:300,
    borderRadius: 20,
  },
  blue: {backgroundColor: "#212E58"},
  white: {backgroundColor: "white"}
});

export default App;