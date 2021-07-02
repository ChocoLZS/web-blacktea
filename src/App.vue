<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: Roboto;
  src: url(~@/assets/fonts/Roboto-Regular.ttf) format("ttf");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: Roboto, "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
body {
  min-height: 100vh;
  min-width: 480px;
}
</style>
