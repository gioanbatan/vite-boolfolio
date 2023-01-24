<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <nav class="ms_nav navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">

                <router-link class="navbar-brand" :to="{ name: 'home' }">MyProjects</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li v-for="navLink in store.navLinks" class="nav-item active">
                            <router-link class="nav-link" :to="{ name: navLink.route }">{{ navLink.name }}<span
                                    class="sr-only"></span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;
@use "../styles/partials/variables" as *;

header {
    height: $header-height;

    .ms_nav {
        height: 100%;
    }
}
</style>