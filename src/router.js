import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import Checkout from './views/Caja.vue'
import Cocina from './views/Cocina.vue'
import End from './views/Final.vue'
import state from './views/Estatus.vue'
import Temporizador from './components/Temporizador.vue'
import Status from './views/Status.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/home/:name',
      name: 'home',
      component: Home,
      props:true

    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/Tempo',
      name: 'Tempo',
      component: Temporizador
    },
    {
      path: '/End',
      name: 'End',
      component: End
    },
    {
      path: '/Cocina',
      name: 'Cocina',
      component: Cocina
    }, 
     {
      path: '/Status',
      name: 'Status',
      component: Status
    },
    {
      path: '/State/:code',
      name: 'Estatus',
      component: state,
      props:true
    }
  ]
})
