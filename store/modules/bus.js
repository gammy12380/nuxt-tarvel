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
        start: '',
        end: '',
        stationDirection: [],
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
            state.stationDirection = payload.data
            state.start = payload.data[0].DepartureStopNameZh
            state.end = payload.data[0].DestinationStopNameZh
        },
        ADD_STATIONNAME(state, payload) {
            state.stationName = payload.data
        },
        ADD_STATIONINFO(state, payload) {
            state.stationInfo = payload.data
        },
    },
    actions: {
        getCityRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}?%24top=30&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_CITYROUTE', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteName({ commit, state, dispatch, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_STATIONNAME', res)
                dispatch('getRouteInfo')
                dispatch('getRouteStartEnd')
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteInfo({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_STATIONINFO', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRouteStartEnd({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24top=30&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_STATIONSTARTEND', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    getters: {
        getStart(state) {
            return state.start
        },
        getEnd(state) {
            return state.end
        },
    }
}