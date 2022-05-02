<template>
  <div class="hotScenicspot">
    <h3>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="20"
          height="20"
          transform="matrix(-1 0 0 1 20 0)"
          fill="#FFB72C"
        />
      </svg>
      熱門景點
    </h3>
    <div class="scenicspot-wrap">
      <div
        class="scenicspot"
        v-for="rest in restaurantInfo"
        :key="rest.ScenicSpotID"
        @click="search"
      >
        <img
          :src="rest.Picture.PictureUrl1"
          :alt="rest.Picture.PictureDescription1"
        />
        <h4>{{ rest.ScenicSpotName }}</h4>
        <div class="position-wrap">
          <img src="@/assets/imgs/position.svg" alt="position_icon" />
          <span>{{ rest.Address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { ADD_SEARCHTYPE } from "../store/mutations-type";
export default {
  name: "HotScenicSpot",
  data() {
    return {
      catchData: null,
      restaurantInfo: [],
    };
  },
  computed: {
    ...mapState(["scenicSpot"]),
  },
  methods: {
    ...mapActions({
      searchScenicSpot: "searchScenicSpot",
    }),
    ...mapMutations({ searchType: ADD_SEARCHTYPE }),
    initScenicSpot() {
      this.catchData = this.scenicSpot;
      this.fillterData();
    },
    fillterData() {
      this.catchData.forEach((item, index) => {
        if (index < 10) this.restaurantInfo.push(item);
      });
    },
    search() {
      const data = { type: "景點", county: "TaitungCounty" };
      this.searchType(data);
      this.searchScenicSpot();
      this.$router.push("/search");
    },
  },
  created() {
    this.initScenicSpot();
  },
};
</script>
<style lang="scss" scoped>
.hotScenicspot {
  width: 100%;
  margin: 50px 0;
  padding: 15px;
  @include Center;
  flex-direction: column;
  h3 {
    font-size: 20px;
    line-height: 20px;
    display: flex;
    svg {
      margin-right: 10px;
    }
  }
}
.scenicspot-wrap {
  width: 1140px;
  @include Center;
  flex-wrap: wrap;
}
.scenicspot {
  height: 275px;
  cursor: pointer;
  position: relative;
  background: #fff;
  width: calc(20% - 20px);
  margin: 20px 10px;
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
    transform: rotate(-9deg);
  }
  &::after {
    right: 10px;
    transform: rotate(9deg);
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 160px;
  }
  h4 {
    margin: 10px 10px 0;
    height: 42px;
    font-size: 14px;
  }
  .position-wrap {
    margin: 0 10px 15px;
    img {
      width: 10px;
      height: 15px;
      margin-right: 5px;
    }
    span {
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 1199px) {
  .scenicspot-wrap {
    width: 960px;
  }
  .scenicspot {
    height: 275px;
    cursor: pointer;
    position: relative;
    background: #fff;
    width: calc(25% - 20px);
    margin: 20px 10px;
  }
}
@media screen and (max-width: 991px) {
  .scenicspot-wrap {
    width: 720px;
  }
  .scenicspot {
    width: calc(33.3% - 20px);
  }
}
@media screen and (max-width: 767px) {
  .scenicspot-wrap {
    width: 80%;
  }
  .scenicspot {
    width: calc(50% - 20px);
  }
}
@media screen and (max-width: 575px) {
  .scenicspot-wrap {
    width: 100%;
  }
}
</style>