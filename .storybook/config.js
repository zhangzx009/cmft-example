import {configure, addParameters} from '@storybook/vue';

// automatically import all files ending in *.stories.js
const req = require.context('../packages/ui-api/src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({viewport: {defaultViewport: 'iphone6'}});

configure(loadStories, module);
/*
* import '../src/index.css';

addParameters({
  assets: [
    {
      name: 'app',
      url: '/designs/app.png',
    },
    {
      name: 'items',
      url: '/designs/items.png',
    },
    {
      name: 'list 1',
      url: '/designs/list-1.png',
    },
    {
      name: 'list 2',
      url: '/designs/list-2.png',
    },
  ],
})
*
* */
