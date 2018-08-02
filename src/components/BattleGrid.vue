<template>
  <div class="grid">
    <div class="board">
      <table id="grid-table">
      </table>
    </div>
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
          contentTable += '<td></td>';
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
  /* border: 1px solid white; */
  width: 50%;
  height: 90%;
  display: inline-block;
  padding: 1px;
  position: relative;
}

.grid .board {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 90%;
  height: 90%;
}


.grid .board table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.grid .board table td {
  border: 3px solid #2E6490;
  color: white;
}
</style>
