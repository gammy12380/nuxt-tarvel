<template>
  <div>
    <div class="headers-wrap"></div>
    <nav class="headers">
      <div class="navBar">
        <nuxt-link to="./">
          <div class="logo">
            <svg
              width="90"
              height="57"
              viewBox="0 0 99 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="99" height="57" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_14977_2123"
                    transform="translate(0 -0.000210526) scale(0.008 0.0138947)"
                  />
                </pattern>
                <image
                  id="image0_14977_2123"
                  width="125"
                  height="72"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="search"
            >
              <g filter="url(#filter0_d_14991_5345)">
                <rect
                  x="4"
                  y="2"
                  width="30"
                  height="30"
                  rx="4"
                  fill="#FF1D6C"
                />
                <path
                  d="M26.5902 23.8006L26.5899 23.8003L24.4894 21.604C25.5988 20.2275 26.267 18.4512 26.267 16.517C26.267 12.1744 22.8923 8.61436 18.7089 8.61436C14.5255 8.61436 11.15 12.1743 11.15 16.517C11.15 20.8596 14.5254 24.4204 18.7089 24.4204C20.3801 24.4204 21.9252 23.8503 23.1759 22.8891L25.2995 25.1079L25.3 25.1084C25.4754 25.291 25.709 25.3858 25.9447 25.3858C26.1801 25.3858 26.4157 25.2916 26.5917 25.1052C26.9374 24.742 26.9353 24.1622 26.5902 23.8006ZM12.9603 16.517C12.9603 13.1713 15.5546 10.4777 18.7089 10.4777C21.8624 10.4777 24.4567 13.1713 24.4567 16.517C24.4567 19.8628 21.8623 22.557 18.7089 22.557C15.5546 22.557 12.9603 19.8628 12.9603 16.517Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.7"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_14991_5345"
                  x="0"
                  y="0"
                  width="38"
                  height="38"
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
                    result="effect1_dropShadow_14991_5345"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_14991_5345"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </nuxt-link>
        <div class="nav-bar">
          <ul>
            <li>
              <nuxt-link to="./">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="nav-icon"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="33"
                    rx="16.5"
                    fill="#FF1D6C"
                  />
                  <path
                    d="M17 12.4706L11.5 21.5294H22.5L17 12.4706Z"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="33"
                    rx="16.5"
                    stroke="#FF1D6C"
                  />
                </svg>
                景點活動
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="./delicacy">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="nav-icon"
                >
                  <rect width="34" height="34" rx="17" fill="#FFB72C" />
                  <rect
                    x="12.5"
                    y="12.5"
                    width="9"
                    height="9"
                    fill="white"
                  /></svg
                >美食住宿
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="./attractions">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="nav-icon"
                >
                  <rect width="34" height="34" rx="17" fill="#007350" />
                  <circle cx="17" cy="17" r="5.5" fill="white" /></svg
                >景點交通
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
.headers-wrap {
  height: 104px;
}

.headers {
  z-index: 99;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 104px;

  background-color: #fff;

  #search {
    display: none;
  }
}

.navBar {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
  padding: 29px 108px 18px;

  ul {
    list-style: none;
    display: flex;

    li:nth-of-type(1) a {
      color: #ff1d6c;
      &::after {
        background: #ff1d6c;
      }
    }
    li:nth-of-type(2) a {
      color: #ffb72c;
      &::after {
        background: #ffb72c;
      }
    }
    li:nth-of-type(3) a {
      color: #007350;
      &::after {
        background: #007350;
      }
    }
    li {
      a {
        position: relative;
        text-decoration: none;
        display: flex;
        align-items: flex-end;
        margin: 0 15px;
        width: auto;
        height: 40px;
        font-size: 20px;
        &::after {
          content: "";
          width: 0%;
          height: 4px;
          position: absolute;
          bottom: -10px;
          left: 50%;
          border-radius: 8px;
          transition: all 250ms linear;
        }
      }
      a.nuxt-link-exact-active {
        font-weight: bold;
        .nav-icon {
          width: 40px;
          height: 40px;
        }
      }
      .nav-icon {
        margin-right: 10px;
        transition: 0.1s linear;
        width: 40px;
      }
      &:hover .nav-icon {
        width: 40px;
        height: 40px;
      }
      &:hover a {
        &::after {
          left: 0;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  .navBar {
    width: 100%;
    padding: 29px 50px 18px;
  }
}

@media screen and (max-width: 768px) {
  .navBar {
    width: 100%;
    height: 100%;
    padding: 29px 30px 18px;
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
      left: 0;
      transform: rotate(-3deg);
    }

    &::after {
      right: 0;
      transform: rotate(3deg);
    }

    ul {
      li {
        a {
          margin: 0 8px;
          font-size: 16px;
        }

        .nav-icon {
          margin-right: 5px;
        }
      }
    }
  }
}

@media screen and (max-width: 575px) {
  .headers {
    height: auto;
  }

  .navBar {
    width: 100%;
    height: 100%;
    padding: 0;
    background: #fff;
    flex-direction: column;

    &::before,
    &::after {
      display: none;
    }

    .logo {
      padding: 15px 15px 0;
      @include Center;
    }

    .nav-bar {
      padding: 0 15px;
      @include Center;

      ul {
        width: 100%;
        padding: 0;
        border-radius: 8px;
        height: 40px;
        font-size: 14px;
        box-shadow: 0px 2px 4px rgba(13, 11, 12, 0.2);
        @include Center;

        li {
          @include Center;
          flex-grow: 1;
          &:hover a {
            &::after {
              display: none;
            }
          }
          a {
            align-items: center;
            margin: 0 8px;
            color: #acacac;
          }

          a.nuxt-link-exact-active {
            color: #ff1d6c;
            font-weight: bold;
          }

          .nav-icon {
            display: none;
          }
        }
      }
    }
  }
}
</style>
