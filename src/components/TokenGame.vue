<template lang="html">
  <div class="body-token">
    <div class="form">
      <p>With this token invite your friend. And start figthing!</p>
      <div class="token-input">
        <label>Token</label>
        <input type="text" name="token" v-bind:value=token readonly>
      </div>
      <button type="button" name="token">Invite</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';

export default {
  name: 'TokenGame',
  data() {
    return {
      token: ''
    };
  },
  mounted() {
    EventBus.$on('generate-token', (token) => {
      console.log(token);
      if(token !== undefined) {
        this.token = token;
      }
    })
  },
}
</script>

<style>
.body-token {
  position: relative;
  width: 50%;
  height: 50%;
  display: inline-block;
  float: left;
}

.body-token .form {
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

.body-token .form p {
  color: white;
  /* color: black; */
  padding-bottom: 5%;
}

.body-token .form .token-input {
  margin-bottom: 2%;
}

.body-token .form label {
  color: white;
  /* color: black; */
  font-size: 12px;
  padding-bottom: 1%;
  padding-left: 10px;
}

.body-token .form input {
  display: block;
  width: 70%;
  border: none;
  padding: 7px 7px 7px 2px;
  margin-left: 10px;
}

.body-token .form button {
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
