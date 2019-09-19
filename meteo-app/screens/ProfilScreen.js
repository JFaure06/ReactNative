import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, TextInput, Button } from 'react-native';

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
    input: {
        width: '50%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
};

const ProfilScreen = props => {

    async function handleSubmit() {
        if (name !== '') {
            const action = {
                type: 'app/addCity',
                payload: { name }
            };
            dispatch(action);
        }
    }

    const [name, setName] = useState('');   

    return (
    <View style={styleSheet.container}>
        <Text >Prénom</Text>
        <TextInput
                style={styleSheet.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                onPress={handleSubmit}
                title="OK"
                color="#841584"
            />
    </View>
)};

ProfilScreen.propTypes = {};

export default connect(state => state.app) (ProfilScreen);