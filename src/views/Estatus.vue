<template>
    <div>
      <h2 class="display-1 font-weight-medium">The state of your pizza is:</h2>
          <br>
    <v-layout row wrap>
         
      <v-flex xs6 child-flex v-for="orden in orden" :key="orden.object">
          
          <h3 class="headline font-weight-regular">Nombre: <span class="font-weight-thin"> {{orden.name}}</span></h3>
          <br>
          <h3 class="headline font-weight-regular">Pedido: <span class="font-weight-thin">{{orden.pizzaType}}</span></h3>
          <br>
          <h3 class="headline font-weight-regular">Precio: <span class="font-weight-thin">${{orden.price}}</span></h3>
          <br>
          <h3 class="headline font-weight-regular">Estado: <span class="font-weight-thin">{{orden.pizzaStatus}}</span></h3>
           <br>
          <h3 class="headline font-weight-regular">Número de orden: <span class="font-weight-thin">{{orden.code}}</span></h3>
        
          
      </v-flex>
      <v-flex xs1></v-flex>
      <v-flex xs5  child-flex v-for="orden in orden" :key="orden.object">
          <Imagen :status="orden.pizzaStatus"></Imagen>   
      </v-flex>
      
    </v-layout>
    <v-flex xs12 child-flex v-for="orden in orden" :key="orden.object">
          <Temporizador class="tempo" :time="orden.date" :status="orden.pizzaStatus"> </Temporizador>
          <sonido :pizzaestatus="orden.pizzaStatus"></sonido>
          
      </v-flex>
    </div>
</template>
<script>
import Temporizador from '../components/Temporizador.vue';
import Imagen from '../components/Imagstatus.vue';
import Sonido from '../components/sonido.vue';
import axios from "axios";
import { timeout } from 'q';
var estatus ="";
export default {
   components:{
    Temporizador,
    Sonido,
    Imagen

  },
  name:'Estatus',
  props:['code'],
  data() {
    return {
       orden: [],
       status:""
    }
  },
  created()
  {
    var self=this;
    setInterval(function(){
   self.mounted();
    },1000);
   
  },
  methods:{
  mounted(){
    var self=this;
    axios.get(`https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/getorderbycode?code=${(this.code)}`)
  
     .then( function(res){
      
      self.orden=res.data.Items;
   
      
    },)
    .catch( function(error){
    
    })
  }
  
},

}

</script>
<style>
h2{
    text-align: center;
}
h3{
    margin-left: 100px;
    color:black;
    
}
.tempo
{
  text-align: center;
}
.display-1
{
  color:black;
  
}
</style>
