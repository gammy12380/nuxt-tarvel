<template>
  <div class="container">
    <div class="station-wrap">
      <div class="station-update"><span>*每隔15秒自動更新</span></div>
      <div class="station">
        <div class="station-col">
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
        </div>
        <div class="station-col">
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
          <div class="station-item">
            <div class="station-time">未發車</div>
            <div class="station-name">台北車站</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  dta() {
    return {};
  },
  computed: {
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 100px 0;
  @include Center;
  .station-wrap {
    @include Center;
    flex-direction: column;
    width: 1200px;
    padding: 50px 75px;
    background: #fff;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: block;
      z-index: -1;
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 30px;
      background: #0d0b0c;
      opacity: 0.3;
      filter: blur(4px);
    }
    &::before {
      left: 10px;
      transform: rotate(-7deg);
    }
    &::after {
      right: 10px;
      transform: rotate(7deg);
    }
    .station-update {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      color: #ff1d6c;
    }
  }
}

.station {
  display: flex;
  flex-wrap: wrap;
  .station-col {
    flex: 0 0 auto;
    width: 50%;
    .station-item {
      display: flex;
      margin-bottom: 15px;
      .station-time {
        text-align: center;
        border: 2px solid #0d0b0c;
        border-radius: 5px;
        width: 145px;
        padding: 10px 15px;
      }
      .station-name {
        text-align: center;
        width: 145px;
        padding: 10px 15px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .station-wrap {
    padding: 15px;
  }
  .station {
    display: flex;
    flex-wrap: wrap;
    .station-col {
      flex: 0 0 auto;
      width: 100%;
      .station-item {
        width: 100%;
        .station-name,
        .station-time {
          width: 50%;
        }
      }
    }
  }
}
</style>