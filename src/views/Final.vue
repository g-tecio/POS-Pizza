<template>
<div class="mt-5">
  <v-container>
   <div id="app">
      <v-app id="inspire">
        <v-layout row fill-height wrap >
    <v-flex xs11 class="scroll">         
              <v-flex xs12 v-for="orden in orden" :key="orden.object" >
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto">Orden de {{orden.name}}</h3>
                    <div>Pedido: {{orden.pizzaType}} </div>
                    <div>Estatus: {{orden.pizzaStatus}} </div>
                    <div>Precio: ${{orden.price}}</div>
                    <div>Nummero Orden: {{orden.code}}</div>
                  </div>
                </v-card-title>
              </v-card>
          </v-flex> 
          </v-flex>

          
          <v-flex xs1 >
            <v-flex class="botones">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
            <v-img  src="https://cdn2.iconfinder.com/data/icons/finance-31/24/finance-21-256.png" v-on="on" @click="iracaja"></v-img>
             </template>
             <span>Caja</span>
             </v-tooltip>              
            </v-flex>
             <v-flex class="botones">
             <v-tooltip top>
              <template v-slot:activator="{ on }">
             <v-img src="https://cdn2.iconfinder.com/data/icons/food-drink-10/24/food-drink-01-256.png"   v-on="on" @click="iracocina"></v-img>
             </template>
             <span>Cocina</span>
             </v-tooltip>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
  </v-container>
</div>
</template>
<script>
import axios from'axios';
export default {
  data() {
    return {
       orden: []
    }
  },
  mounted(){
    var self=this;
    axios.get('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/listpendingorders?pizzaStatus=Serving(Finished)')
    .then( function(res){
      self.orden=res.data.Items;
      console.log('Data: ', res.data.Items);
    })
    .catch( function(error){
      console.log('Error: ', error);
    })
  },
  methods:{
    
     iracocina()
     {
       this.$router.push('/Cocina')
     },
     iracaja()
     {
       this.$router.push('/checkout')
     }
  }
}
</script>
<style>
   .theme--light.application{
    background-color:#ffffff;
  }
  h3{
    color: #CC5C00;
  }
    .botones
  {
    padding-bottom: 20px;
    padding-left: 10px;
  }
  .scroll
{
 
  max-height : 600px;
  overflow: scroll;
  margin-bottom: 30px;
  padding-right: 10px;

}
</style>


