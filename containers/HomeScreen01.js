import * as React from "react";
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppLoading  from 'expo-app-loading';
import {  useFonts, Pacifico_400Regular,} from '@expo-google-fonts/pacifico';

function HomeScreen01({ navigation, onPress }) {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
          <SafeAreaView style={styles.background}>
            
            <Image source={require("../assets/homeIcon01.png")} style={styles.homeIcon}></Image>
            <Text style={styles.homeTitle}>
              Analyse des produits
            </Text>
            <Text style={styles.subTitle}>Yuka scanne vos produits {"\n"}et évalue leur impact sur la santé</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Home02");}} style={styles.button}>
                <Text style={styles.subTitle}>Cliquer pour continuer</Text>
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
        backgroundColor: "#f0845d",
        padding: 30
      },
      homeIcon: {
        width:300,
        height: 200,
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
        color: "red",
        bottom: -150,
        width: 200,
        height: 40,
        borderWidth:1,
        borderColor: "#ffffff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }
    })

export default HomeScreen01;
