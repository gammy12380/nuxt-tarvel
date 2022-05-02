import { TOGGLE_MODAL, ADD_HEADER, ADD_SCENICSPOT, ADD_ACTIVITY, ADD_HOTEL, ADD_RESTAURANT, ADD_SEARCHTYPE, ADD_SEARCH } from "./mutations-type";
export default {
    [ADD_HEADER](state, payload) {
        state.header = payload
    },
    [ADD_SCENICSPOT](state, payload) {
        state.scenicSpot = payload.data
    },
    [ADD_ACTIVITY](state, payload) {
        state.activity = payload.data
    },
    [ADD_HOTEL](state, payload) {
        state.hotel = payload.data
    },
    [ADD_RESTAURANT](state, payload) {
        state.restaurant = payload.data
    },
    [ADD_SEARCHTYPE](state, { type, county }) {
        state.searchCounty = county;
        state.searchType = type;
    },
    [ADD_SEARCH](state, payload) {
        state.searchData = payload.data;
    },
    [TOGGLE_MODAL](state, payload) {
        state.modalData = payload;
        state.modalSwitch = !state.modalSwitch;
    },


}