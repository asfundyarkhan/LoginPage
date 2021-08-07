import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from '../Styles/Styles';

const LoadingScreen = () => {
    return (
        <View style={styles.mainContainer1}>
            <ActivityIndicator color='green' size='large'/>
        </View>
    );
};

export default LoadingScreen;