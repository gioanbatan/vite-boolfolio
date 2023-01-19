<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  }
}
</script>


<template>
  <!-- Header -->
  <AppHeader />
  <!-- /Header -->

  <!-- Main -->
  <main>
    <AppMain />
  </main>
  <!-- /Main -->

</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>