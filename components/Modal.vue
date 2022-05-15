<template>
  <div class="modal-wrap">
    <div class="modal">
      <div id="modal-close" @click="openModal">
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_14657_9671)">
            <path
              d="M4 10C4 5.58172 7.58172 2 12 2H41C45.4183 2 49 5.58172 49 10V39C49 43.4183 45.4183 47 41 47H12C7.58172 47 4 43.4183 4 39V10Z"
              fill="#FF1D6C"
            />
            <mask
              id="path-2-outside-1_14657_9671"
              maskUnits="userSpaceOnUse"
              x="19.5813"
              y="17.5811"
              width="14"
              height="14"
              fill="black"
            >
              <rect
                fill="white"
                x="19.5813"
                y="17.5811"
                width="14"
                height="14"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.1258 20.2882C32.5163 19.8976 32.5163 19.2645 32.1258 18.8739C31.7353 18.4834 31.1021 18.4834 30.7116 18.8739L26.5 23.0855L22.2884 18.8739C21.8979 18.4834 21.2647 18.4834 20.8742 18.8739C20.4837 19.2645 20.4837 19.8976 20.8742 20.2882L25.0858 24.4998L20.8742 28.7113C20.4837 29.1019 20.4837 29.735 20.8742 30.1256C21.2647 30.5161 21.8979 30.5161 22.2884 30.1256L26.5 25.914L30.7116 30.1256C31.1021 30.5161 31.7353 30.5161 32.1258 30.1256C32.5163 29.735 32.5163 29.1019 32.1258 28.7113L27.9142 24.4998L32.1258 20.2882Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.1258 20.2882C32.5163 19.8976 32.5163 19.2645 32.1258 18.8739C31.7353 18.4834 31.1021 18.4834 30.7116 18.8739L26.5 23.0855L22.2884 18.8739C21.8979 18.4834 21.2647 18.4834 20.8742 18.8739C20.4837 19.2645 20.4837 19.8976 20.8742 20.2882L25.0858 24.4998L20.8742 28.7113C20.4837 29.1019 20.4837 29.735 20.8742 30.1256C21.2647 30.5161 21.8979 30.5161 22.2884 30.1256L26.5 25.914L30.7116 30.1256C31.1021 30.5161 31.7353 30.5161 32.1258 30.1256C32.5163 29.735 32.5163 29.1019 32.1258 28.7113L27.9142 24.4998L32.1258 20.2882Z"
              fill="white"
            />
            <path
              d="M32.1258 18.8739L31.4187 19.5811L31.4187 19.5811L32.1258 18.8739ZM32.1258 20.2882L31.4187 19.5811V19.5811L32.1258 20.2882ZM30.7116 18.8739L31.4187 19.5811L31.4187 19.5811L30.7116 18.8739ZM26.5 23.0855L25.7929 23.7926C25.9804 23.9802 26.2348 24.0855 26.5 24.0855C26.7652 24.0855 27.0196 23.9802 27.2071 23.7926L26.5 23.0855ZM22.2884 18.8739L22.9955 18.1668V18.1668L22.2884 18.8739ZM20.8742 18.8739L21.5813 19.5811L21.5813 19.5811L20.8742 18.8739ZM20.8742 20.2882L20.1671 20.9953H20.1671L20.8742 20.2882ZM25.0858 24.4998L25.7929 25.2069C25.9804 25.0193 26.0858 24.765 26.0858 24.4998C26.0858 24.2345 25.9804 23.9802 25.7929 23.7926L25.0858 24.4998ZM20.8742 28.7113L21.5813 29.4185L21.5813 29.4185L20.8742 28.7113ZM20.8742 30.1256L21.5813 29.4185L21.5813 29.4184L20.8742 30.1256ZM22.2884 30.1256L21.5813 29.4185H21.5813L22.2884 30.1256ZM26.5 25.914L27.2071 25.2069C27.0196 25.0193 26.7652 24.914 26.5 24.914C26.2348 24.914 25.9804 25.0193 25.7929 25.2069L26.5 25.914ZM30.7116 30.1256L31.4187 29.4185L31.4187 29.4185L30.7116 30.1256ZM32.1258 30.1256L31.4187 29.4184L31.4187 29.4185L32.1258 30.1256ZM32.1258 28.7113L31.4187 29.4185L31.4187 29.4185L32.1258 28.7113ZM27.9142 24.4998L27.2071 23.7926C27.0196 23.9802 26.9142 24.2345 26.9142 24.4998C26.9142 24.765 27.0196 25.0193 27.2071 25.2069L27.9142 24.4998ZM31.4187 19.5811V19.5811L32.8329 20.9953C33.614 20.2142 33.614 18.9479 32.8329 18.1668L31.4187 19.5811ZM31.4187 19.5811H31.4187L32.8329 18.1668C32.0519 17.3858 30.7855 17.3858 30.0045 18.1668L31.4187 19.5811ZM27.2071 23.7926L31.4187 19.5811L30.0045 18.1668L25.7929 22.3784L27.2071 23.7926ZM21.5813 19.5811L25.7929 23.7926L27.2071 22.3784L22.9955 18.1668L21.5813 19.5811ZM21.5813 19.5811V19.5811L22.9955 18.1668C22.2145 17.3858 20.9481 17.3858 20.1671 18.1668L21.5813 19.5811ZM21.5813 19.5811H21.5813L20.1671 18.1668C19.386 18.9479 19.386 20.2142 20.1671 20.9953L21.5813 19.5811ZM25.7929 23.7926L21.5813 19.5811L20.1671 20.9953L24.3787 25.2069L25.7929 23.7926ZM21.5813 29.4185L25.7929 25.2069L24.3787 23.7926L20.1671 28.0042L21.5813 29.4185ZM21.5813 29.4184V29.4185L20.1671 28.0042C19.386 28.7853 19.386 30.0516 20.1671 30.8327L21.5813 29.4184ZM21.5813 29.4185H21.5813L20.1671 30.8327C20.9481 31.6137 22.2145 31.6137 22.9955 30.8327L21.5813 29.4185ZM25.7929 25.2069L21.5813 29.4185L22.9955 30.8327L27.2071 26.6211L25.7929 25.2069ZM31.4187 29.4185L27.2071 25.2069L25.7929 26.6211L30.0045 30.8327L31.4187 29.4185ZM31.4187 29.4185H31.4187L30.0045 30.8327C30.7855 31.6137 32.0519 31.6137 32.8329 30.8327L31.4187 29.4185ZM31.4187 29.4185V29.4184L32.8329 30.8327C33.614 30.0516 33.614 28.7853 32.8329 28.0042L31.4187 29.4185ZM27.2071 25.2069L31.4187 29.4185L32.8329 28.0042L28.6213 23.7926L27.2071 25.2069ZM31.4187 19.5811L27.2071 23.7926L28.6213 25.2069L32.8329 20.9953L31.4187 19.5811Z"
              fill="white"
              mask="url(#path-2-outside-1_14657_9671)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_14657_9671"
              x="0"
              y="0"
              width="53"
              height="53"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0509804 0 0 0 0 0.0431373 0 0 0 0 0.0470588 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_14657_9671"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_14657_9671"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <img
        :src="pictureCycle(modalData.Picture)"
        :alt="picDescriptionCycle(modalData.Picture)"
        class="modalImg"
      />
      <div class="modal-text">
        <div class="btn-wrap">
          <button class="prev-btn" @click="changePicture(-1)"></button>
          <button class="next-btn" @click="changePicture(1)"></button>
        </div>
        <h3>{{ modalData.ActivityName }}</h3>
        <p>{{ modalData.Description }}</p>
        <div class="modal-info">
          <div class="info">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C15.2383 0 19.5 4.2617 19.5 9.5C19.5 14.7383 15.2383 19 10 19C4.7617 19 0.5 14.7383 0.5 9.5C0.5 4.2617 4.7617 0 10 0ZM10 1.425C5.54735 1.425 1.925 5.04735 1.925 9.5C1.925 13.9527 5.54735 17.575 10 17.575C14.4527 17.575 18.075 13.9527 18.075 9.5C18.075 5.04735 14.4527 1.425 10 1.425ZM9.67814 4.84063C10.0724 4.84063 10.3906 5.15983 10.3906 5.55313V9.75403L13.6254 11.6825C13.9626 11.8849 14.0738 12.3219 13.8724 12.6601C13.7384 12.8833 13.5019 13.0078 13.2596 13.0078C13.1352 13.0078 13.0098 12.9755 12.8948 12.908L9.31334 10.7715C9.09864 10.6423 8.96564 10.4095 8.96564 10.1587V5.55313C8.96564 5.15983 9.28484 4.84063 9.67814 4.84063Z"
                fill="#FF1D6C"
              />
            </svg>

            <span>{{ modalData.EndTime.slice(0, 10) }}</span>
          </div>
          <div class="info">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9218 0.767578C17.8943 0.767578 19.4991 2.35651 19.4991 4.30865L19.5 6.60102C19.5 6.776 19.4302 6.94567 19.3056 7.06939C19.1819 7.194 19.0131 7.26381 18.8372 7.26381C18.1417 7.26381 17.5761 7.81879 17.5761 8.50102C17.5761 9.18325 18.1417 9.73823 18.8372 9.73823C19.2031 9.73823 19.5 10.0352 19.5 10.401V12.6916C19.5 14.6438 17.8952 16.2327 15.9227 16.2327H4.0773C2.10484 16.2327 0.5 14.6438 0.5 12.6916V10.401C0.5 10.0352 0.79693 9.73823 1.16279 9.73823C1.85828 9.73823 2.42386 9.18325 2.42386 8.50102C2.42386 7.83823 1.88126 7.33804 1.16279 7.33804C0.98693 7.33804 0.81814 7.26823 0.694419 7.14362C0.569814 7.0199 0.5 6.85023 0.5 6.67525L0.500884 4.30865C0.500884 2.35651 2.10572 0.767578 4.07819 0.767578H15.9218ZM15.9218 2.09316H12.2968L12.2973 3.79096C12.2973 4.15682 12.0004 4.45375 11.6345 4.45375C11.2687 4.45375 10.9717 4.15682 10.9717 3.79096L10.9712 2.09316H4.07819C2.83656 2.09316 1.82647 3.08735 1.82647 4.30865L1.82558 6.092C2.94526 6.36683 3.74944 7.32656 3.74944 8.50102C3.74944 9.68697 2.93112 10.6873 1.82558 10.9781V12.6916C1.82558 13.9129 2.83567 14.9071 4.0773 14.9071H10.9712L10.9717 13.5917C10.9717 13.225 11.2687 12.9289 11.6345 12.9289C12.0004 12.9289 12.2973 13.225 12.2973 13.5917L12.2968 14.9071H15.9227C17.1643 14.9071 18.1744 13.9129 18.1744 12.6916V10.9781C17.0689 10.6873 16.2506 9.68697 16.2506 8.50102C16.2506 7.31418 17.068 6.31469 18.1744 6.02395L18.1735 4.30865C18.1735 3.08735 17.1634 2.09316 15.9218 2.09316ZM11.6345 5.63202C12.0004 5.63202 12.2973 5.92895 12.2973 6.29481V10.5552C12.2973 10.9211 12.0004 11.218 11.6345 11.218C11.2687 11.218 10.9717 10.9211 10.9717 10.5552V6.29481C10.9717 5.92895 11.2687 5.63202 11.6345 5.63202Z"
                fill="#FF1D6C"
              />
            </svg>

            <span>{{ checkCharge(modalData.Charge) }}</span>
          </div>
          <div class="info">
            <img src="@/assets/imgs/position.svg" alt="position_icon" />
            <span>{{ modalData.Location }}</span>
          </div>
          <div class="info">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.68649 2.83726C2.68834 2.83726 2.642 2.88546 2.58361 2.94292C2.35933 3.16072 1.895 3.61393 1.89032 4.56207C1.88295 5.88834 2.75507 8.35089 6.95443 12.5494C11.1343 16.7274 13.5931 17.6098 14.9222 17.6098H14.9416C15.8898 17.6051 16.342 17.1399 16.5608 16.9165C16.6275 16.8479 16.6813 16.7979 16.7192 16.7664C17.6423 15.8377 18.115 15.1463 18.1104 14.7033C18.1039 14.251 17.5413 13.7162 16.7637 12.9766C16.5163 12.7412 16.2475 12.4854 15.9639 12.2018C15.2289 11.4687 14.8647 11.5938 14.064 11.8756C12.9564 12.2639 11.4365 12.7922 9.07496 10.4297C6.70975 8.06636 7.23896 6.54823 7.62636 5.44069C7.90626 4.63992 8.03416 4.27475 7.29827 3.53886C7.01004 3.25155 6.75146 2.97907 6.51327 2.72883C5.77831 1.95586 5.24818 1.39699 4.79868 1.3905H4.79126C4.34732 1.3905 3.65778 1.86503 2.68186 2.84097C2.68464 2.83819 2.68649 2.83726 2.68649 2.83726ZM14.9231 19C12.6135 19 9.60231 17.1612 5.97201 13.5327C2.32782 9.8894 0.486253 6.86891 0.500077 4.55465C0.508497 3.02541 1.31018 2.24225 1.6114 1.94845C1.62715 1.92898 1.68091 1.87615 1.69944 1.85762C3.02848 0.527638 3.9247 -0.00991463 4.81629 0.000138223C5.85153 0.0141826 6.58834 0.789 7.52071 1.7705C7.75148 2.01332 8.00172 2.27747 8.28069 2.55551C9.63382 3.90866 9.24827 5.0125 8.93872 5.89853C8.60136 6.8652 8.30942 7.69934 10.0574 9.44731C11.8072 11.1953 12.6413 10.9033 13.6043 10.5632C14.4912 10.2536 15.5923 9.86623 16.9472 11.2194C17.2216 11.4937 17.482 11.7412 17.7221 11.9701C18.7082 12.9071 19.4867 13.6476 19.4998 14.6857C19.5108 15.5708 18.9732 16.4726 17.6461 17.8007L17.0585 17.4022L17.5552 17.8878C17.2614 18.189 16.4792 18.9917 14.9491 19H14.9231Z"
                fill="#FF1D6C"
              />
            </svg>

            <span>{{ modalData.Phone ? modalData.Phone : "未提供電話" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { TOGGLE_MODAL } from "../store/mutations-type";
export default {
  name: "Modal",
  data() {
    return {
      pictureIndex: 1,
      pictureLength: null,
    };
  },
  computed: {
    ...mapState(["modalData"]),
  },
  methods: {
    ...mapMutations({ openModal: TOGGLE_MODAL }),
    checkCharge(charge) {
      if (charge && charge !== "0") {
        return charge;
      } else {
        return "免費";
      }
    },
    pictureCycle(pic) {
      let pictures = this.modalData.Picture;
      this.pictureLength = Object.keys(pictures).length;
      return pic[`PictureUrl${this.pictureIndex}`];
    },
    picDescriptionCycle(pic) {
      return pic[`PictureDescription${this.pictureIndex}`];
    },
    changePicture(direction) {
      this.pictureIndex = this.pictureIndex + direction;
      if (this.pictureIndex < 1) this.pictureIndex = 3;
      if (this.pictureIndex > this.pictureLength / 2) this.pictureIndex = 1;
    },
  },
};
</script>
<style lang="scss" scoped>
#modal-close {
  cursor: pointer;
  position: absolute;
  right: -40px;
  top: 0;
  svg {
    width: 36px;
    height: auto;
  }
}
.modal-wrap {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #d2d2d2bf;
  backdrop-filter: blur(28px);
}
.modalImg {
  width: 100%;
  height: 400px;
  vertical-align: middle;
}
.modal {
  position: absolute;
  @include positionCenter;
  @include Center;
  flex-direction: column;
  width: 650px;
  max-height: 750px;
  padding: 15px;
  background: #fff;
  box-shadow: 0px 0px 1px #0d0b0c7e;
  h3 {
    font-size: 20px;
    margin: 0;
    letter-spacing: 1.3px;
  }
  p {
    font-size: 14px;
    height: 150px;
    overflow-y: scroll;
    letter-spacing: 1.3px;
    line-height: 1.3;
    &::-webkit-scrollbar {
      width: 4px;
      height: 8px;
      border-radius: 10px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(transparent, rgb(219, 212, 212));
    }
  }
}

.btn-wrap {
  display: flex;
  justify-content: flex-end;
  button {
    cursor: pointer;
    position: relative;
    background: #0d0b0c;
    width: 25px;
    height: 25px;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
  }
  .prev-btn {
    &::before {
      content: "";
      display: block;
      position: absolute;
      @include positionCenter;
      border-right: 8px solid #fff;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }
  }
  .next-btn {
    margin-left: 15px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      @include positionCenter;
      border-left: 8px solid #fff;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }
  }
  .disabled-btn {
    background: #aaa;
  }
}
.modal-info {
  display: flex;
  flex-wrap: wrap;
  .info {
    width: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    img,
    svg {
      width: 20px;
      height: 25px;
      margin-right: 15px;
    }
  }
}

@media screen and (max-width: 767px) {
  .modal {
    width: 85%;
    height: 80%;
    img {
      height: 330px;
    }
  }
}
@media screen and (max-width: 575px) {
  #modal-close {
    right: 0;
    top: -40px;
  }
  .modal {
    width: 90%;
    height: auto;
    justify-content: flex-start;
    img {
      height: 195px;
    }
    .modal-info {
      flex-direction: column;
    }
  }
}
</style>