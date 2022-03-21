import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (localStorage.users === undefined) {
  let users = [
    {
      username: "admin",
      password: "admin",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
