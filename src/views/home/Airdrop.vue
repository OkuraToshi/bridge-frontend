<template>
  <CDialog v-bind="$attrs" v-on="$listeners">
    <div class="content">
      <div class="header">
        <div class="title">
          <img
            class="close-btn"
            src="@/assets/svg/close.svg"
            @click="$emit('update:visible', false)"
          />
        </div>
      </div>
      <div class="body">
        <!-- <img class="airbg1" src="@/assets/png/airbg1.png" />
        <img class="airbg2" src="@/assets/png/airbg2.png" /> -->
        <img class="airbg3" src="@/assets/png/airbg3.png" />
        <img class="airbg4" src="@/assets/png/airbg4.png" />
        <img class="airbg5" src="@/assets/png/airbg5.png" />
        <img class="airgift1" src="@/assets/png/airgift1.png" />
        <!-- <img class="airgift2" src="@/assets/png/airgift2.png" /> -->
        <div class="title1">Poly Network</div>
        <div class="title1">Voyage</div>
        <div class="title2">NFT Airdrop</div>
      </div>
      <div class="foot">
        <img class="poly2y" src="@/assets/png/poly2y.png" />
        <div class="btn-out">
          <div class="btn-in active" @click="goAirdrop()">Go</div>
        </div>
      </div>
    </div>
  </CDialog>
</template>

<script>
import { TOP_TOKEN_BASIC_NAMES } from '@/utils/values';

export default {
  name: 'airdrop',
  inheritAttrs: false,
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    select(tokenBasic) {
      this.$emit('update:visible', false);
    },
    goAirdrop() {
      this.$router.push({ path: '/airdrop' });
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 1080px;
    height: 744px;
    // background: #171f31;
    background-image: url('../../assets/png/giftbg.png') !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    .header {
      padding: 0px !important;
      height: 0;
      .title {
        img {
          width: 36px;
          position: absolute;
          right: -36px;
          top: -36px;
        }
      }
    }
    .body {
      height: 616px;
      position: relative;
      overflow: hidden;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      padding: 90px 40px;
      box-sizing: border-box;
      .airbg1 {
        display: none;
        position: absolute;
        top: -40px;
        left: -20px;
        z-index: 1;
      }
      .airbg2 {
        display: none;
        position: absolute;
        top: 18px;
        left: 0px;
      }
      .airbg3 {
        display: none;
        position: absolute;
        bottom: -100px;
        left: 0px;
      }
      .airbg4 {
        display: none;
        position: absolute;
        bottom: -30px;
        right: 0px;
        z-index: 2;
      }
      .airbg5 {
        display: none;
        position: absolute;
        bottom: -160px;
        right: 0px;
        z-index: 1;
      }
      .airgift1 {
        display: none;
        position: absolute;
        bottom: 0px;
        left: 300px;
      }
      .airgift2 {
        display: none;
        position: absolute;
        top: 0px;
        right: 0px;
      }
      .title1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 74px;
        line-height: 90px;
        letter-spacing: 0.1em;
        color: #b8fbff;
        z-index: 10;
      }
      .title2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.85);
        padding-top: 20px;
        z-index: 10;
      }
    }
    .foot {
      padding: 35px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .poly2y {
        height: 60px;
      }
      .btn-out {
        height: 51px;
        width: 120px;
        border: 1px dashed rgba(255, 255, 255, 0.4);
        border-radius: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;

        .btn-in:hover {
          opacity: 0.6;
          transition: all ease 0.3s;
        }
        .btn-in {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Futura-Heavy';
          font-style: normal;
          font-weight: 900;
          font-size: 18px;
          line-height: 11px;
          /* identical to box height */
          color: #ffffff;
          border-radius: 16px;
          transition: all ease 0.3s;
        }
        .active {
          background: linear-gradient(270deg, #282bdb 1.43%, #3ec7eb 100%);
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .header {
    padding: 80px 0px 40px !important;
  }
  .hint {
    padding: 0 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: calc(100vw - 40px);
    margin: 20px;
    // background: #171f31;
    // background-image: url('../../assets/png/giftbg.png') !important;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: auto;
    .header {
      padding: 0px !important;
      height: 0;
      .title {
        img {
          width: 36px;
          position: absolute;
          right: -36px;
          top: -36px;
        }
      }
    }
    .body {
      height: 616px;
      position: relative;
      overflow: hidden;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      padding: 90px 40px;
      box-sizing: border-box;
      .airbg1 {
        position: absolute;
        top: -40px;
        left: -20px;
        z-index: 1;
      }
      .airbg2 {
        position: absolute;
        top: 18px;
        left: 0px;
      }
      .airbg3 {
        position: absolute;
        bottom: -100px;
        left: 0px;
      }
      .airbg4 {
        position: absolute;
        bottom: -30px;
        right: 0px;
        z-index: 2;
      }
      .airbg5 {
        position: absolute;
        bottom: -160px;
        right: 0px;
        z-index: 1;
      }
      .airgift1 {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 220px;
        transform: rotateY(180deg);
      }
      .airgift2 {
        position: absolute;
        top: 0px;
        right: 0px;
      }
      .title1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 70px;
        letter-spacing: 0.1em;
        color: #b8fbff;
        z-index: 10;
      }
      .title2 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.85);
        padding-top: 20px;
        z-index: 10;
      }
    }
    .foot {
      padding: 35px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      .poly2y {
        width: 100%;
        max-width: 360px;
      }
      .btn-out {
        height: 51px;
        width: 100%;
        border: 1px dashed rgba(255, 255, 255, 0.4);
        border-radius: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 5px;
        margin-top: 20px;

        .btn-in:hover {
          opacity: 0.6;
          transition: all ease 0.3s;
        }
        .btn-in {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Futura-Heavy';
          font-style: normal;
          font-weight: 900;
          font-size: 18px;
          line-height: 11px;
          /* identical to box height */
          color: #ffffff;
          border-radius: 16px;
          transition: all ease 0.3s;
        }
        .active {
          background: linear-gradient(270deg, #282bdb 1.43%, #3ec7eb 100%);
        }
      }
    }
  }
}
</style>
