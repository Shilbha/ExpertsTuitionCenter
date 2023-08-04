import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function task() {
  return (
    <View>
      <Text>task</Text>
      <Stack.Screen options={{title:'Task'}}/>
    </View>
  )
}