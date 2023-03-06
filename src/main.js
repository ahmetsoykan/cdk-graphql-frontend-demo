import Vue from 'vue'
import App from './App.vue'

import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

new Vue({
  render: h => h(App),
}).$mount('#app')
