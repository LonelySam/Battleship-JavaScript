<template lang="html">
  <div class="body-form">
    <div class="form">
      <p>Start creating the game, sizing the board on which you want to fight!</p>
      <div class="input">
        <label>Colums</label>
        <input type="number" min="10" max="50" v-model.number="col" @keyup="validateValue()" @change="validateValue()">
        <label>Rows</label>
        <input type="number" min="10" max="50" v-model.number="row" @keyup="validateValue()" @change="validateValue()">
      </div>
      <button type="button" name="game" @click="sendValue({colum, row})">Create</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';
import CreationGame from '@/services/CreationGame';

export default {
  name: 'FormCreate',
  data () {
    return {
      row: 10,
      col: 10,
    };
  },
  methods: {
    validateValue () {
      if (this.row > 50) {
        this.row = 50;
      }
      if (this.row < 10) {
        this.row = 10;
      }
      if (this.col > 50) {
        this.col = 50;
      }
      if (this.col < 10) {
        this.col = 10;
      }
      EventBus.$emit('create-form', this.col, this.row);
    },
    sendValue ({ col, row } = {}) {
      CreationGame.create({ col, row })
        .then(response => {
          const data = response.data;
          EventBus.$emit('receive-token', data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="css">
.body-form {
  position: relative;
  width: 30%;
  height: 45%;
  float: left;
}

.body-form .form {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 80%;
  background-color: rgba(204, 204, 204, 0.3);
  padding: 5% 5%;
  border-radius: 10px;
}

.body-form .form p {
  color: white;
  padding-bottom: 5%;
}

.body-form .form .input {
  margin-bottom: 2%;
}

.body-form .form .input input {
  margin-bottom: 5%;
}

.body-form .form label {
  color: white;
  /* color: black; */
  font-size: 12px;
  padding-bottom: 1%;
  padding-left: 10px;
}

.body-form .form input {
  display: block;
  width: 90%;
  border: none;
  padding: 7px 7px 7px 2px;
  margin-left: 10px;
}

.body-form .form button {
  margin-top: 5%;
  display: block;
  padding: 5px 5px 5px 5px;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #0F2C44;
  color: white;
  width: 30%;
}
</style>
