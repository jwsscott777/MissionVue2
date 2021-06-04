<template>
  <div id="nav">
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc02a;
  background-color: #000205;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #1379df;
}

#nav a.router-link-exact-active {
  color: #ffc02a;
}
h4 {
  font-size: 20px;
}
</style>
