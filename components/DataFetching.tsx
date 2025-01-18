import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'

interface Dataa {
    id: string;
    title: string;
    completed: boolean;
}

interface DataaItemProp {
    item: Dataa;
}

const DataFetching = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            // const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            const result = await response.json();
            console.log(response)
            console.log(result)
            setData(result)
        };
        try {
            fetchData();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <View>
            <Text>DataFetching</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: DataaItemProp) => (
                    <View
                    style={tw`h-10 border border-2 border-gray-400 p-3 rounded-md `}
                    >
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DataFetching