import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screen/Login";
import Home from "./Screen/Home";
import Qrcode from "./Screen/QRcode";
import Account from "./Screen/account";
import Register from "./Screen/Register";
import Topup from "./Screen/topup";
import Scanner from "./Screen/Scanner";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{ headerShown:false}} /> 

      <Stack.Screen 
      name="Register" 
      component={Register}
      options={{ headerShown:false}} /> 

      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{ headerShown:false}} /> 

      <Stack.Screen   
      name="QRcode" 
      component={Qrcode}
      options={{ headerShown:false}} /> 

     <Stack.Screen 
      name="Account" 
      component={Account}
      options={{ headerShown:false}} /> 

      <Stack.Screen
        name="Topup"
        component={Topup}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}