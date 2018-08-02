<template>
  <div class="body">
    <BattleGrid/>
    <FormCreate/>
  </div>
</template>

<script>
import BattleGrid from '@/components/BattleGrid.vue';
import FormCreate from '@/components/FormCreate.vue';

export default {
  name: 'game',
  components: {
    BattleGrid,
    FormCreate,
  },
};
</script>

<style lang="css">
.body {
  width: 100%;
  height: 100%;
}
</style>
