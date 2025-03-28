import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import("../pages/404.vue"),
        },
        {
            path: "/",
            name: "wrapper",
            component: () => import("../components/AppWrapper.vue"),
            children: [
                {
                    path: "home",
                    name: "home",
                    component: () => import("../pages/Home.vue"),
                },
                {
                    path: "/new-book",
                    name: "NewBook",
                    component: () => import("../pages/AddBook.vue"),
                },
                {
                    path: "/edit-book/:id",
                    name: "EditBook",
                    component: () => import("../pages/EditBook.vue"),
                },
                {
                    path: "/new-author",
                    name: "NewAuthor",
                    component: () => import("../pages/AddAuthor.vue"),
                },
                {
                    path: "/new-publisher",
                    name: "NewPublisher",
                    component: () => import("../pages/AddPublisher.vue"),
                },
                {
                    path: "/author",
                    name: "Author",
                    component: () => import("../pages/Author.vue"),
                },
                {
                    path: "/publisher",
                    name: "Publisher",
                    component: () => import("../pages/Publisher.vue"),
                },
            ],
        },
    ],
});

export default router;
