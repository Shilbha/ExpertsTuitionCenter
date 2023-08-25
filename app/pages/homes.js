import { View, Text, StatusBar,Image, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import {Stack} from 'expo-router';
// import styles from '../index.style';
import Profile from './profile';
const user = {
  username: 'Uma',
};

const Home = () =>  {
  

  return (
    <SafeAreaView style={{flex:1}}>
      <Stack.Screen 
        options={{
          
          headerShown:false,
          
          
        }}
        
        />
       
       <View style={styles.container}>
     
      <View style={styles.profileContainer}>
        <Profile user={user} />
      </View>
    </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0, 
 
  },
  profileContainer: {
    height: 270,    

  },
});

export default Home;
