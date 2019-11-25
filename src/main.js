import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import jQuery from 'jquery'

import './assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js'
import './assets/js/jquery.slimscroll.js'
import './assets/vendors/bower_components/waypoints/lib/jquery.waypoints.min.js'
import './assets/vendors/bower_components/jquery.counterup/jquery.counterup.min.js'
import './assets/js/dropdown-bootstrap-extended.js'
import './assets/vendors/jquery.sparkline/dist/jquery.sparkline.min.js'
import './assets/vendors/bower_components/owl.carousel/dist/owl.carousel.min.js'
import './assets/vendors/chart.js/Chart.min.js'
import './assets/vendors/bower_components/morris.js/morris.min.js'
import './assets/vendors/bower_components/jquery-toast-plugin/dist/jquery.toast.min.js'
import './assets/vendors/bower_components/switchery/dist/switchery.min.js'
import './assets/js/init.js'
import './assets/js/dashboard-data.js'

Vue.use(VueRouter);
Vue.config.productionTip = false;

window.jQuery = jQuery;
window.$ = jQuery;




new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
