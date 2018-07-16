// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vue from "vue/dist/vue.common.js";
import App from './App'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router/index'
import store from './store'


Vue.config.productionTip = false
const root=document.getElementById("app");
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render:(h)=>h(App)
});
