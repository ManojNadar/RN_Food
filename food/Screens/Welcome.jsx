import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

// console.log(width, height);

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="rgb(255, 213, 128)"
        barStyle="light-content"
      />
      <Image
        style={styles.welcomeImage}
        source={require("../assets/Images/coffee.gif")}
      />

      <View style={styles.upperLayer}>
        <Text style={styles.upperText}>
          <Text style={{ color: "yellow", fontSize: 50 }}>S</Text>
          nacks
        </Text>
        <Text style={styles.upperText}>
          <Text style={{ color: "yellow", fontSize: 55 }}>C</Text>
          ORNER
        </Text>
        <Pressable
          style={styles.welcomeBtn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.welcomeBtnText}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeImage: {
    width: width,
    height: height,
    flex: 1,
    opacity: 0.9,
  },
  upperLayer: {
    position: "absolute",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.7,
  },
  upperText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    top: 150,
    left: 70,
    textAlign: "center",
    fontFamily: "",
    letterSpacing: 5,
  },

  welcomeBtn: {
    backgroundColor: "rgb(255, 213, 128)",
    width: 300,
    top: 625,
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeBtnText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
