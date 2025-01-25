
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput, Image, Platform, Text, View, SafeAreaView, TouchableOpacity, Button, StatusBar, FlatList } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useState } from 'react';
import Todoo from '@/components/Todo';
import DataFetching from '@/components/DataFetching';
import Meals from '@/components/Meals';

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProp {
  item: Todo;
}

export default function TabTwoScreen() {
  // const { landscape } = useDeviceOrientation();
  const landscape: string = useDeviceOrientation();

  const [text, setText] = useState<string>('');
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText('');
    }
  };

  const handleSubmit = () => {
    addTodo();
  }

  const removeTodo = (id: string) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const renderTodo = ({ item }: TodoItemProp) => {
    return (
      <TouchableOpacity onLongPress={() => removeTodo(item.id)} >
        <Text>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      {/* <View style={{
        backgroundColor: "skyblue",
        width: "100%",
        height: landscape ? "100%" : "30%",
      }} >

      </View> 
      <TouchableOpacity>

      <Image 
      
      source={require('../../assets/images/react-logo.png')} />
      </TouchableOpacity>
      <Text numberOfLines={1} >Hello Gabby Hello Gabby Hello Gabbby Hello Gabby Hello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello GabbyHello Gabby Hello Gabby Hello Gabbby Hello Gabby </Text>
      <Button title='Submit' color='orange' onPress={() => alert("hello Gabby")}  /> */}

        {/* <Text style={{color: 'red', fontSize: "22px"}} >Todo List</Text> */}
        {/* <Text>Todo List</Text>
        <TextInput
          onChangeText={setText}
          placeholder='Add new task'
          onSubmitEditing={handleSubmit}
          returnKeyType='done'
          value={text} />

        <Button title='Add task' onPress={addTodo} />

        <FlatList
          data={todo}
          keyExtractor={item => item.id}
          renderItem={renderTodo}
        /> */}

        {/* <Todoo/> */}
        {/* <DataFetching/> */}
        <Meals/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    gap: "12px",
    // paddingTop: `${Platform.OS} === "andriod" ? ${StatusBar.currentHeight} : "0"`,
  },
});