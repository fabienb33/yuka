import React, {useEffect, useState } from "react"
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from "axios";
 
function SyntheseScreen({navigation}) {

  const [data, setData] = useState(null)
  const [isLoading, setIdLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
       try {
        const response = await axios.get("https://world.openfoodfacts.org/api/v0/product/737628064502.json");
        setData(response.data);
        SetIsLoading(false);
       }  catch (error) {
       }
    }
  fetchData()
  
  }, [])

    return (
        <View style={styles.background}>
            <Image source={require("../assets/home02Icon.png")} style={styles.homeIcon}></Image>
            <Text style={styles.text}>Scannez le code-barre d'un produit pour commencer</Text>
            <Text></Text>
        </View>
      );
    }


    const styles = StyleSheet.create({
      background: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: 30
        },
      homeIcon: {
          width:200,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        },
        text: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: 200,
            color: "#808080"
        }
    })
  export default SyntheseScreen;