<script>


export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">

                <router-link class="navbar-brand" :to="{ name: HomePage }">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ name: 'home' }">Home<span
                                    class="sr-only"></span></router-link>
                        </li>

                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{ name: 'aboutus' }">About Us<span
                                    class="sr-only"></span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>