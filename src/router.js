import Vue from 'vue';
import Router from 'vue-router';
import Game from './views/Game.vue';
import SetUpShip from './views/SetUpShip.vue';

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
      name: 'setup',
      component: SetUpShip,
    },
  ],
});
