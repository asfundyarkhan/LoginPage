import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import styles from '../Styles/Styles';
import React,{useState} from 'react';

const GetUsers = () => {
    return (
        <>
        {Users.map((user) =>(
            <View key={user.id} style={styles.container}>
            <Text style={styles.emailInputContainer}>
                {user.firstName}
            </Text>
            <Text style={styles.emailInputContainer}>
                {user.lastName}
            </Text>
            </View>
        ))}
        </>
    );
};

export default GetUsers ;