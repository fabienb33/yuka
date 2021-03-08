import * as React from "react";
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';



function StartScreen({navigation}) {
    return (
            <View style={styles.scrollview}>
                <Image source={require("../assets/home00Icon.png")} style={styles.homeIcon}></Image>
                <TouchableOpacity onPress={() => { navigation.navigate("Scan");}} style={styles.button}>
                    <Image source={require("../assets/scanIcon.png")} style={styles.scanIcon}></Image>
                </TouchableOpacity>
            </View>    
    );
  }
  const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        padding: 30
      },
    homeIcon: {
        width:200,
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
      },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "#5dcf70",
        borderRadius:100,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 3,
        right: -150,
        bottom: -50,
        marginBottom: 80,
    },
    scanIcon: {
        width: 34,
        height: 25,
    },
    scrollview: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    }
  })
  export default StartScreen;