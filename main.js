import App from './App'
import uviewPlus from 'uview-plus'
import * as pinia from 'pinia';
import { createUnistorage } from 'pinia-plugin-unistorage'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  const store = pinia.createPinia();
  store.use(createUnistorage());
  app.use(uviewPlus)
  app.use(store)
  uni.$u.config.unit = 'rpx'
  return {
    app,
	pinia
  }
}
// #endif