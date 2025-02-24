import { View, Text, Button } from 'react-native'
import React, { useReducer } from 'react'
import tw from 'twrnc'

interface State {
  count: number;
}

type Action = {type: "increment"} | {type: "decrement"} | {type: "reset"};

const initialState : State = { count: 0 };

function reducer(state : State , action : Action ) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unhandled action type");
  }
}

const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text
        style={tw` p-3 font-bold text-2xl `}
      >ReducerComp</Text>

      <Button
        title='Decrement'
        color="red"
        onPress={() => dispatch({ type: "decrement" })}
      />
      <Text>Count: {state.count} </Text>
      <Button
        title='Increment'
        color="white"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title='Reset'
        color="yellow"
        onPress={() => dispatch({ type: "reset" })}
      />
    </View>
  )
}

export default ReducerComp