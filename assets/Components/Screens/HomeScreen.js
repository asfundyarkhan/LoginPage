import React from 'react';
import { Text, View ,Button} from 'react-native';
import styles from '../Styles/Styles';
import * as firebase from 'firebase';
import {useRoute} from '@react-navigation/native';

const HomeScreen =({navigation} ) => {
    return (
        <View style={styles.container}>
         <Text style={styles.ConfirmButton}>
             Home !!!
         </Text>
            <Button styles={styles.signUpButton} title= "Logout" onPress={()=> firebase.auth().signOut()} />
        </View>        
    );
};

export default HomeScreen;