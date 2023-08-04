import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function attendance() {
  return (
    <View>
      <Text>attendance</Text>
      <Stack.Screen options={{title:'Attendance'}}/>
    </View>
  )
}