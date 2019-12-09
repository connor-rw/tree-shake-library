import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import ComponentLibrary from '../../library';

Vue.config.productionTip = false

Vue.use(ComponentLibrary);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
