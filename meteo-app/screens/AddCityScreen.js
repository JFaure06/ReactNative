import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, Dimensions, FlatList } from 'react-native';
import ItemList from '../components/itemList';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
};

const AddCityScreen = props => {

    async function handleSubmit() {
        if (nameCity !== '') {
            const action = {
                type: 'app/addCity',
                payload: { nameCity }
            };
            dispatch(action);
        }
    }

    const [nameCity, setNameCity] = useState('');
    const { dispatch, cities } = props;

    return (
        <View style={styleSheet.container}>
            <Text >Add a City</Text>
            <TextInput
                style={styleSheet.input}
                onChangeText={(text) => setNameCity(text)}
                value={nameCity}
            />
            <Button
                onPress={handleSubmit}
                title="OK"
                color="#841584"
            />
        </View>
    )
};

AddCityScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(state => state.app)(AddCityScreen);