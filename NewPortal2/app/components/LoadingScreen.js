import React, {useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { AppLoading } from 'expo';

import SampleData from '../sample'

export default function LoadingScreen(props) {

    useEffect(() => checkLocalData(), []);

    function checkLocalData(){
        AsyncStorage.getItem('quotes', (err, data) => {
            if (data === null){
                AsyncStorage.setItem('quotes', JSON.stringify(SampleData.quotes));//save the initial data in Async

                props.navigation.navigate('App');
            }else{
                props.navigation.navigate('App'); 
            }
        });
    }

    return <AppLoading/>;
}