<template lang="html">
  <div class="form">
    <input type="text" name="game" v-model="width">
    <input type="text" name="game" v-model="height">
    <button type="button" name="game" @click="sendValue(width, height)">Create</button>
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
.form {
  border: 1px solid green;
  width: 50%;
  height: 750px;
  display: inline-block;
}

input {
  display: block;
}
</style>
