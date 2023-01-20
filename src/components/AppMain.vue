<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            store
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            // console.log("PRIMA", this.projects);

            axios.get(`${store.apiBaseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                // console.log("RISPOSTA", resp.data.results);
            });
        }
    },
}
</script>

<template>
    <section class="mt-4">
        <div class="container">
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard :project="project" :key="project.id" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>