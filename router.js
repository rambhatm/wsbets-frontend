import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from './layout/DashboardLayout.vue';
import FrontpageLayout from './layout/FrontpageLayout.vue'
import wsbets from './Main.vue'
import empty from './FrontPage.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/frontpage',
            component: FrontpageLayout,
            children: [
                {
                    path: '/frontpage',
                    component: empty
                }
            ]
        },
        {
            path: '/dashboard',
            name: 'home',
            component: DashboardLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    components: { default: wsbets }
                }
            ]
        }
    ]
});
