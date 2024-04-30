import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function User({ data }) {
    return (
        <View style={{ width: '90%', height: 75, flexDirection: 'row', margin:2, alignSelf: 'center', borderBottomWidth:0.2, borderColor:'gray'}}>

            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: data.image }} style={styles.userImage} />
            </View>

            <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{data.firstName} {data.lastName}</Text>
                <Text style={{ fontSize: 20 }}>@{data.username}</Text>
                <Text>{data.email}</Text>
            </View>

            <View style={{ flex: 1, justifyContent:'center'}}>
                <Text style={{color:'red', fontSize:20, fontWeight:'bold'}}>{data.age}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'black'
    }
})