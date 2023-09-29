import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Back } from './svg'

export default function Topup({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 30, marginTop: 75, flexDirection: "row", alignItems: "center" }}>
                <Back />
                <Text style={{ marginLeft: 10, color: "#18075B", fontSize: 18 }}>Top Up </Text>
            </View>
            <View style={{
                // backgroundColor: "#18075B",
                width: "100%",
                height: 120,
                marginTop: 30,
                paddingHorizontal: 30
            }}>
                <View style={{
                    backgroundColor: "#C4C4C4",
                    width: "100%",
                    height: 120,
                    borderRadius: 20,
                    justifyContent: "center",
                    paddingLeft: 35,


                }}>
                    <View style={{}}>
                        <Text style={{ color: "black" }}>Bella</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 28 }}>
                            <Text style={{ color: "black", fontSize: 20 }}>115.00</Text>
                            <View style={{ width: 54, height: 20, borderRadius: 10, backgroundColor: "#18075B", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "#ffff" }}>Bath</Text>
                            </View>
                        </View>
                    </View>
                </View>


            </View>

            <View style={{ paddingHorizontal: 30, marginTop: 46, flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 18 }}>Top Up Detail</Text>

            </View>

            <View style={{ paddingHorizontal: 30, borderRadius: 10, marginTop: 8 }}>
                <View style={{ borderBottomWidth: 3, borderColor: "gray", borderRadius: 10 }}></View>
            </View>

            <View style={{ paddingHorizontal: 30, marginTop: 17, flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "black", fontSize: 14 }}>Diamond</Text>
            </View>

            <View style={{
                marginTop:46,
                paddingHorizontal:37,
                flexDirection:"row",
                justifyContent:"space-around"}}>
                <View style={{
                    width:100,
                    height:58,
                    backgroundColor:"blue",
                    borderRadius:20,
                    alignItems:"center",
                    justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:"#ffff"}}>50</Text>
                </View>

                <View style={{width:100,height:58,backgroundColor:"blue",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:"#ffff"}}>50</Text>
                </View>

                <View style={{width:100,height:58,backgroundColor:"blue",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:"#ffff"}}>50</Text>
                </View>

            </View>



        </View>
    )
}