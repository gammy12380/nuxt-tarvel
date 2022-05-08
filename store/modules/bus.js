import axios from "axios"
export default {
    namespaced: true,
    state: () => ({
        select: {
            city: '',
            route: '',
            subRoute: '',
        },
        routeId: '',
        cityRoute: [],
        route: [],
        stationName: [],
        stationInfo: [],
        start: '',
        end: '',
        direction: true,
        stationRoute: [],
    }),
    mutations: {
        UPDATE_SELECT(state, { route, subRoute }) {
            state.select.route = route
            state.select.subRoute = subRoute
        },
        UPDATE_DIRECTION(state, payload) {
            payload === 0 ? state.direction = true : state.direction = false
        },
        ADD_CITY(state, payload) {
            state.select.city = payload
        },
        ADD_CITYROUTE(state, payload) {
            state.route = payload.data
            state.cityRoute = payload.data.map((item) => {
                const busInfo = item.RouteName;
                busInfo.id = item.RouteUID;
                state.routeId = item.RouteID;
                return busInfo;
            });
        },
        ADD_STATIONSTARTEND(state, payload) {
            state.stationRoute = payload.data
        },
        ADD_STATIONNAME(state, payload) {
            state.stationName = payload.data
        },
        ADD_STATIONINFO(state, payload) {
            state.stationInfo = payload.data
        },
        filterStation(state) {
            state.stationRoute.forEach((item, index, arr) => {
                if (arr.length === 1) {
                    state.start = item.DepartureStopNameZh
                    state.end = item.DestinationStopNameZh
                    state.routeId = item.RouteID;
                }
                if (item.RouteName.Zh_tw === state.select.subRoute) {
                    state.start = item.DepartureStopNameZh
                    state.end = item.DestinationStopNameZh
                    state.routeId = item.RouteID;
                }
            });
        },
    },
    actions: {
        getCityRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}?&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_CITYROUTE', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getStopOfRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_STATIONNAME', res)

            })
                .catch(err => {
                    console.log(err);
                });
        },
        getEstimatedTimeOfArrival({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${state.select.city}/${encodeURIComponent(state.select.route)}?%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit('ADD_STATIONINFO', res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.select.city}/${encodeURIComponent(state.select.route)}?&%24format=JSON`, {
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
    }
}