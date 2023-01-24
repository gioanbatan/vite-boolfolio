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
  <div class="ms_background">
    <!-- Header -->
    <AppHeader />
    <!-- /Header -->

    <!-- Main -->
    <router-view></router-view>
    <!-- /Main -->
  </div>
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>