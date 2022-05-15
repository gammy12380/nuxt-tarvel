<template>
  <div class="hotActivity-wrap">
    <div class="hotActivity">
      <h3>
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0L0 16.1905H20L10 0Z" fill="#FF1D6C" /></svg
        >熱門活動
      </h3>
      <div class="activity-box">
        <div class="activity" v-for="data in pageData" :key="data.ActivityID">
          <div class="activity-mobile-btn" @click="openModal(data)"></div>
          <div class="activity-img">
            <img
              :src="data.Picture.PictureUrl1"
              :alt="data.Picture.PictureDescription1"
            />
          </div>
          <div class="textBox">
            <h4>{{ data.ActivityName }}</h4>
            <div class="text-content">
              <p>
                {{ checkTextLength(data.Description) }}
              </p>
            </div>
            <div class="activity-btn-wrap">
              <div class="position-wrap">
                <img src="@/assets/imgs/position.svg" alt="position_icon" />
                <span>{{ checkLocation(data.Location) }}</span>
              </div>
              <button class="activity-btn" @click="openModal(data)">
                活動詳情
              </button>
            </div>
          </div>
        </div>
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
    <Modal v-if="this.$store.state.modalSwitch" />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { TOGGLE_MODAL } from "../store/mutations-type";
export default {
  name: "HotActivity",
  data() {
    return {
      cacthData: null,
      pageData: [],
      pagination: {
        currentPage: 1,
        totalPage: null,
      },
      modalSwitch: false,
    };
  },
  computed: {
    ...mapState(["activity"]),
    minPage() {
      return this.pagination.currentPage * 4 - 3;
    },
    maxPage() {
      return this.pagination.currentPage * 4;
    },
  },
  methods: {
    ...mapMutations({ openModal: TOGGLE_MODAL }),
    initPage() {
      this.cacthData = this.activity;
      this.pagination.totalPage = Math.ceil(this.cacthData.length / 4);
      this.pageData = this.filterData();
      this.filterData();
    },
    filterData() {
      const filterData = this.cacthData.slice(this.minPage, this.maxPage + 1);
      return filterData;
    },
    checkTextLength(text) {
      const maxLengh = 100;
      if (text.length > maxLengh) {
        return text.slice(0, 100).concat("...");
      } else {
        return text;
      }
    },
    checkLocation(text) {
      if (text === "to see the official site") {
        return "未提供地址";
      } else {
        return text;
      }
    },
    toggleNextPage() {
      this.pagination.currentPage += 1;
    },
    togglePrevPage() {
      this.pagination.currentPage -= 1;
    },
  },
  watch: {
    "pagination.currentPage": function () {
      this.pageData = this.filterData();
    },
  },
  created() {
    this.initPage();
  },
};
</script>
<style lang="scss" scoped>
.hotActivity-wrap {
  width: 100%;
  margin: 50px 0;
  @include Center;
}

.hotActivity {
  width: 1200px;
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

.activity-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.activity {
  position: relative;
  background: #fff;
  width: calc(50% - 30px);
  padding: 15px;
  display: flex;
  margin: 15px;

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

  .activity-img {
    width: 187px;
    height: 196px;
    margin-right: 15px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }

  .textBox {
    flex: 1;
    height: 100px;

    h4 {
      margin: 0;
      font-size: 16px;
    }

    p {
      height: 90px;
      line-height: 1.3;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.activity-btn-wrap {
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  .position-wrap {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 25px;
      margin-right: 5px;
    }
  }

  .activity-btn {
    cursor: pointer;
    border: 2px solid #ff1d6c;
    color: #ff1d6c;
    padding: 10px 20px;
    font-weight: bold;
    background: none;
    border-radius: 15px;
    transition: 0.25s ease-in-out;

    &:hover {
      box-shadow: inset 150px 0 0 0 #ff1d6c;
      color: #fff;
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

.activity-mobile-btn {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: none;
}

@media screen and (max-width: 1199px) {
  .hotActivity {
    width: 960px;
  }
}

@media screen and (max-width: 991px) {
  .hotActivity {
    width: 720px;
  }

  .activity-box {
    justify-content: center;
  }

  .activity {
    position: relative;
    background: #fff;
    width: 80%;
  }
}

@media screen and (max-width: 767px) {
  .textBox {
    .text-content {
      height: 120px;

      p {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 575px) {
  .activity {
    width: 100%;
    margin: 15px 30px;

    .activity-btn {
      display: none;
    }

    .activity-mobile-btn {
      display: block;
    }

    .activity-img {
      width: 92px;
      height: 96px;
    }

    .textBox {
      position: relative;

      h4 {
        font-size: 14px;
      }

      .text-content {
        height: auto;
      }

      .activity-btn-wrap {
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>