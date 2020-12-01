// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
var VueScrollTo = require('vue-scrollto');
import AOS from "aos";
import "aos/dist/aos.css";

export default function (Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  const opts = {}; // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts);
  Vue.use(VueScrollTo, {
    container: "body",
    duration: 2000,
    easing: "ease-in-out",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })
}
