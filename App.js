import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen00 from "./containers/HomeScreen00";
import HomeScreen01 from "./containers/HomeScreen01";
import HomeScreen02 from "./containers/HomeScreen02";
import HomeScreen03 from "./containers/HomeScreen03";
import Home from "./containers/Home"
import Scan from "./containers/Scan"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home00" component={HomeScreen00} />
        <Stack.Screen name="Home01" component={HomeScreen01} options={{ title: "Home01" }}/>
        <Stack.Screen name="Home02" component={HomeScreen02} options={{ title: "Home02" }}/>
        <Stack.Screen name="Home03" component={HomeScreen03} options={{ title: "Home03" }}/>
        <Stack.Screen name="Home" component={Home} options={{ title: "" }}/>
        <Stack.Screen name="Scan" component={Scan} options={{ title: "" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
