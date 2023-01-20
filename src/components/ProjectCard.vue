<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    data() {
        return {
            store
        }
    },
    props: {
        project: Object,
    }
}

</script>

<template>
    <div class="card">
        <img v-if="project.cover_image" class="card-img-top" :src="`${store.apiBaseUrl}/storage/${project.cover_image}`"
            :alt="`Cover image di ${project.title}`">
        <div v-else class="text-center p-2">
            No image
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Visualizza</a>
        </div>
    </div>
</template>


<style lang="scss">

</style>