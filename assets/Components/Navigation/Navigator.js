import React from 'react';
import { startClock } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import { Text,View } from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import LoadingScreen from '../Screens/LoadingScreen';
import styles from '../Styles/Styles';

const Stack = createStackNavigator();
const Navigator = () => {
    return (
        <Stack.Navigator style={styles.container}>
            <Stack.Screen name="LogIn" component={LoginScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
        </Stack.Navigator>  
        
    );
};

export default Navigator;