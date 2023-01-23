<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ProjectShow',
    data() {
        return {
            store,
            project: {},
        }
    },
    created() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.apiBaseUrl}/api/projects/${slug}`).then(resp => {
            if (resp.data.success) {
                this.project = resp.data.project;
            } else {
                this.$router.push({ name: 'not-found' });
            }
        });
    },
    computed: {
        type() {
            return this.project.type ? this.project.type.name : "Tipologia non specificata";
        }
    }
}
</script>

<template>
    <main>
        <div class="container text-light">
            <h1 class="text-center my-2">{{ project.title }}
            </h1>

            <h5 class="mt-3 mb-5">{{ type }}</h5>

            <img v-if="project.cover_image" :src="`${store.apiBaseUrl}/storage/${project.cover_image}`"
                :alt="`Immagine di ${project.name}`">
            <div v-else class="ms_no-image p-5 w-50 rounded border-light mx-auto text-center text-nowrap">No
                image</div>

            <h4 class="my-3">Descrizione del progetto:</h4>

            <p class="mt-4">{{ project.description }}</p>

            <router-link :to="{ name: 'home' }">
                <i class="fa-solid fa-left-long fs-3 p-1 rounded bg-primary text-light"></i>
            </router-link>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.ms_no-image {
    border: 2px dashed;
}
</style>