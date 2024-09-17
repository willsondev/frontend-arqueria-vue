import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/styles/vue3-datepicker.css';



const app = createApp(App);


app.use(store);
app.use(router);




app.use(Toast, {
  position: POSITION.TOP_RIGHT,

});

app.mount('#app');
