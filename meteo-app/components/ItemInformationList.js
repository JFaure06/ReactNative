import React, { } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import * as Permissions from 'expo-permissions';

const styleSheet = {
    textStyle: {
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    /* item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }, */
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    cardStyle: {
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'blue',
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
    errorStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    }
};

const ItemInformationList = props => {
    const { data } = props;
    return (
        <View>
            <Card style={styleSheet.cardStyle}>
                <Text style={styleSheet.title}>{`${data.name}`}</Text>
                <Text style={styleSheet.textStyle2}>{`Weather: ${data.weather[0].description}`}</Text>
                <Text style={styleSheet.textStyle2}>{`Temperature: ${data.main.temp}°C`}</Text>
                <Text style={styleSheet.textStyle2}>{`Wind: ${data.wind.speed}Km/h`}</Text>
            </Card>
        </View>
    );
};

export default ItemInformationList;