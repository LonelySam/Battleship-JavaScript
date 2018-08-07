<template>
  <div class="game">
    <div class="header">
      <HeaderGame/>
    </div>
    <div class="body">
      <FormCreate/>
      <BattleGrid/>
      <TokenGame/>
    </div>
  </div>
</template>

<script>
import BattleGrid from '@/components/BattleGrid.vue';
import FormCreate from '@/components/FormCreate.vue';
import TokenGame from '@/components/TokenGame.vue';
import HeaderGame from '@/components/HeaderGame.vue';

export default {
  name: 'game',
  components: {
    HeaderGame,
    BattleGrid,
    FormCreate,
    TokenGame,
  },
};
</script>

<style>
.game {
  width: 90%;
  height: 100%;
  margin: auto;
  /*height: 750px;*/
  /*max-height: 750px;*/
}

.game .header {
  height: 10%;
  border-bottom: 2px solid #115790;
}

.game .body {
  height: 90%;
}
</style>
