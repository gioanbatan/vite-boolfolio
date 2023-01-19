<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {

    },
    data() {
        return {
            projects: [],
        }
    },
    created() {
        this.getProjects();
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
}
</script>

<template>
    <ul>
        <li v-for="project in projects">{{ project.title }}</li>
    </ul>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>