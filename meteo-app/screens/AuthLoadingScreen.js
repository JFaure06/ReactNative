import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { ActivityIndicator, StatusBar, View, AsyncStorage } from 'react-native';

const AuthLoadingScreen = props => {

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        if (userToken){
            const action = {
                type:'app/setName',
                payload: {name: userToken}
            };
            dispatch(action);
        }
        navigation.navigate(userToken ? 'App' : 'Auth');
    };

    useEffect(() => {
        _bootstrapAsync();
    }, []);

    const { dispatch, navigation } = props;

    return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
};

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(AuthLoadingScreen);