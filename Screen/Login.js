import { View, Text, TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Login({navigation}) {
  return (
    <View>
        <LinearGradient
        colors={['#021B79', '#0575E6']}
        style={{
          width:'100%',
          height:'110%',
        }}
        >
            <View style={{
                width:'100%',
                height:'34%',
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Image
            source={require('../assets/Logo.png')}
            />
        </View>
        <View>
            <Text style={{
                fontSize:24,
                fontWeight:'bold',
                color:'#FFFFFF',
                paddingHorizontal:30,
            }}>เข้าสู่ระบบ</Text>

            <View style={{
                width:'100%',
                height:'18%',
                alignItems:'center',
            }}>
            <View style={{
                width:'70%',
                height:'20%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
                top:38,
                justifyContent:'center',
            }}> 
            <TextInput
            style={{
                paddingHorizontal:10
            }}
            placeholder = "กรอกชื่อ"
            fontSize={16}
            placeholderTextColor = "grey"
            secureTextEntry={false}
           />
                </View>
                <View style={{
                width:'70%',
                height:'20%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
                top:80,
                justifyContent:'center',
            }}> 
            <TextInput
            style={{
                paddingHorizontal:10
            }}
            placeholder = "รหัสผ่าน"
            fontSize={16}
            placeholderTextColor = "grey"
            secureTextEntry={true}
           />
            </View>
            </View>
            <View style={{
                    width:'100%',
                    height:'100%',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    // backgroundColor:'red'
                }}>
                    
                <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}
                style={{
                    width:'40%',
                    height:'4%',
                    backgroundColor:'transparent',
                    borderRadius:20,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:18,
                        fontWeight:'bold',
                    }}>
                        สมัครสมาชิก
                    </Text>
                    </TouchableOpacity>

                 <TouchableOpacity 
                 onPress={() => navigation.navigate('Home')}
                 style={{
                    width:'40%',
                    height:'4%',
                    backgroundColor:'#232897',
                    borderRadius:20,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:18,
                        fontWeight:'bold',
                    }}>
                        เข้าสู่ระบบ
                    </Text>                  
                 </TouchableOpacity>

                 
                 <View style={{
                  width:'90%',
                  position:'absolute',
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-around',
                  top:80,
                 }}>
                    <View style={{
                        borderBottomWidth:1,
                        width:120,
                        borderColor:'#D8D8DD',
                    }}>
                    </View>
                    <Text
                    style={{
                        color:'#D8D8DD'
                    }}
                    > Or login With</Text>
                    <View style={{
                        borderBottomWidth:1,
                        width:120,
                        borderColor:'#D8D8DD',
                    }}>
                        </View>

                        
                    </View> 
                    <View style={{
                           width:'90%',
                           position:'absolute',
                           flexDirection:'row',
                           top:80,
                           justifyContent:'space-around',
                        }}>
                            <TouchableOpacity>
                            <View style={{
                                width:105,
                                height:60,
                                backgroundColor:'#23289778',
                                top:50,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <AntDesign name="google" size={24} color="white" />
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <View style={{
                                width:105,
                                height:60,
                                backgroundColor:'#23289778',
                                top:50,
                                alignItems:'center',
                                    justifyContent:'center'
                            }}>
                                <AntDesign name="apple1" size={24} color="white" />
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <View style={{
                                width:105,
                                height:60,
                                backgroundColor:'#23289778',
                                top:50,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                
                                <FontAwesome name="facebook-f" size={24} color="white" />   
                        
                            </View>
                            
                            
                            </TouchableOpacity>
                        </View>  
                 </View>            
                </View>
        </LinearGradient>
    </View>
  )
}