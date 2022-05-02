<template>
  <div>
    <footer>
      <h3>Taiwan Tourguidde &copy; Code:Gammy／Design:KT</h3>
    </footer>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 25px auto;
    font-size: 12px;
    color: #acacac;
    font-family: "Roboto", sans-serif;
  }
}

@media screen and (max-width: 1199px) {
}
</style>
