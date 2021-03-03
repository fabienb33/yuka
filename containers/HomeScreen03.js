import * as React from "react";
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppLoading  from 'expo-app-loading';
import {  useFonts, Pacifico_400Regular,} from '@expo-google-fonts/pacifico';

function HomeScreen03({ navigation }) {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <SafeAreaView style={styles.background}>
            
            <Image source={require("../assets/homeIcon03.png")} style={styles.homeIcon}></Image>
            <TouchableOpacity onPress={() => { navigation.navigate("Home00");}} style={styles.button}>
            <Image source={require("../assets/fbicon.png")} style={styles.fbIcon}></Image>
                <Text style={styles.subTitle}>Continuer avec Facebook</Text>
            </TouchableOpacity>          
            <TouchableOpacity onPress={() => { navigation.navigate("Home00");}} style={styles.button1}>
                <Image source={require("../assets/emailicon.png")} style={styles.emailIcon}></Image>
                <Text style={styles.subTitle}>Se connecter par email</Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => { navigation.navigate("Home");}} style={styles.button2}>
                <Text style={styles.subTitle1}>Continuer en tant qu'invité</Text>
            </TouchableOpacity>  
          </SafeAreaView>
        );
      }
    };

    const styles = StyleSheet.create({
      background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fafafa",
        padding: 50
      },
      homeIcon: {
          top:-100,
        width:200,
        height: 230,
        alignItems: "center",
        justifyContent: "center",
      },
      homeTitle: {
        fontFamily: 'Pacifico_400Regular', 
        color: "#ffffff", 
        fontSize: 30, 
        textAlign: "center",
      },
      subTitle: {
        color: "#ffffff", 
        textAlign: "center",
      },
      button: {
        bottom: -150,
        width: 220,
        paddingLeft:20,
        paddingRight:10,
        height: 40,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
        backgroundColor: "#3b5796",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 3,
      },
      button1: {
        bottom: -150,
        width: 220,
        paddingLeft:20,
        paddingRight:20,
        height: 40,
        borderRadius: 7,
        marginTop: 10,
        alignItems: "center",
        flexDirection:"row",
        justifyContent: "space-between",
        backgroundColor: "#66b585",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 3,
      },
      button2: {
        bottom: -150,
        width: 220,
        paddingLeft:20,
        paddingRight:20,
        height: 40,
        borderRadius: 7,
        marginTop: 10,
        alignItems: "center",
        flexDirection:"row",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor: "#808080",
        alignItems: "center",
        justifyContent: "center",
      },
      subTitle1: {
        color: "#808080", 
        textAlign: "center",
      },
      emailIcon: {
          width:20,
          height:20,
      },
      fbIcon: {
        width:20,
        height:20,
    }
    })

export default HomeScreen03;
