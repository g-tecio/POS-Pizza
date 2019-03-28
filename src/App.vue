<template>
  <div id="app">
    <div id="nav">
        <v-toolbar color=#7D0000 app height="100">
        <v-toolbar-title class="headline text-uppercase ml-auto mr-auto mt-auto" >
          <span class="ml-auto"><img  src="./Imgs/Logo_PizzaArriba.png" width="150" height="100"></span>
        </v-toolbar-title>
        
        <router-link to="/">Home</router-link>|
        <router-link to="/checkout">Caja</router-link>|
        <router-link to="/Cocina">Cocina</router-link>|
        <router-link to="/End">Fin</router-link>|
        <router-link to="/Status">Estatus</router-link>
      </v-toolbar>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
}
#nav {
  padding: 50px;
}

#nav a {
  color: #ffffff;
  
}
a{
  padding: 15px;
}
</style>
