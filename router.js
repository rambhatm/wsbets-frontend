import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '../pages/Layout/DashboardLayout.vue';
import wsbets from './Main.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/dashboard',
            component: DashboardLayout,
            children: [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    components: { default: wsbets }
                }
            ]
        }
    ]
});
