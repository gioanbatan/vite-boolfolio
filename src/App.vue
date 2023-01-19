<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      test: 'ciao',
      projects: [],
    }
  },
  methods: {
    getProjects() {
      console.log("PRIMA", this.projects);

      axios.get(`http://127.0.0.1:8000/api/projects`).then(resp => {
        this.projects = resp.data.results;
        console.log("RISPOSTA", resp.data.results);
      });
    }
  },
  created() {
    this.getProjects();
    console.log('created va!');
  }
}

</script>


<template>

  {{ test }}
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
</style>