import ApiButton from "./components/button/index.vue";
import VueCompositionApi from '@vue/composition-api'
import './style/index.css'

/*
*   Api vue with the composition api poc
*
*
*
* */
export default {
    install(Vue, options) {
        // if(!options || !options.Api) {
        //     throw new Error('Please initialise plugin npm install @vue/composition-api, ')
        // }
        Vue.use(VueCompositionApi)
        Vue.component("api-button", ApiButton);
    }
};
