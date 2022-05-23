import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue'
// import About from './views/About.vue'



const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        // { path: '/about', name: 'About', component: About },
        // { path: '/brazil', name: 'Brazil', component: () => import('./views/Brazil.vue') },
        // { path: '/jamaica', name: 'Jamaica', component: () => import('./views/Jamaica.vue') },
        // { path: '/panama', name: 'Panama', component: () => import('./views/Panama.vue') },
        // { path: '/hawaii', name: 'Hawaii', component: () => import('./views/Hawaii.vue') },
        { path: '/destination/:id', name: 'destination.show', component: () => import('./views/DestinationShow.vue') }
    ],
    linkActiveClass: 'active'
})

createApp(App).use(router).mount('#app')
