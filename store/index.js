import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import bus from './modules/bus';

Vue.use(Vuex);

export const state = () => ({
    header: null,
    activity: [],
    scenicSpot: [],
    hotel: [],
    restaurant: [],
    modalSwitch: false,
    modalData: null,
    searchData: [],
    searchCounty: null,
    searchType: null,
    searchContent: null,
})

export const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
        modules: {
            bus
        }
    })
}
