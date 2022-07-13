import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/autores',
      name: 'Autores',
      component: () => import('../views/CadastroAutor.vue')
    },
    {
      path: '/editora',
      name: 'editora',
      component: () => import('../views/CadastroEditora.vue')
    },
    {
      path: '/categorias',
      name: 'categoria',
      component: () => import('../views/CadastroCategoria.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastrolivros',
      name: 'cadastrolivros',
      component: () => import('../views/CadastroLivros.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroView.vue')
    }
  ]
})

export default router
