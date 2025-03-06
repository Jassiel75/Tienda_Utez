import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {Icon, Avatar, Button} from "@rneui/base"

import { getAuth } from "firebase/auth";
export default function AvatarComponent() {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
  return (
    <View style={{flexDirection:'row', marginLeft: 16, marginBottom: 16}}>
            <Avatar
                rounded
                size="large"
                source={user.photoURL !== null 
                    ? {uri: user.photoURL}
                    : {uri: "https://img.freepik.com/vector-premium/ilustracion-joven-estilo-hombre-guapo-barba-dibujos-animados-avatar-perfil-hipster_15870-758.jpg"}
                }

            />
            <View style={{marginLeft:8, justifyContent:'center', alignItems:'flex-start'}}>
                <Text style={{fontWeight:'bold'}}>{user.displayName ? user.displayName : 'Sin nombre'} </Text>
                <Text>{user.email ? user.email : "Anonimo"}</Text>
            </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop: 64
    },
})