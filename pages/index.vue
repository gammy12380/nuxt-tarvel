<template>
  <div>
    <Banner />
    <HotCity />
    <HotActivity />
    <HotScenicSpot />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {
      
    };
  },
  methods: {},
  async fetch({ store }) {
    await Promise.all([store.dispatch('getHeader'),store.dispatch('getScenicSpot'), store.dispatch('getActivity')])
  },
};
</script>
