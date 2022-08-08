<template>
  <div class="header">
    <CLink class="brand" :to="{ name: 'home' }">
      <img class="brand-logo" src="@/assets/svg/logo.svg" />
      <span class="brand-name">{{ $t('common.header.brandName') }}</span>
    </CLink>
    <CFlexSpan />
    <Menu class="menu" />
    <CFlexSpan />
    <div class="side-menu">
      <div class="airdrop" @click="toAirdrop()" v-if="$route.name !== 'airdrop'">Airdrop</div>
      <Wallets class="wallet" />
      <Networks class="network" />
    </div>

    <div class="header-mobile" style="display: none">
      <Wallets />
      <!-- <el-dropdown>
        <i class="el-icon-setting" style="font-size:30px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <CLink :to="{ name: 'home' }" target="_self">
              {{ $t('common.menu.token') }}
            </CLink></el-dropdown-item
          >
          <el-dropdown-item>
            <CLink :to="{ name: 'nft' }" target="_self">
              {{ $t('common.menu.nft') }}
            </CLink></el-dropdown-item
          >
          <el-dropdown-item>
            <CLink
              :href="
                mainnet ? 'https://bridge.poly.network/testnet' : 'https://bridge.poly.network'
              "
              target="_self"
            >
              {{ mainnet ? $t('common.networks.mainnet') : $t('common.networks.testnet') }}
            </CLink></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
import { TARGET_MAINNET } from '@/utils/env';
import Wallets from './Wallets';
import Networks from './Networks';
import Menu from './Menu';

export default {
  name: 'Header',
  components: {
    Wallets,
    Networks,
    Menu,
  },
  data() {
    return {
      mainnet: TARGET_MAINNET,
    };
  },
  methods: {
    toAirdrop() {
      this.$router.push({ path: '/airdrop' });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 112px;
  padding: 0 50px;
  @include child-margin-h(0px);
  position: relative;
}

.brand {
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  @include child-margin-h(12px);
}
.side-menu {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  @include child-margin-h(20px);
}

.brand-name {
  font-size: 20px;
}
.airdrop {
  background: linear-gradient(270deg, #282bdb 1.43%, #3ec7eb 100%);
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .brand-logo {
    margin-top: 110px;
    width: 40px;
    height: 48px;
  }
  .brand-name {
    margin-top: 110px;
    font-size: 2em;
  }
  .airdrop {
    display: none;
  }
  .menu,
  .wallet,
  .network {
    display: none;
  }
  .header-mobile {
    display: flex !important;
    margin-top: 110px;
    // align-items: center;
    // @include child-margin-h(20px);
  }
  .header {
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
