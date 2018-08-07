<template lang="html">
  <div class="body-token">
    <div class="form">
      <p>{{message}}</p>
      <div class="token-input">
        <label>Challange</label>
        <input type="text" name="token" v-bind:value=token>
      </div>
      <button type="button" name="token" @click="joinGame(token)">Join</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';
import JoinGame from '@/services/JoinGame';

export default {
  name: 'TokenGame',
  data() {
    return {
      message: '',
      token: '',
    };
  },
  mounted() {
    this.message = 'Your friend challanged you to a battle? Join now and defeat them!';
    EventBus.$on('receive-token', (data) => {
      this.message = 'Share this link with your opponent.';
      this.token = data.session;
    });
  },
  methods: {
    joinGame(link) {
      JoinGame.joinLink(link)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.body-token {
  position: relative;
  width: 30%;
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
  padding-bottom: 5%;
}

.body-token .form .token-input {
  margin-bottom: 2%;
}

.body-token .form label {
  color: white;
  font-size: 12px;
  padding-bottom: 1%;
  padding-left: 10px;
}

.body-token .form input {
  display: block;
  width: 90%;
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
