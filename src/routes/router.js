import Vue from 'vue'
import VueRouter from 'vue-router'
import Calc from '@/components/Calc.vue'
import Convert from '@/components/Convert.vue'
import Temp from '@/components/temp.vue'
import Icm from '@/components/Imc.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: Calc
    },
    {
        path: '/convert',
        component: Convert
    },
    {
        path: '/temp',
        component: Temp
    },
    {
        path: '/imc',
        component: Icm
    },
    {
        path: '/*',
        component: NotFound
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router