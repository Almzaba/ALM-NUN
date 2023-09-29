import { View, Text , StyleSheet , Button , Linking} from 'react-native'
import React,{useEffect, useState} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
 const [hasPermission, setHasPermission] = useState(null);
 const [scanned, setScanned] = useState(false);

 useEffect(() => {
  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  getBarCodeScannerPermissions();
}, []);

const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned!`);
};

if(hasPermission === null){
  return <Text></Text>
}

}


