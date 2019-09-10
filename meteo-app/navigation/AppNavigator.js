import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//const AppStack = createStackNavigator({ Home: HomeScreen });
const AppStack = createBottomTabNavigator({ Home: HomeScreen, SignIn: IntroFormScreen, Welcome: IntroScreen });
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

//export default createAppContainer(AppStack);
