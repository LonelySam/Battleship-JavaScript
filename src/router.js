import Vue from 'vue';
import Router from 'vue-router';
import Game from './views/Game.vue';
import SetupShip from './views/SetupShip.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/setup',
      name: 'setupShip',
      component: SetupShip,
    },
  ],
});
