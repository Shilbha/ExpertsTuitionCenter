import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, StatusBar } from 'react-native';
import styles from './index.style'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const credentials = [
    { username: 'Shilbha', password: '1708' },
    { username: 'Nishanth', password: '0720' },
    { username: 'Lakshni', password: '2905' },
  ];

const handleLogin = () => {
    const matchedCredential = credentials.find(cred => cred.username === username && cred.password === password);
    if (matchedCredential) {
     
      console.log('Login successful!');
      alert('Login successful!');
    } else {
     
      console.log('Login failed. Please check your credentials.');
      alert('Login failed. Please check your credentials.');
    }
  };


  return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StatusBar barStyle="light-content" backgroundColor={"#000"} />
        <ImageBackground
          source={require('../assets/experts.jpg')} 
          style={styles.imageBackground}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.headTitle}>Welcome back</Text>
            <Text style={styles.subTitle}>Login to your account</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={text => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};



export default LoginPage;
