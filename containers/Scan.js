import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, PushNotificationIOS } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import { useNavigation } from "@react-navigation/core";

const ScanScreen = (props,) => {
  const [hasPermission, setHasPermission] = useState(null);
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [errorMessages, setErrorMessages] = useState(false);

    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted'); })();}, []);
     
    const handleBarCodeScanned = async({ data }) => {
      setScanned(true);
      setIsLoading(true);
      
    const fetchData = async () => {
          try{  
            const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
              setData(response.data)
              setIsLoading(false);          } 
          catch (error){
              console.log(error.message);
          }
      };
      fetchData();   
    };


    return( 
      isLoading ? (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end',}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
        </View>
      ) : (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end',}}>
          {scanned && !errorMessages ? (
            <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
                <View>
                    <Image style={styles.img} source={{ uri: data.product.image_url}}/>
                </View>
                
                <View style={{flexDirection: "column"}}>
                    <Text style={{fontSize: 20, left: -60}}>{data.product.brands}</Text>
                    <Text style={{fontSize: 14, color: "grey", left: -60}}>{data.product.product_name}</Text>
                    <Text style={{fontSize: 20, left: -60, bottom: -50}}>{data.product.ecoscore_data.agribalyse.score}/100</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("Home");}} style={styles.button}>
                      <Text style={{textAlign:"center", color:"grey"}}>Voir le détail</Text>
                </TouchableOpacity>

            </View>
          ) : (
          scanned && errorMessages && <Text>Produit non trouvé</Text>
        )}

    </View>
    )
  )
}

export default ScanScreen;

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    marginBottom: 50,
    marginTop: 100,
    bottom: -150,
    width: 220,
    paddingLeft:20,
    paddingRight:20,
    height: 40,
    borderRadius: 7,
    marginTop: 10,
    alignItems: "center",
    flexDirection:"row",
    borderWidth:1,
    borderColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
})