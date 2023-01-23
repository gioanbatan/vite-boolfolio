import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import NotFound from "./pages/NotFound.vue";
import ProjectShow from "./pages/ProjectShow.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about-us',
            component: AboutUs,
        },
        {
            path: '/projects/:slug',
            name: 'project-show',
            component: ProjectShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
});

export { router };

