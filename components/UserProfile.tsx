import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Image } from 'react-native'

interface Dataa {
    id: string;
    completed: boolean;
    gender: string;
    name:{
        title:string;
        first:string;
        last:string;
    };
    picture:{
        large:string;
        medium:string;
        thumbnail:string;
    };
}

interface DataaItemProp {
    item: Dataa;
}

const UserProfile = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://randomuser.me/api/')
            // const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            const result = await response.json();
            setData(result.results)
        };
        try {
            fetchData();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <View>
            <Text>User Profile</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: DataaItemProp) => (
                    <View
                    style={tw`h-fit border border-2 border-gray-400 p-3 rounded-md `}
                    >
                         <Image
                            source={{ uri: item.picture.thumbnail }}
                            style={tw`w-12 h-12 `}
                        />
                        <Text>{item.gender}</Text>
                        <Text>{item.name.title}</Text>
                        <Text>{item.name.last}</Text>
                        <Text>{item.name.first}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default UserProfile