import { View, Text, TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


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
            }}>สมัครสมาชิก</Text>

            <View style={{
                width:'100%',
                height:'22%',
                alignItems:'center',
                justifyContent:'space-around',
                marginTop:20,
            }}>
            <View style={{
                width:'70%',
                height:'18%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
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
                width:'100%',
                height:'18%',
                alignItems:'center',
            }}>
            <View style={{
                width:'70%',
                height:'100%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
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
           </View>
           <View style={{
                width:'100%',
                height:'18%',
                alignItems:'center',
            }}>
            <View style={{
                width:'70%',
                height:'100%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
                justifyContent:'center',
            }}> 
            <TextInput
            style={{
                paddingHorizontal:10
            }}
            placeholder = "G-mail"
            fontSize={16}
            placeholderTextColor = "grey"
            secureTextEntry={false}
           />
           </View>
           </View>


                <View style={{
                width:'70%',
                height:'18%',
                backgroundColor:'#FFFFFF',
                borderRadius:20,
                justifyContent:'center',
            }}> 
            <TextInput
            style={{
                paddingHorizontal:10
            }}
            placeholder = "เบอร์"
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
                    paddingVertical:20,
                    // backgroundColor:'red'
                }}>
                    
                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
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
                  onPress={() => navigation.navigate('Login')}
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
                        ยกเลิก
                    </Text> 
                               
                 </TouchableOpacity>

                 <TouchableOpacity 
                 onPress={() => navigation.navigate('Login')}
                 style={{
                   position:'absolute',
                   width:'95%',
                   alignItems:'center',
                   top:100,
                 }}> 
                    <Text style={{
                        fontSize:16,
                        color:'white'
                    }}>Already  have an account ? Login  </Text>    
                    </TouchableOpacity>     
                 </View>
             
                </View>
        </LinearGradient>
    </View>
  )
}