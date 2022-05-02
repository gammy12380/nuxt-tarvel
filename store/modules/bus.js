import axios from "axios"
export default {
    namespaced: true,
    state: () => ({
        select: {
            city: '',
            route: ''
        },
        cityRoute: [],
        route: [],
        stationName: [],
        stationInfo: [],
        station: {
            start: '',
            end: ''
        },
    }),
    mutations: {
        UPDATE_SELECT(state, payload) {
            state.select.route = payload
        },
        ADD_CITY(state, payload) {
            state.select.city = payload
        },
        ADD_CITYROUTE(state, payload) {
            state.route = payload.data
            state.cityRoute = payload.data.map((item) => {
                const busInfo = item.RouteName;
                busInfo.id = item.RouteUID;
                return busInfo;
            });
        },
        ADD_STATIONSTARTEND(state, payload) {
            state.station.start = payload.data
            state.station.end = payload.data
        },
        ADD_STATIONNAME(state, payload) {
            state.stationName = payload.data
        },
        ADD_STATIONINFO(state, payload) {
            state.stationInfo = payload.data
        },
    },
    actions: {
        getCityRoute({ commit, state }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}?%24top=30&%24format=JSON`, {
                headers: state.header
            }).then(res => {
                commit('ADD_CITYROUTE', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteName({ commit, state, dispatch }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: state.header
            }).then(res => {
                commit('ADD_STATIONNAME', res)
                dispatch('getRouteInfo')
                dispatch('getRouteStartEnd')
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteInfo({ commit, state }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: state.header
            }).then(res => {
                commit('ADD_STATIONINFO', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteStartEnd({ commit, state }) {
            console.log(12)
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: state.header
            }).then(res => {
                commit('ADD_STATIONSTARTEND', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    getters: {
    }
}