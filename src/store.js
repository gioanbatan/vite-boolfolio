import { reactive } from "vue";

export const store = reactive({
    apiBaseUrl: "http://127.0.0.1:8000",
    navLinks: [
        {
            name: "Home",
            route: "home"
        },
        {
            name: "About Me",
            route: "about-me"
        }
    ],
});