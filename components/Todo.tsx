import { View, Text, Button, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'

interface Todo {
    id: string;
    text: string;
}

interface TodoItemProp {
    item: Todo;
}

const Todoo = () => {
    const [text, setText] = useState<string>('');
    const [todo, setTodo] = useState<Todo[]>([])

    const addTodo = () => {
        if (text.trim()) {
            setTodo([...todo, { id: Date.now().toString(), text }]);
            setText('');
        }
        // console.warn("hello Gabby")
    }

    const handleSubmit = () => {
        addTodo();
    }

    const removeTodo = (id: string) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    }

    const renderTodo = ({ item }: TodoItemProp) => {
        return (
            <TouchableOpacity onLongPress={() => removeTodo(item.id)} >
                <Text style={tw`p-3 bg-[#fff] boerder border-b-2 border-[#ddd] `} >{item.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View
        style={tw`w-full`}
        >
            <Text style={tw`text-red-600 mb-3 font-bold text-xl underline `} >Todo List</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder='Add new task'
                onSubmitEditing={handleSubmit}
                returnKeyType='done'
                style={tw`h-10 border border-2 border-gray-400 p-3 rounded-md `}
            />

            <Button
                title='Add Task'
                onPress={addTodo}
                color='purple'
            />

            <FlatList
                data={todo}
                keyExtractor={(item) => item.id}
                renderItem={renderTodo}
            />

        </View>
    )
}

export default Todoo