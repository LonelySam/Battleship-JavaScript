<template lang="html">
  <div class="setup">
    <HeaderGame/>
    <GridShipsDnD/>
  </div>
</template>

<script>
import HeaderGame from '@/components/HeaderGame';
import GridShipsDnD from '@/components/GridShipsDnD';

export default {
  name: 'setupShip',
  components: {
    HeaderGame,
    GridShipsDnD,
  },
};
</script>

<style lang="css">
.setup {
  width: 90%;
  height: 100%;
  margin: auto;
};
</style>
