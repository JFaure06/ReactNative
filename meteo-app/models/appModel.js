import { requestGet, groupRequestCity } from '../utils/requestApi';
import NavigationService from '../navigation/NavigationService';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const app = {
    state: {
        name: '',
        informations: {},
        cities: ['Antibes', 'Orlando', 'Paris', 'Monaco', 'La Ciotat', 'Tokyo'],
    },
    reducers: {
        setName(state, { name }) {
            return { ...state, name };
        },
        setInformation(state, informations) {
            return { ...state, informations };
        },
        setCities(state, { cities }) {
            return { ...state, cities };
        },
        addCityAndInfos(state, { cities, informations }) {
            return {
                ...state,
                cities,
                informations
            };
        },
    },
    effects: {
        async getMeteoInformations(_, state) {
            const { app: { cities } } = state;
            let responseGps;
            const infoTemp = {};
            //search informations on gps city
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                setError('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            if (location) {
                const { coords: { latitude, longitude } } = location;

                responseGps = await requestGet('weather', `lat=${latitude}&lon=${longitude}&units=metric`);
            }
            //searh information on city saved
            const responses = await groupRequestCity('weather', cities);
            if (responses) {
                responses.forEach(async (res, i) => {
                    infoTemp[cities[i]] = res;
                });
            }
            const cityTemp = state.app.cities.slice();
            //update the state
            if (responseGps){
                cityTemp.unshift(responseGps.name);
                infoTemp[responseGps.name]= responseGps;
            }
            this.addCityAndInfos({informations: infoTemp, cities: cityTemp});

        },
        async addCity(payload, rootState) {
            const cityTemp = rootState.app.cities.slice();
            cityTemp.push(payload.nameCity);
            // Request to get infos from new city
            const response = await requestGet('weather', `q=${payload.nameCity}&units=metric`);
            if (response) {
                const newInfos = JSON.parse(JSON.stringify(rootState.app.informations));
                newInfos[payload.nameCity] = response;
                this.addCityAndInfos({ cities: cityTemp, informations: newInfos });
                NavigationService.navigate("Home");
            }
        },
    },
};