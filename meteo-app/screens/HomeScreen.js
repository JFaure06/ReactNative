import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Image, FlatList, } from 'react-native';
import ItemList from '../components/ItemInformationList';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundImage: 'https://st3.depositphotos.com/6741230/18851/v/1600/depositphotos_188518964-stock-illustration-clouds-sun-weather-vector-cloudy.jpg',
    },
    textStyle: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    textStyle2: {
        color: 'black',
        fontSize: 18,
        fontStyle: 'italic',
    },
    imageStyle: {
        width: 500,
        height: 200,
    },
    cardStyle: {
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'blue',
    }
};

const HomeScreen = props => {

    useEffect(() => {
        dispatch({ type: 'app/getMeteoInformations' });
    }, []);

    const { dispatch, app: { informations, cities } } = props;

    return (
        <View style={styleSheet.container}>
        <Image
            style={styleSheet.imageStyle}
            source={{ uri: 'https://media.istockphoto.com/vectors/weather-vector-banner-vector-id692422886' }}
        />
        {
            Object.keys(informations).length === cities.length ? (
            <FlatList
                data={cities}
                renderItem={({ item }) => <ItemList data={informations[item]} />}
                keyExtractor={item => item}
            />
            ) : 
            <Text>Loading...</Text>
        }
        </View>
    );
}

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
};

//export default connect(state => state.app)(HomeScreen);
export default connect(({ app }) => ({ app }))(HomeScreen);