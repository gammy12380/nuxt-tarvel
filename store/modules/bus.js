import axios from "axios"
import { UPDATE_SELECT, UPDATE_DIRECTION, UPDATE_SEARCHINFO, ADD_CITY, ADD_CITYROUTE, ADD_STATIONSTART, ADD_STATIONNAME, ADD_STATIONINFO, FILLTER_STATION } from "./mutation-type"
export default {
    namespaced: true,
    state: () => ({
        select: {
            city: '',
            route: '',
            subRoute: '',
        },
        searchInfo: {
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
        [UPDATE_SELECT](state, { route, subRoute }) {
            state.select.route = route
            state.select.subRoute = subRoute
        },
        [UPDATE_DIRECTION](state, payload) {
            payload === 0 ? state.direction = true : state.direction = false
        },
        [UPDATE_SEARCHINFO](state) {
            state.searchInfo.city = state.select.city
            state.searchInfo.route = state.select.route
            state.searchInfo.subRoute = state.select.subRoute
        },
        [ADD_CITY](state, payload) {
            state.select.city = payload
        },
        [ADD_CITYROUTE](state, payload) {
            state.route = payload.data
            state.cityRoute = payload.data.map((item) => {
                const busInfo = item.RouteName;
                busInfo.id = item.RouteUID;
                return busInfo;
            });
        },
        [ADD_STATIONSTART](state, payload) {
            state.stationRoute = payload.data
        },
        [ADD_STATIONNAME](state, payload) {
            state.stationName = payload.data
        },
        [ADD_STATIONINFO](state, payload) {
            state.stationInfo = payload.data
        },
        [FILLTER_STATION](state) {
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
                commit(ADD_CITYROUTE, res)
                console.log(rootState.header)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getStopOfRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${state.searchInfo.city}/${encodeURIComponent(state.searchInfo.route)}?%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit(ADD_STATIONNAME, res)

            })
                .catch(err => {
                    console.log(err);
                });
        },
        getEstimatedTimeOfArrival({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${state.searchInfo.city}/${encodeURIComponent(state.searchInfo.route)}?%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit(ADD_STATIONINFO, res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
        getRoute({ commit, state, rootState }) {
            return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${state.searchInfo.city}/${encodeURIComponent(state.searchInfo.route)}?&%24format=JSON`, {
                headers: rootState.header
            }).then(res => {
                commit(ADD_STATIONSTART, res)
            })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    getters: {
    }
}