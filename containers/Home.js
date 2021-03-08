import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SyntheseScreen from "./SyntheseScreen"
import { createStackNavigator } from "@react-navigation/stack";
import RecommandationScreen from "./RecommandationScreen"
import StartScreen from "./StartScreen"
import { View, Text, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";
import Constants from 'expo-constants';

const Stack = createStackNavigator();
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
                    <Tab.Screen name="StartScreen" component={StartScreen} 
                        options={{ tabBarIcon: ({size,focused,color}) => {
                        return (<Image source={require("../assets/yukaIcon.png")} style={styles.homeIcon}></Image>);},}}/>
                            { () => (<Stack.Navigator>
                                        <Stack.Screen name="StartScreen" component={StartScreen} />
                                        <Stack.Screen name="SyntheseScreen" component={SyntheseScreen} />
                                    </Stack.Navigator>)}
                    <Tab.Screen name="Recommandation" component={RecommandationScreen}
                        options={{ tabBarIcon: ({size,focused,color}) => {
                        return (<Image source={require("../assets/arrowIcon.png")} style={styles.homeIcon}></Image>);},}}/>
                            { () => (<Stack.Navigator>
                                        <Stack.Screen name="RecommandationScreen" component={RecommandationScreen} />
                                    </Stack.Navigator>)}
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

                
{/* <Tab.Screen name="Synthese"  
  options={{ tabBarIcon: ({size,focused,color}) => {
  return (<Image source={require("../assets/chartIcon.png")} style={styles.homeIcon1}></Image>);},}}/>
  <Stack.Screen component={SyntheseScreen}/> */}

//   <Tab.Screen name="Products" component={ProductsScreen}
//       options={{
//         title: "",
//         tabBarIcon: () => {
//           return <FontAwesome5 name="carrot" size={24} color="black" />;
//         },
//       }}
//     >
//     { () => (<Stack.Navigator>
//          <Stack.Screen name="Home" component={HomeScreen} />
//          <Stack.Screen name="Product" component={ProductScreen} />
//      </Stack.Navigator>)}
// </Tab.Screen>