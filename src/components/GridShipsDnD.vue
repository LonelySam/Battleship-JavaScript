<template lang="html">
  <div class="drag-and-drop">
    <div class="content-left">
      <div class="board" id="board">
        <table id="grid-table">
          <tr v-for="i in (1, rows)">
            <td v-for="j in (1, cols)" v-bind:id="i+'-'+j"></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="content-right">
      <div class="list">
        <div v-for="i in (1, maxShips)" class="ship">
          <div class="image" id="ships">
            <img :src="require(`@/assets/`+i+`.png`)" alt="">
          </div>
          <div class="counter">
            <p>{{i}}</p>
          </div>
        </div>
        <div class="buttons">
          <button type="button" name="rotate">Rotate</button>
          <button type="button" name="setup">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridShipsDnD',
  data() {
    return {
      cols: 10,
      rows: 10,
      maxShips: 5,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drake = dragula ([
          document.getElementById('board'),
          document.getElementById('ships'),
        ],
        {
          copy: true,
          revertOnSpill: true,
        }
      );
    });
  },
};
</script>

<style lang="css">
.drag-and-drop {
  width: 100%;
  height: 100%;
}

.drag-and-drop .content-left {
  width: 70%;
  height: 100%;
  display: inline-block;
  float: left;
  position: relative;
}

.drag-and-drop .content-left .board {
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

.drag-and-drop .content-left .board table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  text-align: center;
}

.drag-and-drop .content-left .board table td {
  border: 3px solid #0B2133;
  color: white;
}

.drag-and-drop .content-left .board table td:hover {
  background-color: #273C4C;
}

.drag-and-drop .content-right {
  width: 30%;
  height: 100%;
  display: inline-block;
  float: right;
  position: relative;
}

.drag-and-drop .content-right .list {
  width: 90%;
  height: 90%;
  display: inline-block;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(204, 204, 204, 0.3);
  padding: 5% 5%;
  border-radius: 10px;
}

.drag-and-drop .content-right .list .ship {
  width: 100%;
  height: 15%;
}

.drag-and-drop .content-right .list .ship .image {
  float: left;
  width: 80%;
  height: 20%;
  display: inline-block;
}

.drag-and-drop .content-right .list .ship .image img {
  max-width: 100%;
}

.drag-and-drop .content-right .list .ship .counter {
  width: 20%;
  float: right;
  display: inline-block;
  text-align: center;
}

.drag-and-drop .content-right .list .buttons button {
  margin-top: 5%;
  display: inline-block;
  padding: 5px 5px 5px 5px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #0F2C44;
  color: white;
  width: 30%;
}
</style>
