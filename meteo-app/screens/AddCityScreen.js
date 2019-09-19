import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Dimensions, Image, ScrollView, SafeAreaView } from 'react-native';
import { Button, Card, ListItem, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons';

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
        marginHorizontal: 20,
    },
    imageStyle: {
        width: 500,
        height: 200,
        padding: 5,
    },
    cardStyle: {
        width: 20,
        height: 80,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
    }
};

const AddCityScreen = props => {

    async function handleSubmit() {
        if (nameCity !== '') {
            const action = {
                type: 'meteo/addCity',
                payload: { nameCity }
            };
            dispatch(action);
        }
    }

    /* function removeCity() {
        const action = {
            type: 'meteo/removeCity',
            payload: { index }
        }
        dispatch(action);
    } */

    const [nameCity, setNameCity] = useState('');
    const { dispatch, meteo: { informations, cities, index } } = props;

    return (
        <SafeAreaView style={styleSheet.container}>
            <ScrollView>
                <Image
                    style={styleSheet.imageStyle}
                    source={{ uri: 'http://triciaplayfish.files.wordpress.com/2012/02/12-02-22-rc_blog_weatherwk-header.jpg' }}
                />
                <Text >Add a City</Text>
                <TextInput
                    style={styleSheet.input}
                    onChangeText={(text) => setNameCity(text)}
                    value={nameCity}
                />
                <Button
                    onPress={handleSubmit}
                    icon={
                        <Icon
                            name="check-circle"
                            size={15}
                            color="#841584"
                        />
                    }
                    iconLeft
                    title="OK"
                />

                <Card style={styleSheet.cardStyle} title="favorite cities :">
                    {
                        Object.keys(informations).length > 0 ? cities.map(nameCity => {
                            const infoCity = informations[nameCity];
                            return (
                                <ListItem
                                    key={infoCity.id}
                                    title={nameCity}
                                    bottomDivider
                                />
                            );
                        }) : <Text>Loading...</Text>
                    }
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
};

AddCityScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(({ meteo }) => ({ meteo }))(AddCityScreen);