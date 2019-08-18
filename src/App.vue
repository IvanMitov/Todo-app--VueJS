<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  background-color: rgba(153,202,255,.3);
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
  a {
    font-weight: bold;
    color: #A6B0FA;
    &.router-link-exact-active {
      color: #42b983;
    }
    text-decoration: none;
  }
}
</style>
