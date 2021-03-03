import * as React from "react";
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function RecommandationScreen({navigation}) {
    return (
        <View style={styles.background}>
            <Image source={require("../assets/home01Icon.png")} style={styles.homeIcon}></Image>
            <Text style={styles.text}>Yuka vous recommande ici des alternatives plus saines</Text>
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
            width: 180,
            color: "#808080"
        }
    })
  export default RecommandationScreen;