import { requestGet, groupRequestCity } from '../utils/requestApi';
import NavigationService from '../navigation/NavigationService';

export const app = {
    state: {
        name: '',
        informations: {},
        cities: ['Antibes', 'Valence', 'Paris', 'Monaco', 'La Ciotat', 'Tokyo'],
    },
    reducers: {
        setName(state, { name }) {
            return { ...state, name };
        },
        setInformation(state, informations) {
            return { ...state, informations };
        },
        setCities(state, {cities}) {
            return { ...state, cities };
        },
        addCityAndInfos(state, {cities, informations}) {
            return {
                ...state,
                cities,
                informations
            };
        }
    },
    effects: (dispatch) => ({
        async getMeteoInformations(_, state) {
            const {app: { cities }} = state;
            const responses = await groupRequestCity('weather', cities);
            if (responses) {
                const infoTemp = {};
                responses.forEach( async (res, i) => {
                    infoTemp[cities[i]] = res;
                });
                this.setInformation(infoTemp);
            }
        },
        async addCity(payload, rootState) {
            const cityTemp = rootState.app.cities.slice();
            cityTemp.push(payload.nameCity);
            // Request to get infos from new city
            const response = await requestGet('weather', `q=${payload.nameCity}&units=metric`);
            if (response) {
                const newInfos = JSON.parse(JSON.stringify(rootState.app.informations));
                newInfos[payload.nameCity] = response;
                this.addCityAndInfos({cities: cityTemp, informations: newInfos });
                NavigationService.navigate("Home");
            }
        }
    }),
};