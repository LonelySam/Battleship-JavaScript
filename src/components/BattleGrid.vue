<template>
  <div class="grid">
    <table id="grid-table">
    </table>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';

export default {
  name: 'BattleGrid',
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  mounted() {
    EventBus.$on('create-form', (width, height) => {
      if (width !== undefined) {
        this.width = width;
      }
      if (height !== undefined) {
        this.height = height;
      }
      console.log(this.width);
      console.log(this.height);
      this.generateTable();
    });
  },
  methods: {
    generateTable() {
      const table = document.getElementById('grid-table');
      let contentTable = '';
      for (let i = 0; i < this.height; i++) {
        contentTable += '<tr>';
        for (let j = 0; j < this.width; j++) {
          contentTable += '<td>*</td>';
        }
        contentTable += '</tr>';
      }
      table.innerHTML = contentTable;
    },
  },
};
</script>

<style lang="css">
.grid {
  border: 1px solid black;
  width: 50%;
  height: 750px;
  display: inline-block;
  float: left;
}
</style>
