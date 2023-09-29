import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Blue1, Jud3, User3,Mail ,Call, Kun,Ta, Pakka, Pakka1} from './svg'

export default function Account({ navigation }) {

  const goHome = () => {
    navigation.navigate("Home")
  }
  return (
    <View style={{}}>
     
        <View style={{ paddingHorizontal: 30, marginTop: 100 }}>
          <View style={{
            backgroundColor: "#18075B",
            width: "100%",
            height: 120,
            borderRadius: 20,
            paddingLeft: 36,
            paddingTop: 15,
            paddingBottom: 35,
          }}>
            {/* <Blue1/> */}
            <View style={{alignItems:"flex-end",paddingRight:13}}><Jud3/></View>
            <View style={{ flexDirection: "row",alignItems:"center" }}>
              <Image
                source={require("../assets/75.png")}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10
                }}
              />
              <View style={{marginLeft:30,alignItems:"center"}}>
                <Text style={{color:"#fff"}}>Bella</Text>
                <Text style={{color:"#fff",fontSize:20}}>115.00</Text>
              </View>
              
            </View>
            
          </View>

          <View style={{marginTop:35}}>
            <Text style={{fontSize:14}}>ชื่อ-นามสกุล</Text>
            <View style={{
              marginTop:6,
              borderWidth:2,
              borderColor:"gray",
              borderRadius:10,
              width:"100%",
              height:40
              }}>
                <View style={{paddingLeft:15,paddingVertical:10,flexDirection:"row"}}>
                  <User3/>
                  <Text style={{marginLeft:10,color:"gray"}}>Bella</Text>
                </View>
                
              </View>
          </View>

          <View style={{marginTop:10}}>
            <Text style={{fontSize:14}}>Email</Text>
            <View style={{
              marginTop:6,
              borderWidth:2,
              borderColor:"gray",
              borderRadius:10,
              width:"100%",
              height:40
              }}>
                <View style={{paddingLeft:15,paddingVertical:10,flexDirection:"row"}}>
                  <Mail/>
                  <Text style={{marginLeft:10,color:"gray"}}>Bella@gmail.com</Text>
                </View>
                
              </View>
          </View>

          <View style={{marginTop:10}}>
            <Text style={{fontSize:14}}>เบอร์โทรศัพท์</Text>
            <View style={{
              marginTop:6,
              borderWidth:2,
              borderColor:"gray",
              borderRadius:10,
              width:"100%",
              height:40
              }}>
                <View style={{paddingLeft:15,paddingVertical:10,flexDirection:"row"}}>
                  
                  <Call/>
                  <Text style={{marginLeft:10,color:"gray"}}>058-889-5555 </Text>
                </View>
                
              </View>
          </View>

          <View style={{marginTop:10}}>
            <Text style={{fontSize:14}}>Password</Text>
            <View style={{
              marginTop:6,
              borderWidth:2,
              borderColor:"gray",
              borderRadius:10,
              width:"100%",
              height:40
              }}><View style={{}}>
                <View style={{paddingLeft:15,paddingVertical:10,flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row"}}>
                  <Kun/>
                  <Text style={{marginLeft:10,color:"gray",paddingTop:4}}>*****************</Text>
                  </View>
                  <View style={{paddingRight:15,paddingTop:4}}>
                <Ta/>
                </View>
                </View>        
                </View>
                
              </View>
          </View>
          <View style={{
            
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            marginTop:35
            }}>
            <Pakka/>
            <Text>  แก้ไขโปรไฟล์</Text>
          </View>
          <View style={{paddingHorizontal:84,marginTop:100}}>

          <TouchableOpacity 
           onPress={() => navigation.navigate('Login')}
          style={{
            backgroundColor:"#D5E2F5",
            width:"100%",
            height:43,
            borderRadius:30,
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row"
            
            }}>
            <View style={{
              backgroundColor:"#18075B",
              width:30,
              height:30,
              borderRadius:10,
              alignItems:"center",
              justifyContent:"center"}}>
              <Pakka1/>
            </View>
            <Text style={{marginLeft:10,color:"#3422FF"}}>ออกจากระบบ</Text>
          </TouchableOpacity>
          </View>
         
          
        </View>
      
    </View>
  )
}