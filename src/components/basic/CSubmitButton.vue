<template>
  <CButton v-bind="$attrs" :class="b()" :disabled="loading || $attrs.disabled" v-on="$listeners">
    <img v-if="loading" :class="b('loading-icon')" src="@/assets/svg/pending.svg" />
    <span> <slot /></span>
  </CButton>
</template>

<script>
import CButton from './CButton';

export default {
  name: 'CSubmitButton',
  inheritAttrs: false,
  components: {
    CButton,
  },
  props: {
    loading: Boolean,
  },
};
</script>

<style lang="scss">
@include block(c-submit-button) {
  width: stretch;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(116.19deg, #3ec7eb 16.48%, #282bdb 83.52%);
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  @include child-margin-h(8px);

  @include element(loading-icon) {
    width: 16px;
    animation: rotation 2s infinite linear;
  }
}
</style>
