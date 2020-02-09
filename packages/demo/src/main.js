import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import ApiButton from '@cmft/ui'
import ApiCheckbox from  '@cmft/ui'
import '@cmft/ui/lib/ui.css'
import '@cmft/cube-ui/lib/cube.min.css'

// Vue.use(ApiButton)
// Vue.use(ApiCheckbox)
Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
