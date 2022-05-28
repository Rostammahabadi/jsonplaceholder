import { createWebHistory, createRouter} from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("@/components/HelloWorld")
    },
    {
      path: "/posts/:postId",
      name: "post",
      component: () => import("@/components/ProjectPost")
    },
    {
      path: '/:pathMatch(.*)',
      name: "not-found",
      component: () => import("@/components/NotFound"),
    }
  ],
  linkActiveClass: 'active'
})


export default router;