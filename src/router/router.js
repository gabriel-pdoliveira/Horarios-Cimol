import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue';
import AdminView from '../views/Admin.vue';
import LoginView from '../views/Login.vue';
import UploadView from '../views/Upload.vue';
import WelcomeView from '../views/Welcome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/upload',
    name: 'Upload',
    component: UploadView
  },
  {
    path: '/welcome',
    name: 'Welcome',component: WelcomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;