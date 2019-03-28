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
                    <Temporizador class="ml-auto" :time="orden.date" :status="orden.pizzaStatus"> </Temporizador>
                </v-card-title>
                <v-card-actions>
                  <div>
                      <v-btn  @click="Prepared(orden.id_order)" outline color=#7D3900>Prepared</v-btn>
                      <v-btn  @click="Oven(orden.id_order)" outline color=#7D3900>Oven</v-btn>
                      <v-btn  @click="Cutting(orden.id_order)" outline color=#7D3900>Cutting</v-btn>
                      <v-btn  @click="Serving(orden.id_order)" outline color=#7D3900>Serving</v-btn>  
                  </div>
                </v-card-actions>
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
             <v-img src="https://cdn4.iconfinder.com/data/icons/essential-part-1/32/93-List-256.png"  v-on="on" @click="irafin" ></v-img>
             </template>
             <span>Pedidos</span>
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
import Temporizador from '../components/Temporizador.vue';

export default {
  name:"Cocina",
    components:{
    Temporizador
  },
  
  
  data() {
    return {
       orden: []
    }
  },
  mounted(){
    var self=this;
    axios.get('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/listpendingorders?not=pending&and=Serving(Finished)')
    .then( function(res){
      self.orden=res.data.Items;
      console.log('Data: ', res.data.Items);
    })
    .catch( function(error){
      console.log('Error: ', error);
    })
  },
  methods:{
    Prepared(id_order){
      let updateCommand={
         id_order:id_order,
         pizzaStatus:"Prepared"
      }
      console.log(updateCommand);
      axios.post('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/updatepizzastatus',updateCommand)
      .then((response)=>{
        console.log(response);
        location.reload()
      })
      .catch((error) => {
          console.log(error);
        });

    },
     Oven(id_order){
       let updateCommand={
         id_order:id_order,
         pizzaStatus:"Oven"
      }
      console.log(updateCommand);
      axios.post('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/updatepizzastatus',updateCommand)
      .then((response)=>{
        console.log(response);
        location.reload()
      })
      .catch((error) => {
          console.log(error);
        });
    },
     Cutting (id_order){
       let updateCommand={
         id_order:id_order,
         pizzaStatus:"Cutting"
      }
      console.log(updateCommand);
      axios.post('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/updatepizzastatus',updateCommand)
      .then((response)=>{
        console.log(response);
          location.reload()
      })
      .catch((error) => {
          console.log(error);
        });
    },
     Serving(id_order){
       let updateCommand={
         id_order:id_order,
         pizzaStatus:"Serving(Finished)"
      }
      console.log(updateCommand);
      axios.post('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/updatepizzastatus',updateCommand)
      .then((response)=>{
        console.log(response);
        location.reload()
      })
      .catch((error) => {
          console.log(error);
        });
    },
     iracaja()
     {
       this.$router.push('/checkout')
     },
     irafin()
     {
       this.$router.push('/End')
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

