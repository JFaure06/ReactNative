import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import ProfilScreen from '../screens/ProfilScreen';
import AddCityScreen from '../screens/AddCityScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, Feather } from '@expo/vector-icons';

const AppStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <Feather name="home" size={30} color="#000000" />
                )
            },
        },
        Add: {
            screen: AddCityScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <FontAwesome name="plus" size={30} color="#000000" />
                )
            },
        },
        Profil: {
            screen: ProfilScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <FontAwesome name="user" size={30} color="#000000" />
                )
            },
        },
    });

const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
