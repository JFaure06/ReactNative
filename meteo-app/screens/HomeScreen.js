import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, Image, } from 'react-native';



const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 500,
        height: 200,
    }
};

const HomeScreen = props => {
    const { name } = props;

    return (

        <View style={styleSheet.container}>
            <Image
                style={styleSheet.imageStyle}
                source={{ uri: 'https://media.istockphoto.com/vectors/weather-vector-banner-vector-id692422886' }}
            />
            <Text style={styleSheet.textStyle}>{name}</Text>
        </View>
    )
};

HomeScreen.propTypes = {};

export default connect(state => state.app)(HomeScreen);
