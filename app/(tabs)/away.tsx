import { Image, StyleSheet, Platform, View, SafeAreaView, Text, Button, Pressable, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import tw from 'twrnc';

export default function HomeScreen() {

  const fruits = ["apple", "banana", "orange", "watermelon", "pineapple"]

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: 'red' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }
    //   >
        <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Gabby!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Gabby</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          <Text style={tw`text-red-600`} >Hello Gabby</Text>
        </ThemedText>
      </ThemedView>
      
      
    {/* // </ParallaxScrollView> */}

    {/* function handleNewStation(e) {
        const { name, value } = e.target
        setNewStation(prevUser => (
            {
                ...prevUser,
                [name]: value
            }
        ))
    } */}

    <FlatList
    data={fruits}
    renderItem={({item}) => (
      <Text style={tw`text-red-600`} >{item}</Text>
    ) }
    />

    <Button 
    title='Learn more' 
    onPress={() => alert("Pressed Gabby")}
    color="#841584" />

    <Pressable style={tw`bg-white text-center p-4 items-center rounded-md`}  onPress={() => alert("pressed")} >
      <Text style={tw`text-yellow-500 font-bold`} >Press me</Text>
    </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
