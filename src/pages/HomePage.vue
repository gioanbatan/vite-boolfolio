<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';

export default {
    name: 'HomePage',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            current_page: 1,
            pages_qty: null,
            elements_qty: null,
        }
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            console.log("Paggina", page);
            axios.get(`${store.apiBaseUrl}/api/projects`, { params: { page: page } }).then(resp => {
                this.projects = resp.data.results.data;
                this.pages_qty = resp.data.results.last_page;
                this.elements_qty = resp.data.results.total;
            });
        }
    },
}
</script>

<template>
    <main class="mt-4">
        <div class="container">
            <h1 class="text-center text-light mb-3">I nostri progetti</h1>
            <div class="row row-cols-3 g-3">
                <div class="col" v-for="project in projects">
                    <ProjectCard :project="project" :key="project.id" />
                </div>
            </div>

            <nav class="d-flex justify-content-between align-items-center my-3">
                <a class="btn btn-primary mb-2 fs-1" :class="(current_page === 1 ? 'disabled' : '')"
                    @click.prevent="getProjects(--current_page)">
                    <i class="fa-solid fa-left-long"></i>
                </a>

                <span class="fs-1 px-3 rounded-circle bg-secondary text-light">{{ current_page }} </span>

                <a class="btn btn-primary mb-2 fs-1" :class="(current_page === pages_qty ? 'disabled' : '')"
                    @click.prevent="getProjects(++current_page)">
                    <i class="fa-solid fa-right-long"></i>
                </a>
            </nav>
        </div>

    </main>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>