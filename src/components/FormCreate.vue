<template lang="html">
  <div class="body-form">
    <div class="form">
      <p>Start creating the game, sizing the board on which you want to fight!</p>
      <div class="colum-input">
        <label>colum</label>
        <input type="number" min="10" max="50" name="game" v-model.number="colum" @keyup="validateValue()" @change="validateValue()">
      </div>
      <div class="row-input">
        <label>row</label>
        <input type="number" min="10" max="50" name="game" v-model.number="row" @keyup="validateValue()" @change="validateValue()">
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
  data() {
    return {
      row: 10,
      colum: 10,
    };
  },
  methods: {
    validateValue() {
      if (this.row > 50) {
        this.row = 50;
      }
      if (this.row < 10) {
        this.row = 10;
      }
      if (this.colum > 50) {
        this.colum = 50;
      }
      if (this.colum < 10) {
        this.colum = 10;
      }
      EventBus.$emit('create-form', this.colum, this.row);
    },
    sendValue({colum, row} = {}) {
      CreationGame.create({colum, row})
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          EventBus.$emit('receive-token', data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="css">
.body-form {
  position: relative;
  width: 30%;
  height: 50%;
  display: inline-block;
  float: left;
}

.body-form .form {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 85%;
  height: 85%;
  background-color: rgba(204, 204, 204, 0.3);
  padding: 5% 5%;
  border-radius: 10px;
}

.body-form .form p {
  color: white;
  padding-bottom: 5%;
}

.body-form .form .colum-input {
  margin-bottom: 2%;
}

.body-form .form .row-input {
  margin-bottom: 2%;
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
