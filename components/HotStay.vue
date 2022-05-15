<template>
  <div class="hotRestaurant">
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
      熱門住宿
    </h3>
    <div class="restaurant-wrap">
      <div
        class="restaurant"
        v-for="h in hotelInfo"
        :key="h.HotelID"
        @click="search"
      >
        <img
          :src="h.Picture.PictureUrl1"
          :alt="h.Picture.PictureDescription1"
        />
        <h4>{{ h.HotelName }}</h4>
        <div class="position-wrap">
          <img src="@/assets/imgs/position.svg" alt="position_icon" />
          <span>{{ h.Address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { ADD_SEARCHTYPE } from "../store/mutations-type";
export default {
  name: "HotStay",
  data() {
    return {
      catchData: null,
      hotelInfo: [],
    };
  },
  computed: {
    ...mapState(["hotel"]),
  },
  methods: {
    ...mapActions({
      searchHotel: "searchHotel",
    }),
    ...mapMutations({ searchType: ADD_SEARCHTYPE }),
    initRestaurant() {
      this.catchData = this.hotel;
      this.fillterData();
    },
    fillterData() {
      this.catchData.forEach((item, index) => {
        if (index < 10) this.hotelInfo.push(item);
      });
    },
    search() {
      const data = { type: "住宿", county: "Taipei" };
      this.searchType(data);
      this.searchHotel();
      this.$router.push("/search");
    },
  },
  created() {
    this.initRestaurant();
  },
};
</script>
<style lang="scss" scoped>
.hotRestaurant {
  width: 100%;
  margin: 50px 0;
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
.restaurant-wrap {
  width: 1200px;
  @include Center;
  flex-wrap: wrap;
}
.restaurant {
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
  .restaurant-wrap {
    width: 960px;
  }
  .restaurant {
    height: 275px;
    cursor: pointer;
    position: relative;
    background: #fff;
    width: calc(25% - 20px);
    margin: 20px 10px;
  }
}
@media screen and (max-width: 991px) {
  .restaurant-wrap {
    width: 720px;
  }
  .restaurant {
    width: calc(33.3% - 20px);
  }
}
@media screen and (max-width: 767px) {
  .restaurant-wrap {
    width: 80%;
  }
  .restaurant {
    width: calc(50% - 20px);
  }
}
@media screen and (max-width: 575px) {
  .restaurant-wrap {
    width: 100%;
  }
}
</style>