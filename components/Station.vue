<template>
  <div class="container">
    <div class="station-wrap">
      <div class="station-update"><span>*每隔15秒自動更新</span></div>
      <div class="station" v-if="stationDirection">
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in goStopsFirst"
            :key="index"
          >
            <div class="station-time">{{ checkStopStatus(stop) }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in goStopsSecond"
            :key="index"
          >
            <div class="station-time">{{ checkStopStatus(stop) }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
      </div>
      <div class="station" v-else>
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in backStopsFirst"
            :key="index"
          >
            <div class="station-time">{{ checkStopStatus(stop) }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in backStopsSecond"
            :key="index"
          >
            <div class="station-time">{{ checkStopStatus(stop) }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      goStops: [],
      backStops: [],
      go: [],
      back: [],
    };
  },
  computed: {
    ...mapState("modules/bus", {
      stationSelect: (state) => state.select,
      stopStatus: (state) => state.stopStatus,
      routeId: (state) => state.routeId,
      stationRoute: (state) => state.stationRoute,
      stationName: (state) => state.stationName,
      stationInfo: (state) => state.stationInfo,
      stationDirection: (state) => state.direction,
    }),
    goStopsFirst() {
      return this.go.slice(0, Math.round(this.go.length / 2));
    },
    goStopsSecond() {
      return this.go.slice(Math.round(this.go.length / 2));
    },
    backStopsFirst() {
      return this.back.slice(0, Math.round(this.back.length / 2));
    },
    backStopsSecond() {
      return this.back.slice(Math.round(this.back.length / 2));
    },
  },
  methods: {
    filterStops() {
      this.stationName.forEach((item) => {
        if (item.RouteID === this.routeId && !item.Direction)
          this.goStops = item.Stops;
        if (item.RouteID === this.routeId && item.Direction)
          this.backStops = item.Stops;
      });
      this.sortStation();
    },
    sortStation() {
      this.go = this.stationInfo.filter(
        (item) => item.RouteID === this.routeId && !item.Direction
      );
      let goArr = this.goStops.map((item) => item.StopUID);
      this.go.sort(
        (a, b) => goArr.indexOf(a.StopUID) - goArr.indexOf(b.StopUID)
      );
      this.back = this.stationInfo.filter(
        (item) => item.RouteID === this.routeId && item.Direction
      );
      let backArr = this.backStops.map((item) => item.StopUID);
      this.back.sort(
        (a, b) => backArr.indexOf(a.StopUID) - backArr.indexOf(b.StopUID)
      );
    },
    checkStopStatus({ EstimateTime, StopStatus }) {
      if (StopStatus) {
        if (StopStatus === 1) {
          return "尚未發車";
        } else if (StopStatus === 2) {
          return "交管不停靠";
        } else if (StopStatus === 3) {
          return "末班車已過";
        } else {
          return "今日未營運";
        }
      }

      if (EstimateTime) {
        const minute = EstimateTime > 60 ? Math.floor(EstimateTime / 60) : 0;
        const sec = parseInt(EstimateTime - minute * 60);
        if (EstimateTime < 60) return "進站中";
        let time = sec > 60 ? `${minute}分 : ${sec}秒` : `${sec}秒`;
        return time;
      }
      return "離站中";
    },
    updateTime(time) {},
  },
  watch: {
    routeId() {
      this.filterStops();
    },
  },
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
    width: calc(50% -15px);
    margin-right: 15px;

    .station-item {
      display: flex;
      margin-bottom: 15px;
      font-size: 16px;

      .station-time {
        text-align: center;
        border: 2px solid #0d0b0c;
        border-radius: 5px;
        width: 160px;
        padding: 10px 15px;
      }

      .station-name {
        text-align: center;
        width: 160px;
        align-self: center;
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