import axios from "axios";
import { getAuthorizationHeader } from '../utils/getHeader';
import { ADD_SCENICSPOT, ADD_ACTIVITY, ADD_HOTEL, ADD_RESTAURANT, ADD_SEARCH } from "./mutations-type";
export default {
    getHeader({ commit }) {
        commit('addHeader', getAuthorizationHeader())
    },
    getScenicSpot({ commit, state }) {
        return axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=Picture%2FPictureUrl1%20ne%20null&%24top=100&%24format=JSON', {
            headers: state.header
        }).then(res => {
            commit(ADD_SCENICSPOT, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    getActivity({ commit, state }) {
        return axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON', {
            headers: state.header
        }).then(res => {
            console.log('addActivity')
            console.log(commit)
            commit(ADD_ACTIVITY, res)
        })
            .catch(err => {
                console.log('okokok')

                console.log(err);
            });
    },
    getHotel({ commit, state }) {
        return axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?%24filter=Picture%2FPictureUrl1%20ne%20null&%24top=100&%24format=JSON', {
            headers: state.header
        }).then(res => {
            commit(ADD_HOTEL, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    getRestaurant({ commit, state }) {
        return axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=Picture%2FPictureUrl1%20ne%20null&%24top=100&%24format=JSON', {
            headers: state.header
        }).then(res => {
            commit(ADD_RESTAURANT, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    searchScenicSpot({ commit, state }) {
        return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${state.searchCounty}?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON`, {
            headers: state.header
        }).then(res => {
            commit(ADD_SEARCH, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    searchActivity({ commit, state }) {
        return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${state.searchCounty}?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON`, {
            headers: state.header
        }).then(res => {
            commit(ADD_SEARCH, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    searchHotel({ commit, state }) {
        return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${state.searchCounty}?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON`, {
            headers: state.header
        }).then(res => {
            commit(ADD_SEARCH, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
    searchRestaurant({ commit, state }) {
        return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${state.searchCounty}?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON`, {
            headers: state.header
        }).then(res => {
            commit(ADD_SEARCH, res)
        })
            .catch(err => {
                console.log(err);
            });
    },
}





