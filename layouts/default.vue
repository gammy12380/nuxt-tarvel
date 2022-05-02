<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import "normalize.css/normalize.css";
export default {
  created(){
    this.$router.push('/')
  }
};
</script>
<style lang="scss">
body {
  background: #f6f7fb;
}
</style>