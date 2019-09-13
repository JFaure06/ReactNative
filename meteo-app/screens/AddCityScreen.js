import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

const AddCityScreen = props => {
    return (
    <View style={styleSheet.container}>
        <Text >! weather ? !</Text>
    </View>
)};

AddCityScreen.propTypes = {};

export default AddCityScreen;