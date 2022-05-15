<template>
  <div class="hot-search">
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
      {{ this.title }}
    </h3>
    <div class="search-wrap">
      <div class="search" v-for="(data, index) in pageData" :key="index">
        <img
          :src="checkPicture(data.Picture)"
          :alt="checkPictureDescription1(data.Picture)"
        />
        <h4>{{ checkSearchName(data) }}</h4>
        <div class="position-wrap">
          <img src="@/assets/imgs/position.svg" alt="position_icon" />
          <span>{{ checkAddress(data.Address) }}</span>
        </div>
      </div>
      <div v-show="this.dataStatus">未搜尋到符合的資料</div>
    </div>
    <div class="pagination">
      <button
        class="prev-btn"
        :class="{ 'disabled-btn': pagination.currentPage === 1 }"
        @click="togglePrevPage"
        :disabled="pagination.currentPage === 1"
      ></button>
      <div class="curpage">
        {{ pagination.currentPage + " / " + pagination.totalPage }}
      </div>
      <button
        class="next-btn"
        :class="{
          'disabled-btn': pagination.currentPage === pagination.totalPage,
        }"
        @click="toggleNextPage"
        :disabled="pagination.currentPage === pagination.totalPage"
      ></button>
    </div>
  </div>
</template>
<script>
import noImg from "../assets/imgs/noImages.png";
import { mapState } from "vuex";
export default {
  data() {
    return {
      dataStatus: false,
      title: "",
      type: "",
      county: "",
      pageData: [],
      catchData: [],
      pagination: {
        currentPage: 1,
        totalPage: null,
      },
    };
  },
  computed: {
    ...mapState(["searchData", "searchType"]),
    minPage() {
      return this.pagination.currentPage * 15 - 14;
    },
    maxPage() {
      return this.pagination.currentPage * 15;
    },
  },
  methods: {
    checkSearchName(data) {
      if (data.ScenicSpotName) {
        return data["ScenicSpotName"];
      } else if (data.ActivityName) {
        return data["ActivityName"];
      } else if (data.HotelName) {
        return data["HotelName"];
      } else if (data.RestaurantName) {
        return data["RestaurantName"];
      } else {
        return "未提供名稱";
      }
    },
    checkPicture(img) {
      if (Object.keys(img).length !== 0) {
        return img.PictureUrl1;
      } else {
        return noImg;
      }
    },
    checkPictureDescription1(img) {
      if (Object.keys(img).length !== 0) {
        return img.PictureDescription1;
      } else {
        return "noImg";
      }
    },
    checkAddress(address) {
      if (address === undefined) {
        return "未提供地址";
      } else {
        return address;
      }
    },
    initPage() {
      this.catchData = this.searchData;
      this.updateData();
    },
    fillterData() {
      const fillterData = this.catchData.slice(this.minPage, this.maxPage + 1);
      return fillterData;
    },
    titleHandler() {
      this.type = this.searchType;
      if (this.searchType === "類別") {
        this.title = "熱門";
      } else {
        this.title = `熱門${this.searchType}`;
      }
    },
    toggleNextPage() {
      this.pagination.currentPage += 1;
    },
    togglePrevPage() {
      this.pagination.currentPage -= 1;
    },
    updateData() {
      if (this.searchData.length > 15) {
        this.pagination.totalPage = Math.ceil(this.searchData.length / 15);
        this.pageData = this.fillterData();
      } else {
        this.pagination.totalPage = 1;
        this.pageData = this.catchData;
      }
    },
  },
  watch: {
    "$store.state.searchType": function () {
      this.titleHandler();
    },
    "$store.state.searchData": function () {
      this.catchData = this.searchData;
      if (this.searchData.length === 0) {
        this.dataStatus = true;
      }
    },
    catchData: function () {
      this.updateData();
    },
    "pagination.currentPage": function () {
      this.updateData();
    },
  },
  created() {
    this.initPage();
    this.titleHandler();
  },
};
</script>
<style lang="scss" scoped>
.hot-search {
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
.search-wrap {
  width: 1200px;
  @include Center;
  flex-wrap: wrap;
}
.search {
  height: 280px;
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
  img {
    width: 100%;
    height: 160px;
  }
  h4 {
    margin: 15px 10px 0;
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

.pagination {
  display: flex;
  align-items: center;
  margin: 50px 0;

  button {
    cursor: pointer;
    position: relative;
    background: #0d0b0c;
    width: 32px;
    height: 32px;
    margin: 0 15px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
  }
  .prev-btn {
    right: 0;
    &::before {
      content: "";
      display: block;
      position: absolute;
      @include positionCenter;
      border-right: 10px solid #fff;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
  .next-btn {
    left: 0;
    &::before {
      content: "";
      display: block;
      position: absolute;
      @include positionCenter;
      border-left: 10px solid #fff;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }
  }
  .disabled-btn {
    background: #aaa;
  }
}

@media screen and (max-width: 1199px) {
  .search-wrap {
    width: 960px;
  }
  .search {
    height: 275px;
    cursor: pointer;
    position: relative;
    background: #fff;
    width: calc(25% - 20px);
    margin: 20px 10px;
  }
}
@media screen and (max-width: 991px) {
  .search-wrap {
    width: 720px;
  }
  .search {
    width: calc(33.3% - 20px);
  }
}
@media screen and (max-width: 767px) {
  .search-wrap {
    width: 80%;
  }
  .search {
    width: calc(50% - 20px);
  }
}
@media screen and (max-width: 575px) {
  .search-wrap {
    width: 100%;
  }
}
</style>