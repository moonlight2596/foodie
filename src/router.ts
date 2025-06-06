import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
];


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
