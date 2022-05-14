<template>
  <div>
    <Banner />
    <Station />
  </div>
</template>
<script>
export default {
  name: "attractions",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  fetch({ store }) {
    store.dispatch("getHeader");
  },
};
</script>