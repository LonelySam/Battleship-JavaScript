<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
    <router-view/>
  </div>
</template>

<style>
html, body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  background-color: #0F2C44;
  /* font-family: 'Quattrocento Sans', sans-serif; */
  /* font-family: 'Noto Sans', sans-serif; */
  font-family: 'Exo', sans-serif;
  /* height: 750px; */
  /* max-height: 750px; */
  height: 100%;
  width: 100%;
}
</style>
