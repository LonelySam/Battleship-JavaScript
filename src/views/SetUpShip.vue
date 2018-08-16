<template lang="html">
  <div class="setup">
    <div class="header">
      <HeaderGame/>
    </div>
    <div class="body">
      <GridShipsDnD/>
    </div>
  </div>
</template>

<script>
import HeaderGame from '@/components/HeaderGame.vue';
import GridShipsDnD from '@/components/GridShipsDnD.vue';

export default {
  name: 'setup',
  components: {
    HeaderGame,
    GridShipsDnD,
  },
}
</script>

<style lang="css">
.setup {
  width: 90%;
  height: 100%;
  margin: auto;
}

.setup .header {
  height: 10%;
  border-bottom: 2px solid #115790;
}

.setup .body {
  height: 90%;
}
</style>
