<template>
  <div class="grid">
    <div class="board">
      <table id="grid-table">
        <tr v-for="(row) in rows" v-bind:key="row">
          <td v-for="(col) in cols" v-bind:key="col">
          </td>
        </tr>
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
      cols: 10,
      rows: 10,
    };
  },
  mounted() {
    EventBus.$on('create-form', (cols, rows) => {
      if (cols !== undefined) {
        this.cols = cols;
      }
      if (rows !== undefined) {
        this.rows = rows;
      }
    });
  },
};
</script>

<style lang="css">
.grid {
  width: 70%;
  height: 100%;
  padding: 1px;
  position: relative;
  float: right;
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
  background-color: rgba(204, 204, 204, 0.3);
}

.grid .board table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.grid .board table td {
  border: 3px solid #0b2133;
  color: white;
}
</style>
