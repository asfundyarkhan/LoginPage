import React from 'react';
import { Text, View ,Button} from 'react-native';
import styles from '../Styles/Styles';
import * as firebase from 'firebase';
import {useRoute} from '@react-navigation/native';

function User({ userId }) {
    useEffect(() => {
      const subscriber = firestore()
        .collection('Users')
        .doc(userId)
        .onSnapshot(documentSnapshot => {
          console.log('User data: ', documentSnapshot.data());
          console.table('User data: ', documentSnapshot.data());
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
    }, [userId]);
  }


const HomeScreen =({navigation} ) => {
    const user = firestore().collection('Users').doc(userId).get();
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