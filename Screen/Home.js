import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon, Qr, User, Blue, Info, Kading, Wong, Muang, Word, Icon2, Qr2, User2 } from './svg'
import Qrcode from './QRcode'
import Account from './account'

export default function Home({ navigation }) {

  const [home, sethome] = useState(true)
  const [Acc, setAccount] = useState(false)
  const [qr, setqr] = useState(false)

  const goTopup = () => {
    navigation.navigate("Topup")
  };

  const goHome = () => {
    console.log("loooo");
    sethome(true)
    setAccount(false)
    setqr(false)

  };

  const goqr = () => {
    console.log("loooo");
    sethome(false)
    setAccount(false)
    setqr(true)

  };

  const goAcc = () => {
    console.log("loooo");
    sethome(false)
    setAccount(true)
    setqr(false)

  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor:(Acc===true)? "#FFFF" : "#18075B" }}>
        {(home === true
          ? (<View style={{ backgroundColor: "#18075B", width: "100%", height: "90%" }}>
            <View style={{ top: 0, position: "absolute" }}>
              <Blue />
            </View>
            <View style={{ marginTop: 79, paddingLeft: 36 }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../assets/75.png")}
                    style={{
                      height: 62,
                      width: 55,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ marginLeft: 8, alignItems: "center" }}>
                    <Text style={{ color: "#ffff" }}>   Welcome Black</Text>
                    <Text style={{ color: "#ffff" }}>   Bella</Text>
                  </View>
                </View>

                <View style={{ paddingRight: 22 }}><Kading /></View>
              </View>

            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: 148 }}>
              <View style={{
                width: 248,
                height: 248,
                borderRadius: 248 / 2,
                backgroundColor: "#ffff",
                borderWidth: 6,
                borderColor: "black",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Text style={{ color: "black", fontSize: 20 }}>Balance</Text>
                <Text style={{ color: "black", fontSize: 40 }}>฿ 115.00</Text>
              </View>
            </View>
            <View style={{
              marginTop: 78, 
              flexDirection: "row", 
              paddingHorizontal: 92, 
              justifyContent: "space-between"
            }}>
              <View style={{ alignItems: "center" }}>
                <View style={{
                  width: 82,
                  height: 82,
                  borderRadius: 82 / 2,
                  backgroundColor: "#ffff",
                  borderWidth: 2,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <TouchableOpacity
                  onPress={() => goTopup("Topup")}
                ><Muang />
                </TouchableOpacity>
                </View>
                <Text style={{
                  color: "#fff",
                  fontSize: 20,
                  marginTop: 17
                }}>Top Up</Text>

              </View>


              <View style={{ alignItems: "center" }}>
                <View style={{
                  width: 82,
                  height: 82,
                  borderRadius: 82 / 2,
                  backgroundColor: "#ffff",
                  borderWidth: 2,
                  borderColor: "black",
                  justifyContent: "center",
                  alignItems: "center"
                }}><View><Word /></View>
                </View>
                <Text style={{ color: "#fff", fontSize: 20, marginTop: 17 }}>Pay</Text>
              </View>

            </View>

          </View>)

          : (qr === true)
            ? <Qrcode navigation={navigation} />
            : (Acc === true)
              ? <Account navigation={navigation} />
              : null

        )}
      </View>

      <View style={{ 
        backgroundColor: "#ffff", 
        position: "absolute", 
        bottom: 0, 
        width: "100%", 
        height: 80 ,
        shadowColor:"black",
        shadowOpacity:0.3
        }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 19
        }}>



          <TouchableOpacity
            onPress={() => goHome("")}
          >
            {(home === true

              ?
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#232897",
                alignItems: "center",
                justifyContent: "center", marginTop: -40,
                borderWidth: 3,
                borderColor: "#fff"

              }}><Icon2 />
              </View>
              : <Icon />

            )}

          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => goqr("")}
          >
            {(qr === true
              ?
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#232897",
                alignItems: "center",
                justifyContent: "center", marginTop: -40,
                borderWidth: 3,
                borderColor: "#fff"
              }}>
                <Qr2 />
              </View>
              : <Qr />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => goAcc("Account")}
          >
            {(Acc === true
              ?
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#232897",
                alignItems: "center",
                justifyContent: "center", marginTop: -40,
                borderWidth: 3,
                borderColor: "#fff"
              }}>
                <User2 />
              </View>
              : <User />
            )}
          </TouchableOpacity>

        </View>


      </View>
    </>
  )
}