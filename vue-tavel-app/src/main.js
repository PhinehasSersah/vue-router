import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Brazil from './views/Brazil.vue'
import Jamaica from './views/Jamaica.vue'
import Panama from './views/Panama.vue'
import Hawaii from './views/Hawaii.vue'



const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/brazil', name: 'Brazil', component: () => import('./views/Brazil.vue') },
        { path: '/jamaica', name: 'Jamaica', component: () => import('./views/Jamaica.vue') },
        { path: '/panama', name: 'Panama', component: () => import('./views/Panama.vue') },
        { path: '/hawaii', name: 'Hawaii', component: () => import('./views/Hawaii.vue') },
        {path: '/destination/:id', component: () =>import('./views/DestinationShow.vue')}
    ],
    linkActiveClass: 'active'
})

createApp(App).use(router).mount('#app')
