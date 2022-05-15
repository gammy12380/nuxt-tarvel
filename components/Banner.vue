<template>
  <div class="banner-container">
    <div class="banner-wrap" v-if="!bannerImg.backNone">
      <div class="banner" :class="bannerImg">
        <div class="search-container">
          <div class="banner-title" v-if="!bannerImg.backNone">
            <h2>
              <img
                src="@/assets/imgs/welcome_to_taiwan.svg"
                alt="welcome_to_taiwan"
              />
            </h2>
            <span>台北、台中、台南、屏東、宜蘭……遊遍台灣</span>
          </div>
          <div class="search-wrap">
            <input
              type="text"
              placeholder="搜尋關鍵字"
              v-model="search.content"
            />
            <div class="search-type">
              <select name="searchType" id="searchType" v-model="search.type">
                <option selected disabled>類別</option>
                <option v-for="(type, index) in select.type" :key="index">
                  {{ type }}
                </option>
              </select>
              <select
                name="searchCounty"
                id="searchCounty"
                v-model="search.county"
              >
                <option selected disabled>不分縣市</option>
                <option
                  selected
                  v-for="(county, index) in select.countys"
                  :key="index"
                  :value="county.en"
                >
                  {{ county.county }}
                </option>
              </select>
              <button @click="searchHandler">
                <img src="@/assets/imgs/search.svg" alt="searchBtn" />
                <span class="mobile-submit">送出</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-wrap banner-bus" v-else>
      <div class="search-wrap-bus">
        <div class="search-type">
          <select name="searchType" id="searchType" v-model="bus.city">
            <option selected disabled>選擇縣市</option>
            <option
              selected
              v-for="(county, index) in select.countys"
              :key="index"
              :value="county.en"
            >
              {{ county.county }}
            </option>
          </select>
          <select name="searchCounty" id="searchCounty" v-model="bus.route">
            <option selected disabled>選擇路線</option>
            <option v-for="Route in cityRoute" :key="Route.id">
              {{ Route.Zh_tw }}
            </option>
          </select>
          <button @click="searchRouteName">
            <img src="@/assets/imgs/search.svg" alt="searchBtn" />
            <span class="mobile-submit">送出</span>
          </button>
        </div>
        <div class="search-bus-route" v-if="this.routeStatus.sub">
          <select name="searchRoute" id="searchRoute" v-model="bus.subRoute">
            <option selected disabled>請選擇分線</option>
            <option v-for="(busRoute, index) in route" :key="index">
              {{ busRoute }}
            </option>
          </select>
        </div>
        <div class="bus-station" v-if="this.routeStatus.station">
          <div
            class="station"
            :class="{ 'station-active': stationDirection }"
            @click="updateDirection(0)"
          >
            往{{ end }}
          </div>
          <div
            class="station"
            :class="{ 'station-active': !stationDirection }"
            @click="updateDirection(1)"
          >
            往{{ start }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { ADD_SEARCHTYPE } from "../store/mutations-type";
import {
  UPDATE_SELECT,
  UPDATE_DIRECTION,
  UPDATE_SEARCHINFO,
  FILLTER_STATION,
} from "../store/modules/mutation-type";
export default {
  name: "Banner",
  data() {
    return {
      bannerImg: {
        bannerIndex: this.$route.path === "/" || this.$route.path === "/search",
        bannerDelicacy: this.$route.path === "/delicacy",
        backNone: this.$route.path === "/attractions",
      },
      search: {
        type: "類別",
        county: "不分縣市",
        content: "",
      },
      routeStatus: {
        sub: false,
        station: false,
      },
      bus: {
        city: "選擇縣市",
        route: "選擇路線",
        subRoute: "請選擇分線",
      },
      route: [],
      select: {
        type: ["景點", "活動", "餐廳", "住宿"],
        countys: [
          { county: "臺北市", en: "Taipei" },
          { county: "新北市", en: "NewTaipei" },
          { county: "桃園市", en: "Taoyuan" },
          { county: "台中市", en: "Taichung" },
          { county: "台南市", en: "Tainan" },
          { county: "高雄市", en: "Kaohsiung" },
          { county: "基隆市", en: "Keelung" },
          { county: "新竹市", en: "Hsinchu" },
          { county: "新竹縣", en: "HsinchuCounty" },
          { county: "苗栗縣", en: "MiaoliCounty" },
          { county: "彰化縣", en: "ChanghuaCounty" },
          { county: "南投縣", en: "NantouCounty" },
          { county: "雲林縣", en: "YunlinCounty" },
          { county: "嘉義縣", en: "ChiayiCounty" },
          { county: "嘉義市", en: "Chiayi" },
          { county: "屏東縣", en: "PingtungCounty" },
          { county: "宜蘭縣", en: "YilanCounty" },
          { county: "花蓮縣", en: "HualienCounty" },
          { county: "台東縣", en: "TaitungCounty" },
          { county: "金門縣", en: "KinmenCounty" },
          { county: "澎湖縣", en: "PenghuCounty" },
          { county: "連江縣", en: "LienchiangCounty" },
        ],
      },
    };
  },
  computed: {
    ...mapState("modules/bus", {
      stationDirection: (state) => state.direction,
      cityRoute: (state) => state.cityRoute,
      stationSelect: (state) => state.select,
      subRoute: (state) => state.subRoute,
      start: (state) => state.start,
      end: (state) => state.end,
      stationRoute: (state) => state.stationRoute,
    }),
  },
  methods: {
    ...mapMutations({
      addSearchType: ADD_SEARCHTYPE,
      addCity: "modules/bus/ADD_CITY",
      upadateSelect: `modules/bus/${UPDATE_SELECT}`,
      filterStation: `modules/bus/${FILLTER_STATION}`,
      updateDirection: `modules/bus/${UPDATE_DIRECTION}`,
      updateSearchInfo: `modules/bus/${UPDATE_SEARCHINFO}`,
    }),
    ...mapActions({
      searchScenicSpot: "searchScenicSpot",
      searchActivity: "searchActivity",
      searchHotel: "searchHotel",
      searchRestaurant: "searchRestaurant",
      searchScenicSpotContent: "searchScenicSpotContent",
      searchActivityContent: "searchActivityContent",
      searchHotelContent: "searchHotelContent",
      searchRestaurantContent: "searchRestaurantContent",
      searchScenicSpotCounty: "searchScenicSpotCounty",
      searchActivityCounty: "searchActivityCounty",
      searchHotelCounty: "searchHotelCounty",
      searchRestaurantCounty: "searchRestaurantCounty",
      getCityRoute: "modules/bus/getCityRoute",
      getStopOfRoute: "modules/bus/getStopOfRoute",
      getEstimatedTimeOfArrival: "modules/bus/getEstimatedTimeOfArrival",
      getRoute: "modules/bus/getRoute",
    }),
    searchHandler() {
      if (this.search.content !== "") {
        this.addSearchType(this.search);
        if (this.search.type !== "類別" && this.search.county !== "不分縣市") {
          this.checkSearch("all");
          this.$router.push("/search");
          return;
        } else if (this.search.county !== "不分縣市") {
          this.checkSearch();
          this.$router.push("/search");
          return;
        } else if (this.search.type !== "類別") {
          this.checkSearch("無縣市");
          this.$router.push("/search");
          return;
        }
        this.searchScenicSpotContent();
        this.$router.push("/search");
      } else if (
        this.search.content === "" &&
        this.search.type !== "類別" &&
        this.search.county !== "不分縣市"
      ) {
        this.addSearchType(this.search);
        this.checkSearch("無內容");
        this.$router.push("/search");
      } else {
        return alert("請選擇要搜尋的景點和縣市");
      }
    },
    checkSearch(searchParam) {
      switch (this.search.type) {
        case "景點":
          if (searchParam === "all") this.searchScenicSpotCounty();
          if (searchParam === "無縣市") this.searchScenicSpotContent();
          if (searchParam === "無內容") this.searchScenicSpot();
          break;
        case "活動":
          if (searchParam === "all") this.searchActivityCounty();
          if (searchParam === "無縣市") this.searchActivityContent();
          if (searchParam === "無內容") this.searchActivity();
          break;
        case "餐廳":
          if (searchParam === "all") this.searchRestaurantCounty();
          if (searchParam === "無縣市") this.searchRestaurantContent();
          if (searchParam === "無內容") this.searchRestaurant();
          break;
        case "住宿":
          if (searchParam === "all") this.searchHotelCounty();
          if (searchParam === "無縣市") this.searchHotelContent();
          if (searchParam === "無內容") this.searchHotel();
          break;
        default:
          this.searchScenicSpotCounty();
          break;
      }
    },
    getBusRoute() {
      this.addCity(this.bus.city);
      this.getCityRoute();
    },
    updateRouteName() {
      this.upadateSelect(this.bus);
    },
    async searchRouteName() {
      if (this.bus.city === "" || this.bus.route === "")
        return alert("請選擇縣市和路線");
      this.updateSearchInfo();
      await Promise.all([
        this.getStopOfRoute(),
        this.getEstimatedTimeOfArrival(),
        this.getRoute(),
      ]);
      this.checkSubRoute();
    },
    checkSubRoute() {
      if (this.stationRoute.length === 0)
        return alert("搜尋不到你要的公車資料");
      if (this.stationRoute.length > 1) {
        this.filterRoute();
        this.routeStatus.sub = true;
        this.routeStatus.station = false;
      } else {
        this.filterRoute();
        this.filterStation();
        this.routeStatus.sub = false;
        this.routeStatus.station = true;
      }
    },
    filterRoute() {
      this.route = this.stationRoute.map((item) => {
        return item.RouteName.Zh_tw;
      });
    },
    showStation() {
      this.routeStatus.station = true;
      this.filterStation();
    },
  },

  watch: {
    "bus.city"() {
      this.bus.route = "選擇路線";
      this.getBusRoute();
    },
    "bus.route"() {
      this.updateRouteName();
    },
    "bus.subRoute"() {
      this.updateRouteName();
      this.showStation();
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin borderbox() {
  border-radius: 8px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
}

.banner-container {
  @include Center;
}

.banner-wrap,
.search-container {
  @include Center;
  flex-direction: column;
  font-family: "Noto Sans TC";
}

.banner-wrap {
  width: 1200px;
  position: relative;
  padding: 30px;
  margin-bottom: 30px;
  background: #fff;

  &::before,
  &::after {
    content: "";
    display: block;
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 50px;
    background: #0d0b0c;
    opacity: 0.3;
    filter: blur(4px);
  }

  &::before {
    left: 10px;
    transform: rotate(-5deg);
  }

  &::after {
    right: 10px;
    transform: rotate(5deg);
  }
}

.banner-bus {
  padding-bottom: 0;
}

.banner {
  @include Center;
  width: 100%;
  height: 490px;
}

.bannerIndex {
  background: url("@/assets/imgs/Banner_Taiwan.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.bannerDelicacy {
  background: url("@/assets/imgs/Banner_Food.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.backNone {
  background: none;
  height: auto;
}

.banner-title {
  margin: 15px 0;
}

.search-container {
  @include Center;
  flex-direction: column;

  span {
    width: 100%;
    color: #fff;
    text-align: start;
  }

  .search-wrap {
    width: 100%;

    input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      font-size: 16px;
      padding: 8.5px 24px;
      line-height: 16px;
      outline: none;
      border: none;
      @include borderbox;
    }
  }
}

.mobile-submit {
  display: none;
}

.search-type {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  select {
    @include borderbox;
    width: 219px;
    height: 40px;
    margin: 15px 0;
    outline: none;
    border: none;
    font-size: 16px;
    padding: 8.5px 24px;

    &:focus {
      box-shadow: 0px 2px 4px #ff1d6c;
    }
  }

  select:nth-of-type(1),
  select:nth-of-type(2) {
    margin-right: 8px;
  }

  button {
    @include Center;
    background: #ff1d6c;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    padding: 0;
    border: none;
    line-height: 24px;
    cursor: pointer;

    svg {
      @include fillup;
    }
  }
}

.search-bus-route {
  width: 100%;

  select {
    @include borderbox;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    font-size: 16px;
    margin-bottom: 15px;
    padding: 8.5px 24px;

    &:focus {
      box-shadow: 0px 2px 4px #ff1d6c;
    }
  }
}

.bus-station {
  display: flex;
  justify-content: space-around;

  .station {
    width: 250px;
    text-align: center;
    margin-top: 15px;
    padding-bottom: 10px;
    font-size: 18px;
    cursor: pointer;

    &:nth-of-type(1) {
      margin-right: 30px;
    }
  }
}

.station-active {
  border-bottom: 4px solid #ff1d6c;
  font-weight: bold;
}

@media screen and (max-width: 1199px) {
  .banner-wrap {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .banner-wrap {
    .banner {
      width: 100%;
      height: 100%;
      background: none;
    }

    .banner-title {
      display: none;
    }
  }
}

@media screen and (max-width: 575px) {
  .banner-wrap {
    background: #fff;
    margin: 15px 0 30px;
    padding: 15px;

    &::before,
    &::after {
      content: "";
      display: block;
      z-index: -1;
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 50px;
      background: #0d0b0c;
      opacity: 0.3;
      filter: blur(4px);
    }

    &::before {
      left: 10px;
      transform: rotate(-5deg);
    }

    &::after {
      right: 10px;
      transform: rotate(5deg);
    }

    .banner {
      width: 100%;
      height: 100%;
      background: none;

      .search-container {
        flex: 1;

        #searchType,
        #searchCounty {
          box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
          width: auto;
          flex: 1;

          &:focus {
            box-shadow: 0px 2px 4px #ff1d6c;
          }
        }

        input {
          display: none;
        }

        button {
          .mobile-submit {
            display: block;
            font-size: 14px;
          }

          img {
            display: none;
          }
        }
      }
    }

    .banner-title {
      display: none;
    }
  }
  .banner-bus {
    margin: 15px 0 30px;
    .search-wrap-bus {
      width: 100%;
      .search-type {
        display: flex;
        flex-wrap: wrap;
        #searchType,
        #searchCounty {
          flex: 1 1 auto;
          width: 1%;
          min-width: 0;
        }
      }
      .bus-station {
        width: 100%;
        .station {
          margin-right: 0;
          width: auto;
          flex-grow: 1;
          &:nth-of-type(1) {
            margin-right: 0 !important;
          }
        }
      }
    }
  }
}
</style>