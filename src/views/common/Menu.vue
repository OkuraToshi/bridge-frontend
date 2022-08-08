<template>
  <div
    class="menu"
    v-if="$route.name === 'home' || $route.name === 'nft' || $route.name === 'token'"
  >
    <!-- <CLink @click="goAudit" class="item" target="_self">
      {{ $t('common.menu.audit') }}
    </CLink> -->
    <CLink
      :to="{ name: 'home' }"
      :class="$route.name == 'home' ? 'active item' : 'item'"
      target="_self"
    >
      {{ $t('common.menu.token') }}
    </CLink>
    <div class="divide-line"></div>
    <CLink
      :to="{ name: 'nft' }"
      :class="$route.name == 'nft' ? 'active item' : 'item'"
      target="_self"
    >
      {{ $t('common.menu.nft') }}
    </CLink>
  </div>
</template>

<script>
import { TARGET_MAINNET } from '@/utils/env';

export default {
  name: 'Menu',
  data() {
    return {
      mainnet: TARGET_MAINNET,
    };
  },
  methods: {
    goAudit() {
      window.open('https://github.com/polynetwork/audit-report');
    },
  },
};
</script>
<style scoped lang="scss">
.menu {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 16px;
  border: 1px solid #0e2439;
  box-sizing: border-box;
  border-radius: 16px;
  .item {
    font-size: 18px;
    font-family: PingFangTC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    line-height: 20px;
    padding: 15px 35px;
    transition: all ease 0.3s;
  }
  .item:hover {
    color: rgba(62, 199, 235, 1);
    background-color: rgba(14, 36, 57, 1);
    transition: all ease 0.3s;
  }
  .active {
    background-color: rgba(14, 36, 57, 1);
    color: rgba(62, 199, 235, 1) !important;
  }
}
.item:first-child {
  border-right: 1px solid #0e2439;
  border-radius: 16px 0 0 16px;
}
.item:last-child {
  border-right: 1px solid #0e2439;
  border-radius: 0 16px 16px 0;
}
</style>
