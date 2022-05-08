<template>
  <div class="container">
    <div class="station-wrap">
      <div class="station-update"><span>*每隔15秒自動更新</span></div>
      <div class="station" v-if="stationDirection">
        <div class="station-col">
          <div class="station-item" v-for="(stop, index) in goStopsFirst" :key="index">
            <div class="station-time">{{ 123 }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div class="station-item" v-for="(stop, index) in goStopsSecond" :key="index">
            <div class="station-time">{{ 123 }}</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
      </div>
      <div class="station" v-else>
        <div class="station-col">
          <div class="station-item" v-for="(stop, index) in backStopsFirst" :key="index">
            <div class="station-time">未發車</div>
            <div class="station-name">{{ stop.StopName.Zh_tw }}</div>
          </div>
        </div>
        <div class="station-col">
          <div class="station-item" v-for="(stop, index) in backStopsSecond" :key="index">
            <div class="station-time">未發車</div>
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
      catchStationData: [],
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
      return this.goStops.slice(0, Math.round(this.goStops.length / 2));
    },
    goStopsSecond() {
      return this.goStops.slice(Math.round(this.goStops.length / 2));
    },
    backStopsFirst() {
      return this.backStops.slice(0, Math.round(this.backStops.length / 2));
    },
    backStopsSecond() {
      return this.backStops.slice(Math.round(this.backStops.length / 2));
    },
  },
  methods: {
    filterStops() {
      console.log(1);
      this.stationName.forEach((item) => {
        if (item.RouteID === this.routeId && item.Direction === 0)
          this.goStops = item.Stops;
        if (item.RouteID === this.routeId && item.Direction === 1)
          this.backStops = item.Stops;
      });
      this.sortStation();
    },
    sortStation() {
      this.goStops.forEach(goStop => {
        this.go = this.stationInfo.filter(item => !item.Direction)
        let stationInfoObj = {}
        for (let i = 0; i < this.goStops.length; i++) {
          stationInfoObj[this.stationInfo[i]] = i
        }
        this.go.sort((a, b) => {
          return stationInfoObj[a] - stationInfoObj[b]
        })
      })
      this.backStops.forEach(backStop => {
        this.back = this.stationInfo.filter(item => item.Direction)

      })

      console.log(this.go)
      console.log(this.back)
    },
    checkStopStatus(data) {
    }
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