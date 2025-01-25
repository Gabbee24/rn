import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import tw from 'twrnc'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                // const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s");
                const data = await response.json();
                setMeals(data.meals);
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        };

        fetchMeals();
    }, [])

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text
            style={tw`text-red-500 font-bold text-2xl `}
        >Error</Text>
    }

    return (
        <View>
            <FlatList
                data={meals}
                keyExtractor={(item: any) => item.idMeal}
                renderItem={({ item }) => (
                    <View
                        style={tw`flex flex-row my-1 px-3 `}
                    >
                        <Image
                            source={{ uri: item.strMealThumb }}
                            style={tw`w-12 h-12 `}
                        />
                        <View
                            style={tw` `}
                        >
                            <Text
                                style={tw`text-red-500 font-bold text-2xl `}
                                >{item.strCategory}</Text>
                                <Text>{item.strMeal}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Meals