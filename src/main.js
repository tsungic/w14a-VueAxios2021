import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import cookies from 'vue-cookies';

axios.defaults.headers.common['X-Api-Key'] = process.env.VUE_APP_API_KEY;
Vue.prototype.$axios = axios;
Vue.use(cookies);
Vue.config.productionTip = false;

Vue.mixin({
    data: function() {
        return {
            api: process.env.VUE_APP_API_URL,
            loggedInUser() {
                return cookies.get('user');
            },
            loginToken() {
                return cookies.get('user').loginToken || false;
            }
        }
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
