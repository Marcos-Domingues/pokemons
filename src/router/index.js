import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    
    routes: [
        {
          path: "/generations",
          name: "listGen",
          component: () => import("../views/listGen.vue")
        },
        {
          path: "/",
          name: "listChar",
          component: () => import("../views/listChar.vue")
        },
        {
          path: "/gen",
          name: "game",
          component: () => import("../views/game.vue")
        },
      ],

})
  
export default router