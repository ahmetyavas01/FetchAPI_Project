import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import User from './User'

export default function UserList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            fetch('https://dummyjson.com/users')
                .then((resp) => resp.json())
                .then((json) => setUsers(json.users))
                .finally(e => setLoading(false))
        })()
    }, [])

    return (
        <View style={{ width: '90%', marginTop:100 }}>
            {
                loading ? (<ActivityIndicator size={'large'} color={'black'} />) :
                    (<FlatList
                        data={users}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <User data={item}/>
                        )}
                    />)
            }


        </View>
    )
}

const styles = StyleSheet.create({})