import { createRouter, createWebHistory } from 'vue-router'
import LoginCard from './components/Views/LoginCard.vue'
import SignUp from './components/Views/SignUp.vue'
const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: LoginCard},
  { path: '/signup', component: SignUp}

]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


export default router