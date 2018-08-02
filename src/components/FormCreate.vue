<template lang="html">
  <div class="body-form">
    <div class="form">
      <p>Start creating the game, sizing the board on which you want to fight!</p>
      <div class="width-input">
        <label>Width:</label>
        <input type="number" name="game" v-model="width">
      </div>
      <div class="height-input">
        <label>Height</label>
        <input type="number" name="game" v-model="height">
      </div>
      <button type="button" name="game" @click="sendValue(width, height)">Create</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';

export default {
  name: 'FormCreate',
  data() {
    return {
      height: 0,
      width: 0,
    };
  },
  methods: {
    sendValue(width, height) {
      EventBus.$emit('create-form', width, height);
    },
  },
};
</script>

<style lang="css">
.body-form {
  position: relative;
  width: 50%;
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
}

.body-form .form p {
  color: white;
  /* color: black; */
  padding-bottom: 5%;
}

.body-form .form .width-input {
  margin-bottom: 2%;
}

.body-form .form .height-input {
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
  width: 70%;
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
