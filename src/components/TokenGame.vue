<template lang="html">
  <div class="body-token">
    <div class="form">
      <p>{{message}}</p>
      <div class="token-input">
        <label>Challange</label>
        <input type="text" name="token" v-bind:value=token>
      </div>
      <button @click="joinGame(token)" v-if="seenJoin">Join</button>
      <button @click="setupShips()" v-if="seenSetup">Setup ships!</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus';
import JoinGame from '@/services/JoinGame';

export default {
  name: 'TokenGame',
  data () {
    return {
      message: '',
      token: '',
      seenSetup: false,
      seenJoin: true,
      creatorId: '',
      createdGameId: '',
    };
  },
  mounted () {
    this.message =
      'Your friend challanged you to a battle? Join now and defeat them!';
    EventBus.$on('receive-token', data => {
      this.message = 'Share this link with your opponent.';
      this.seenSetup = true;
      this.seenJoin = false;
      this.token = data.session;
      this.creatorId = data.playerId;
      this.createdGameId = data.gameId;
    });
  },
  methods: {
    joinGame (link) {
      JoinGame.joinLink(link)
        .then(response => {
          console.log(response.data);
          this.$router.push({
            name: 'setupShip',
            params: {
              gameId: response.data.gameId,
              playerId: response.data.playerId,
            },
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    setupShips () {
      this.$router.push({
        name: 'setupShip',
        params: { gameId: this.createdGameId, playerId: this.creatorId },
      });
    },
  },
};
</script>

<style>
.body-token {
  position: relative;
  width: 30%;
  height: 45%;
  float: left;
}

.body-token .form {
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
  background-color: #0f2c44;
  color: white;
  width: 30%;
}
</style>
