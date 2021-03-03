import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SyntheseScreen from "./SyntheseScreen"
import RecommandationScreen from "./RecommandationScreen"
import StartScreen from "./StartScreen"
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import Constants from 'expo-constants';


const Tab = createMaterialTopTabNavigator();

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
        <ScrollView style={styles.scrollview}>
            <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 12 },
            tabStyle: { width: 70, height: 60 },
            style: { backgroundColor: "#5dcf70" },
            indicatorStyle: {backgroundColor:"#ffffff"},
            showLabel: false,
            showIcon: true,
        }}>
            <Tab.Screen name="StartScan" component={StartScreen} 
                options={{ tabBarIcon: ({size,focused,color}) => {
                return (<Image source={require("../assets/yukaIcon.png")} style={styles.homeIcon}></Image>);},}}/>
            <Tab.Screen name="Recommandation" component={RecommandationScreen} 
                options={{ tabBarIcon: ({size,focused,color}) => {
                return (<Image source={require("../assets/arrowIcon.png")} style={styles.homeIcon}></Image>);},}}/>
            <Tab.Screen name="Synthese" component={SyntheseScreen} 
                options={{ tabBarIcon: ({size,focused,color}) => {
                return (<Image source={require("../assets/chartIcon.png")} style={styles.homeIcon1}></Image>);},}}/>
            </Tab.Navigator>
        </ScrollView>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    scrollview: {
        marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
    background: {
        backgroundColor: "#59b96f"
    },
    homeIcon: {
        width: 20,
        height: 22,
    },
    homeIcon1: {
        width: 23,
        height: 22,
    }
})
export default Home;