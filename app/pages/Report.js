import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function report() {
  return (
    <View>
      <Text>report</Text>
      <Stack.Screen options={{title:'Report'}}/>
    </View>
  )
}