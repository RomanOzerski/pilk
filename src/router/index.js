import Vue from 'vue'
import VueRouter from 'vue-router'

import NelsonView from '../views/NelsonView.vue'
import LunaView from '../views/LunaView.vue'
import EscapeView from '../views/EscapeView.vue'
import PancakeView from '../views/PancakeView.vue'
import FuckRoman from '../views/FuckRoman.vue'
import LmaoPilk from '../views/LmaoPilk.vue'
import CummiesPog from '../views/CummiesPog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nelson',
    component: NelsonView
  },
  {
    path: '/gel',
    name: 'luna',
    component: LunaView
  },
  {
    path: '/gbathr',
    name: 'escape',
    component: EscapeView
  },
  {
    path: '/ohg',
    name: 'pancake',
    component: PancakeView
  },
  {
    path: '/ubyr',
    name: 'lmaopilk',
    component: LmaoPilk
  },
  {
    path: '/unknownxd',
    name: 'fuckroman',
    component: FuckRoman
  },
  {
    path: '/cummies',
    name: 'cummiespog',
    component: CummiesPog
  },
  {
    path: '/simi',
    name: 'SimiPog',
    component: SimiPog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
