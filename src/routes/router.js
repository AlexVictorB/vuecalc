import Vue from 'vue'
import VueRouter from 'vue-router'
import Calc from '@/components/Calc.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: Calc
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router