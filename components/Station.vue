<template>
  <div class="container">
    <div class="station-update">
      <span>*每隔15秒自動更新{{ count }}</span>
    </div>
    <div class="station-wrap">
      <h2 v-if="!routeId">請選擇公車路線</h2>
      <div class="station" v-if="stationDirection">
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in goStopsFirst"
            :key="index"
          >
            <div class="station-time" :class="changeStationClass(stop)">
              {{ checkStopStatus(stop) }}
            </div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in goStopsSecond"
            :key="index"
          >
            <div class="station-time" :class="changeStationClass(stop)">
              {{ checkStopStatus(stop) }}
            </div>
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
            <div class="station-time" :class="changeStationClass(stop)">
              {{ checkStopStatus(stop) }}
            </div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div
            class="station-item"
            v-for="(stop, index) in backStopsSecond"
            :key="index"
          >
            <div class="station-time" :class="changeStationClass(stop)">
              {{ checkStopStatus(stop) }}
            </div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      goStops: [],
      backStops: [],
      go: [],
      back: [],
      count: 0,
      timer: null,
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
    ...mapActions({
      getStopOfRoute: "modules/bus/getStopOfRoute",
      getEstimatedTimeOfArrival: "modules/bus/getEstimatedTimeOfArrival",
      getRoute: "modules/bus/getRoute",
    }),
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
        if (!EstimateTime && StopStatus == 1) {
          return "尚未發車";
        } else if (StopStatus === 2) {
          return "交管不停靠";
        } else if (StopStatus === 3) {
          return "末班車已過";
        } else if (StopStatus === 4) {
          return "今日未營運";
        }
      }

      if (EstimateTime) {
        if (EstimateTime < 60) return "進站中";
        let minute = EstimateTime > 60 ? Math.floor(EstimateTime / 60) : 0;
        let sec = parseInt(EstimateTime - minute * 60);
        let time = minute >= 1 ? `${minute}分 : ${sec}秒` : `${sec}秒`;
        return time;
      }
      return "離站中";
    },
    startTimer() {
      this.count = 0;
      this.timer = setInterval(() => {
        this.count++;
      }, 1000);
    },
    changeStationClass({ EstimateTime, StopStatus }) {
      if (StopStatus) {
        if (
          (!EstimateTime && StopStatus == 1) ||
          StopStatus === 2 ||
          StopStatus === 3 ||
          StopStatus === 4
        )
          return ["past"];
      }
      if (EstimateTime && EstimateTime < 60) return ["stop"];
      if (!EstimateTime) return ["leave"];
    },
    async updateData() {
      await Promise.all([
        this.getStopOfRoute(),
        this.getEstimatedTimeOfArrival(),
        this.getRoute(),
      ]);
      this.filterStops();
    },
  },
  watch: {
    stationRoute() {
      if (this.stationRoute.length === 0) {
        clearInterval(this.timer);
        this.count = 0;
      } else {
        clearInterval(this.timer);
        this.startTimer();
      }
    },
    routeId() {
      this.filterStops();
    },
    count(val) {
      if (val === 15) {
        clearInterval(this.timer);
        this.updateData();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 50px 0;
  flex-direction: column;
  @include Center;
  .station-update {
    width: 1200px;
    color: #ff1d6c;
    font-size: 16px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    margin-right: 15px;
    span {
      margin: 0;
      font-size: 20px;
      letter-spacing: 1.6px;
    }
  }
  .station-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1200px;
    min-height: 600px;
    padding: 50px 75px;
    background: #fff;
    position: relative;
    h2 {
      color: #acacac;
      font-size: 24px;
    }
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
  }
}

.station {
  display: flex;
  flex-wrap: wrap;

  .station-col {
    flex: 0 0 auto;
    margin-right: 15px;

    .station-item {
      display: flex;
      margin-bottom: 15px;
      font-size: 16px;

      .station-time {
        text-align: center;
        border: 3px solid #0d0b0c;
        border-radius: 10px;
        width: 160px;
        padding: 10px 15px;
      }
      .stop {
        border: none;
        background: #ff1d6c;
        color: #fff;
      }
      .leave {
        border: none;
        background: #ffb72c;
        color: #fff;
      }
      .past {
        border-color: #acacac;
        color: #acacac;
      }
      .station-name {
        text-align: center;
        width: 160px;
        align-self: center;
      }
    }
  }
}
@media screen and (max-width: 1199px) {
  .station-update,
  .station-wrap {
    width: 100% !important;
  }
}
@media screen and (max-width: 991px) {
  .station-wrap {
    .station-col {
      width: calc(50% - 15px);
      flex: 1 1 auto;
    }
  }
}
@media screen and (max-width: 768px) {
  .station-wrap {
    width: 100% !important;
    padding: 15px !important;
  }

  .station {
    display: flex;
    flex-wrap: wrap;

    .station-col {
      flex: 0 0 auto;

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
@media screen and (max-width: 575px) {
  .container {
    margin-top: 30px;
    h2 {
      font-size: 20px !important;
    }
  }
  .station-update {
    span {
      font-size: 16px !important;
    }
  }
  .station-col {
    width: 100% !important;
    margin-right: 0 !important;
    .station-item {
      width: 100%;

      .station-name {
        width: fit-content !important;
      }
      .station-time {
        width: 120px !important;
        margin-right: 15px;
      }
    }
  }
}
</style>