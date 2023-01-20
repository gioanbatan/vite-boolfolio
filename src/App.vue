<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>


<template>
  <!-- Header -->
  <AppHeader />
  <!-- /Header -->

  <!-- Main -->
  <router-view></router-view>
  <!-- /Main -->

</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>