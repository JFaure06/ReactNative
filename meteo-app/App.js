import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import { meteo } from './models/meteoModel';
import { app } from './models/appModel';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/NavigationService';


//Generation du Redux Store
const store = init({
  models: { meteo, app },
});

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
