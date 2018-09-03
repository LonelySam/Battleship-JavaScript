<template>
  <div class="game">
    <HeaderGame/>
    <FormCreate/>
    <BattleGrid/>
    <TokenGame/>
  </div>
</template>

<script>
import BattleGrid from '@/components/BattleGrid';
import FormCreate from '@/components/FormCreate';
import TokenGame from '@/components/TokenGame';
import HeaderGame from '@/components/HeaderGame';

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
}
</style>
