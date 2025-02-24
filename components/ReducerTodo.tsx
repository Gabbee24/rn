import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'
import tw from 'twrnc'

interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[]
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

interface RemoveTodoAction {
  type: "REMOVE_TODO";
  payload: string;
}

type Action = AddTodoAction | RemoveTodoAction;

const initialState: State = { todos: [] };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state;;
  }
}

const ReducerTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if(inputValue.trim()){
      dispatch({type: "ADD_TODO", payload: inputValue});
      setInputValue('')
    }
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({type: "REMOVE_TODO", payload: id});
  };

  return (
    <View
    style={tw`w-full`}
    >
            <Text style={tw`text-red-600 mb-3 font-bold text-xl underline `} >Todo List with useRdeucer</Text>
            <TextInput
        placeholder='Enter a todo'
        value={inputValue}
        onChangeText={setInputValue}
        style={tw`h-10 border border-2 border-gray-400 p-3 rounded-md `}
      />
      <Button
        title='Add todo'
        onPress={handleAddTodo}
      />
      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View 
            style={tw` flex-row flex justify-between px-12 py-3 border-b `}
            >
              <Text 
                          style={tw` max-w-[60%] `}
              >{item.text}</Text>
              <TouchableOpacity onPress={() => handleRemoveTodo(item.id) } >
                <Text style={tw` text-red-500 `} >remove</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

export default ReducerTodo