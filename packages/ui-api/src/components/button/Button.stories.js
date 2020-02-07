import {storiesOf} from '@storybook/vue'
import ApiButton from "./index";
import Vue from 'vue';
import VueCompositionApi from "@vue/composition-api";
import '../../style/index.css'


Vue.use(VueCompositionApi)

storiesOf('Button', module)
    .add('button with props message', () => ({
        components: {ApiButton},
        template:
                `
            <api-button message="this is the api components"></api-button>
        `,
    }))
