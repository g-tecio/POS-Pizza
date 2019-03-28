<template>
  <div class="md-5"> 
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" color="#CC5C00" dark>Create Pizza</v-btn>
        <v-card>
          <v-toolbar dark color="#CC5C00">
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Pizza</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn  dark flat @click="agregarpersonalizada">Save</v-btn>
              
            </v-toolbar-items>
          </v-toolbar>
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12>
                <h3>Select the size</h3>
              </v-flex >
              <v-flex xs6 sm6 md4>
              <v-radio-group v-model="size" :mandatory="false">
                <v-radio label="Small" color=#7D3900 value="Small" ></v-radio>
                <v-radio label="Medium" color=#7D3900 value="Medium"  ></v-radio>
                <v-radio label="Large" color=#7D3900 value="Large"  ></v-radio>
                
              </v-radio-group>
              </v-flex>
              <v-flex xs6 sm6 md4 >
                <v-img
                  src="https://papajohns.cr/images/uploads/image-card-pizza-create.jpg"
                  aspect-ratio="1.68"
                ></v-img>
                </v-flex>
                <v-flex xs6 sm6 md4 class="ingredientes  mt-auto  mb-auto">
                Arma tu pizza a tu gusto con hasta cuatro ingredientes sin costo adicional
               </v-flex>
            </v-layout>
          </v-container>
          <v-divider></v-divider>
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 sm4 md4>
                  <h2>Pizza Toppings</h2>
                  <v-checkbox
                    v-model="ex4"
                    label="Sliced Pepperoni"
                    color=#7D3900
                    value="pepperoni"
                   
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Pre-Cooked Bacon Pieces"
                    color=#7D3900
                    value="bacon"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Mushroom"
                    color=#7D3900
                    value="mushroom"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Steak"
                    color=#7D3900
                    value="steack"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Pineapple"
                    color=#7D3900
                    value="pineaple"
                    hide-details
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <h2>Cheeses</h2>
                  <v-checkbox
                    v-model="ex4"
                    label="Parmesan Cheese"
                    color=#7D3900
                    value="parmesan"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Mozzarella Cheese"
                    color=#7D3900
                    value="mozarella"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Asiago Cheese"
                    color=#7D3900
                    value="asiago"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Cheddar Cheese"
                    color=#7D3900
                    value="cheddar"
                    hide-details
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <h2>Others</h2>
                  <v-checkbox v-model="ex4" label="Onion" color=#7D3900 value="onion" hide-details></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Olives"
                    color=#7D3900
                    value="olives"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Chorizo"
                    color=#7D3900
                    value="chorizo"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="ex4"
                    label="Sausage"
                    color=#7D3900
                    value="sausage"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox v-model="ex4" label="Corn" color=#7D3900 value="corn" hide-details></v-checkbox>
                  
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-container fluid grid-list-md text-xs-center>
      <v-layout fluid row wrap>
        <v-flex fluid xs9 class="scroll">
          <v-layout fluid row wrap>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://stmed.net/sites/default/files/pizza-wallpapers-28292-8906294.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto " >Pizza Hawaiana</h3>
                    <div class= "txt ml-auto">Pizza que contiene una base de queso fundido y tomate con jamón y piña</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div class="margin1">
                    <v-btn outline color=#7D3900 @click="agregarHawaianaChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarHawaianaMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarHawaianagrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card >
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/22/668836/5d9a0d0d66a1a206ffb0c1e14e03ab08.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Pizza Mexicana</h3>
                    <div class= "txt ml-auto"> Los ingredientes son tomate, aguacate, frijoles, jalapeños, carne picada y queso cheddar</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div class="margin1">
                    <v-btn outline color=#7D3900 @click="agregarMexicanaChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarMexicanaMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarMexicanaGrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="http://wallpapersdsc.net/wp-content/uploads/2015/11/Pizza_Wallpaper7.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Pizza Peperoni</h3>
                    <div class= "txt ml-auto">Receta con salsa de tomate, orégano, queso y pepperoni sobre una masa precocinada para una comida fácil de entre semana.</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div>
                    <v-btn outline color=#7D3900 @click="agregarPeperoniChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarPeperoniMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarPeperoniGrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="http://images4.fanpop.com/image/photos/20400000/PIZZA-pizza-20461190-420-268.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto">Pizza Carnes Frias</h3>
                    <div class= "txt ml-auto">La pizza para los amantes de la carne.

Salami, pepperoni, jamón, finas hierbas</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div class="margen">
                    <v-btn outline color=#7D3900 @click="agregarCFChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarCFMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarCFGrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://lh3.googleusercontent.com/Nrqq6e9QS8ROEKq3NnqcfNwMe6YPAaJGNWZuM2CI8L8mnLF2tkVdULPmnjHerH-9gQz1xJLbhg=w640-h400-e365"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Pizza Especial</h3>
                    <div class= "txt ml-auto">La especialidad de la casa, disfruta de una deliciosa preparacion avase de extra queso, champiñones, carnes frias y especias</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div class="mb-auto">
                    <v-btn outline color=#7D3900 @click="agregarEspecialChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarEspecialMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarEspecialGrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://stmed.net/sites/default/files/pizza-wallpapers-28292-8906294.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Pizza Vegetariana</h3>
                    <div class= "txt ml-auto">El sabor de las verduras al horno mezcladas con finas hiervas y el queso derretido hacen que cada bocado nos haga subir al cielo.</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div>
                    <v-btn outline color=#7D3900 @click="agregarVegetarianaChica">Chica</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarVegetarianaMediana">Mediana</v-btn>
                    <v-btn outline color=#7D3900 @click="agregarVegetarianaGrande">Grande</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
                <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://www.wallpaperup.com/uploads/wallpapers/2015/12/28/866518/4e25d109ed05d5e022e910d535b94b93-700.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Refrescos</h3>
                    <div class= "txt ml-auto">Añade una resfrecante bebida para acompañer tu comida</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div class="margin2">
                   <v-btn outline color=#7D3900 @click="agregarRefresco">Agregar</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
             <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="http://2.bp.blogspot.com/-FmgZk3ufWnY/VM-QVUmGsDI/AAAAAAABng0/BkbHiWATL2c/s1600/2015-01-29%2B14.29.28.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Papas</h3>
                    <div class= "txt ml-auto">Papas al horno finamente picadas en forma de gajos aderezadas con especias y un toque picante</div>
                  </div >
                </v-card-title>
                <v-card-actions>
                  <div class="margin1">
                   <v-btn outline color=#7D3900 @click="agregarPapas">Agregar</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs6 sm6 md4>
              <v-card height="330">
                <v-img
                  src="https://wallpaperstock.net/wallpapers/thumbs1/54025.jpg"
                  aspect-ratio="2.5"
                ></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline ml-auto ">Ensalada</h3>
                    <div class= "txt ml-auto">un plato frío con hortalizas mezcladas, cortadas en trozos y aderezadas, fundamentalmente con sal, aceite vegetal y vinagre</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <div >
                   <v-btn outline color=#7D3900 @click="agregarEnsalada">Agregar</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      
        <v-flex xs3>
          <v-card class="scroll2">
            <v-toolbar color="white" light>
              <v-toolbar-title class="hi">Pedidos de {{name}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
                  <v-list-tile-content sm3 md3>
                    <v-list-tile-title>{{ item.pizza }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.tamaño }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-list-tile-action-text>Cantidad: {{ item.cantidad }}</v-list-tile-action-text>
                    <v-list-tile-action-text>Precio Unitario: ${{ item.precio }}</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>

                <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
              </template>
            </v-list>
          </v-card>
          <v-toolbar>
            <p>total a pagar : ${{preciototal}}</p>
            <v-btn color=#CC5C00 dark small absolute bottom right @click="addtoapi">Ordenar Pedido
            </v-btn>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
var cantidadhg = 0;
var cantidadhm = 0;
var cantidadhc = 0;

var cantidadmc = 0;
var cantidadmm = 0;
var cantidadmg = 0;

var cantidadpc = 0;
var cantidadpm = 0;
var cantidadpg = 0;

var cantidadcfc = 0;
var cantidadcfm = 0;
var cantidadcfg = 0;

var cantidadec = 0;
var cantidadem = 0;
var cantidadeg = 0;

var cantidadvc = 0;
var cantidadvm = 0;
var cantidadvg = 0;

var cantidadpersoc = 0;
var cantidadpersom = 0;
var cantidadpersog = 0;

var cantidadr =0;
var cantidadpapas =0;
var cantidadensa =0;

var indicehc=0;
var indicehm=0;
var indicehg=0;

var indicemc=0;
var indicemm=0;
var indicemg=0;

var indicepc=0;
var indicepm=0;
var indicepg=0;

var indicecfc=0;
var indicecfm=0;
var indicecfg=0;

var indiceec=0;
var indiceem=0;
var indiceeg=0;

var indicevc=0;
var indicevm=0;
var indicevg=0;

var indicepersoc=0;
var indicepersom=0;
var indicepersog=0;

var indicer=0;
var indicepapas=0;
var indiceensa=0;


var indice=0;

var cantidadPerzonalizada =0;

var pedididopizzas=[];
export default {
  props: ["name"],
  name: "home",
  pizza: "",
  tamaño: "",
  cantidad: "",
  data() {
    return {
      dialog: false,
      notifications: false,
      props: ["name"],
      size:"",
      togglepepperoni:false,

      widgets: false,
      ex4: [],
      preciototal: 0,
      precio: "",
      total: 0,
      card_text: "Pizza Tropical Con Jamon, Piña, Peperoni",
      card_text1: "Ingredientes Mexicanos",
      items: []
    };
  },
 methods: {
      agregarHawaianagrande()
      {
        if(cantidadhg == 0){
          cantidadhg++
       this.total= 130
       this.preciototal=this.preciototal+this.total
       this.pizza="Hawaiana"
       this.tamaño="Grande"
       this.precio="130"       
      this.cantidad=cantidadhg
      this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicehg=indice
      indice++
     
       }
       else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Hawaiana" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadhg++
         this.total= 130
         this.preciototal=this.preciototal+this.total
         this.pizza="Hawaiana"
         this.tamaño="Grande"
         this.precio="130"       
         this.cantidad=cantidadhg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indicehg]=this.cantidad+" "+this.pizza+" "+this.tamaño
       }
      },
       agregarHawaianaMediana()
      {
        if(cantidadhm == 0){
          cantidadhm++
       this.total= 110
       this.preciototal=this.preciototal+this.total
       this.pizza="Hawaiana"
       this.tamaño="Mediana"
       this.precio="110"       
       this.cantidad=cantidadhm
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicehm=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Hawaiana" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadhm++
         this.total= 110
         this.preciototal=this.preciototal+this.total
         this.pizza="Hawaiana"
         this.tamaño="Mediana"
         this.precio="110"       
         this.cantidad=cantidadhm
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
         pedididopizzas[indicehm]=this.cantidad+" "+this.pizza+" "+this.tamaño
         
       }
      },
       agregarHawaianaChica()
      {
        if(cantidadhc == 0){
          cantidadhc++
       this.total= 100
       this.preciototal=this.preciototal+this.total
       this.pizza="Hawaiana"
       this.tamaño="Chica"
       this.precio="100"       
       this.cantidad=cantidadhc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicehc=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Hawaiana" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadhc++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Hawaiana"
         this.tamaño="Chica"
         this.precio="100"       
         this.cantidad=cantidadhc
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicehc]=this.cantidad+" "+this.pizza+" "+this.tamaño
      
         
       }
      },     
      agregarMexicanaChica()
      {
        if(cantidadmc == 0){
          cantidadmc++
       this.total= 100
       this.preciototal=this.preciototal+this.total
       this.pizza="Mexicana"
       this.tamaño="Chica"
       this.precio="100"       
       this.cantidad=cantidadmc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicemc=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Mexicana" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadmc++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Mexicana"
         this.tamaño="Chica"
         this.precio="100"       
         this.cantidad=cantidadmc
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
        pedididopizzas[indicemc]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
         
       }
      },
            agregarMexicanaMediana()
      {
        if(cantidadmm == 0){
          cantidadmm++
       this.total= 110
       this.preciototal=this.preciototal+this.total
       this.pizza="Mexicana"
       this.tamaño="Mediana"
       this.precio="110"       
       this.cantidad=cantidadmm
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
        pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicemm=indice
      indice++
       }
      else
       {
           this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Mexicana" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadmm++
         this.total= 110
         this.preciototal=this.preciototal+this.total
         this.pizza="Mexicana"
         this.tamaño="Mediana"
         this.precio="110"       
         this.cantidad=cantidadmm
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicemm]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
         
       }
      },
            agregarMexicanaGrande()
      {
        if(cantidadmg == 0){
          cantidadmg++
       this.total= 130
       this.preciototal=this.preciototal+this.total
       this.pizza="Mexicana"
       this.tamaño="Grande"
       this.precio="130"       
       this.cantidad=cantidadmg
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
 pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicemg=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Mexicana" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadmg++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Mexicana"
         this.tamaño="Grande"
         this.precio="130"       
         this.cantidad=cantidadmg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indicemg]=this.cantidad+" "+this.pizza+" "+this.tamaño
  
         
         
       }
      },
            agregarPeperoniChica()
      {
        if(cantidadpc == 0){
          cantidadpc++
       this.total= 100
       this.preciototal=this.preciototal+this.total
       this.pizza="Peperoni"
       this.tamaño="Chica"
       this.precio="100"       
       this.cantidad=cantidadpc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicepc=indice
      indice++
         
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Peperoni" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadpc++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Peperoni"
         this.tamaño="Chica"
         this.precio="100"       
         this.cantidad=cantidadpc
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicepc]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
         
         
       }
      },
            agregarPeperoniMediana()
      {
        if(cantidadpm == 0){
          cantidadpm++
       this.total= 110
       this.preciototal=this.preciototal+this.total
       this.pizza="Peperoni"
       this.tamaño="Mediana"
       this.precio="110"       
       this.cantidad=cantidadpm
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
   pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicepm=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Peperoni" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadpm++
         this.total= 110
         this.preciototal=this.preciototal+this.total
         this.pizza="Peperoni"
         this.tamaño="Mediana"
         this.precio="110"       
         this.cantidad=cantidadpm
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicepm]=this.cantidad+" "+this.pizza+" "+this.tamaño
      
         
       }
      },
            agregarPeperoniGrande()
      {
        if(cantidadpg == 0){
          cantidadpg++
       this.total= 130
       this.preciototal=this.preciototal+this.total
       this.pizza="Peperoni"
       this.tamaño="Grande"
       this.precio="130"       
       this.cantidad=cantidadpg
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
  pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicepg=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Peperoni" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadpg++
         this.total= 130
         this.preciototal=this.preciototal+this.total
         this.pizza="Peperoni"
         this.tamaño="Grande"
         this.precio="130"       
         this.cantidad=cantidadpg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
     pedididopizzas[indicepg]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
         
       }
      },
            agregarCFChica()
      {
        if(cantidadcfc == 0){
          cantidadcfc++
       this.total= 100
       this.preciototal=this.preciototal+this.total
       this.pizza="Carnes Frias"
       this.tamaño="Chica"
       this.precio="100"       
       this.cantidad=cantidadcfc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicecfc=indice
      indice++
         
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Carnes Frias" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadcfc++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Carnes Frias"
         this.tamaño="Chica"
         this.precio="100"       
         this.cantidad=cantidadcfc
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
     
         pedididopizzas[indicecfc]=this.cantidad+" "+this.pizza+" "+this.tamaño
         
       }
      },
                  agregarCFMediana()
      {
        if(cantidadcfm == 0){
          cantidadcfm++
       this.total= 110
       this.preciototal=this.preciototal+this.total
       this.pizza="Carnes Frias"
       this.tamaño="Mediana"
       this.precio="110"       
       this.cantidad=cantidadcfm
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicecfm=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Carnes Frias" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadcfm++
         this.total= 110
         this.preciototal=this.preciototal+this.total
         this.pizza="Carnes Frias"
         this.tamaño="Mediana"
         this.precio="110"       
         this.cantidad=cantidadcfm
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
         pedididopizzas[indicecfm]=this.cantidad+" "+this.pizza+" "+this.tamaño       
       }
      },
                  agregarCFGrande()
      {
        if(cantidadcfg == 0){
          cantidadcfg++
       this.total= 130
       this.preciototal=this.preciototal+this.total
       this.pizza="Carnes Frias"
       this.tamaño="Grande"
       this.precio="130"       
       this.cantidad=cantidadcfg
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicecfg=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Carnes Frias" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadcfg++
         this.total= 130
         this.preciototal=this.preciototal+this.total
         this.pizza="Carnes Frias"
         this.tamaño="Grande"
         this.precio="130"       
         this.cantidad=cantidadcfg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indicecfg]=this.cantidad+" "+this.pizza+" "+this.tamaño
     
         
       }
      },
                  agregarEspecialChica()
      {
        if(cantidadec == 0){
          cantidadec++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Especial"
       this.tamaño="Chica"
       this.precio="115"       
       this.cantidad=cantidadec
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
     pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indiceec=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Especial" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadec++
         this.total= 115
         this.preciototal=this.preciototal+this.total
         this.pizza="Especial"
         this.tamaño="Chica"
         this.precio="115"       
         this.cantidad=cantidadec
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indiceec]=this.cantidad+" "+this.pizza+" "+this.tamaño
     
         
       }
      },
                  agregarEspecialMediana()
      {
        if(cantidadem == 0){
          cantidadem++
       this.total= 130
       this.preciototal=this.preciototal+this.total
       this.pizza="Especial"
       this.tamaño="Mediana"
       this.precio="130"       
       this.cantidad=cantidadem
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indiceem=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Especial" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadem++
         this.total= 130
         this.preciototal=this.preciototal+this.total
         this.pizza="Especial"
         this.tamaño="Mediana"
         this.precio="130"       
         this.cantidad=cantidadem
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
    pedididopizzas[indiceem]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
       }
      },
                        agregarEspecialGrande()
      {
        if(cantidadeg == 0){
          cantidadeg++
       this.total= 140
       this.preciototal=this.preciototal+this.total
       this.pizza="Especial"
       this.tamaño="Grande"
       this.precio="140"       
       this.cantidad=cantidadeg
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indiceeg=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Especial" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadeg++
         this.total= 140
         this.preciototal=this.preciototal+this.total
         this.pizza="Especial"
         this.tamaño="Grande"
         this.precio="140"       
         this.cantidad=cantidadeg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
          pedididopizzas[indiceeg]=this.cantidad+" "+this.pizza+" "+this.tamaño
     
         
       }
      },
                        agregarVegetarianaChica()
      {
        if(cantidadvc == 0){
          cantidadvc++
       this.total= 90
       this.preciototal=this.preciototal+this.total
       this.pizza="Vegetariana"
       this.tamaño="Chica"
       this.precio="90"       
       this.cantidad=cantidadvc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
         pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicevc=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Vegetariana" && actualItem.tamaño=="Chica")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadvc++
         this.total= 90
         this.preciototal=this.preciototal+this.total
         this.pizza="Vegetariana"
         this.tamaño="Chica"
         this.precio="90"       
         this.cantidad=cantidadvc
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
         pedididopizzas[indicevc]=this.cantidad+" "+this.pizza+" "+this.tamaño
   
       }
      },
       agregarVegetarianaMediana()
      {
        if(cantidadvm == 0){
          cantidadvm++
       this.total= 100
       this.preciototal=this.preciototal+this.total
       this.pizza="Vegetariana"
       this.tamaño="Mediana"
       this.precio="100"       
       this.cantidad=cantidadvm
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
 pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicevm=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Vegetariana" && actualItem.tamaño=="Mediana")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadvm++
         this.total= 100
         this.preciototal=this.preciototal+this.total
         this.pizza="Vegetariana"
         this.tamaño="Mediana"
         this.precio="100"       
         this.cantidad=cantidadvm
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
       pedididopizzas[indicevm]=this.cantidad+" "+this.pizza+" "+this.tamaño
    
       }
      },
                             agregarVegetarianaGrande()
      {
        if(cantidadvg == 0){
          cantidadvg++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Vegetariana"
       this.tamaño="Grande"
       this.precio="115"       
       this.cantidad=cantidadvg
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño
      indicevg=indice
      indice++
    }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Vegetariana" && actualItem.tamaño=="Grande")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadvg++
         this.total= 115
         this.preciototal=this.preciototal+this.total
         this.pizza="Vegetariana"
         this.tamaño="Grande"
         this.precio="115"       
         this.cantidad=cantidadvg
         this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
 pedididopizzas[indicevg]=this.cantidad+" "+this.pizza+" "+this.tamaño
 
        }
        },                       
       agregarPersonalizadachica()
      {
        if(cantidadpersoc == 0){
          cantidadpersoc++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Small"
       this.precio="115"       
       this.cantidad=cantidadpersoc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersoc=indice
      indice++
      this.dialog=false
    }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza==="Personalizada" && actualItem.tamaño==="Small")
             {
               arr.splice(index, index+1)
             }
           }
         )
           cantidadpersoc++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Small"
       this.precio="115"       
       this.cantidad=cantidadpersoc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersoc=indice
      indice++
       this.dialog=false
        }
        },
                                     agregarPersonalizadamediana()
      {
        if(cantidadpersom == 0){
          cantidadpersom++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Medium"
       this.precio="115"       
       this.cantidad=cantidadpersom
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersom=indice
      indice++
       this.dialog=false
    }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza==="Personalizada" && actualItem.tamaño==="Medium")
             {
               arr.splice(index, index+1)
             }
           }
         )
           cantidadpersom++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Medium"
       this.precio="115"       
       this.cantidad=cantidadpersom
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersoc=indice
      indice++
       this.dialog=false
        }
        },
      agregarPersonalizadagrande()
      {
        if(cantidadpersog == 0){
          cantidadpersog++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Large"
       this.precio="115"       
       this.cantidad=cantidadpersog
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersoc=indice
      indice++
       this.dialog=false
    }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza==="Personalizada" && actualItem.tamaño==="Large")
             {
               arr.splice(index, index+1)
             }
           }
         )
           cantidadpersog++
       this.total= 115
       this.preciototal=this.preciototal+this.total
       this.pizza="Personalizada"
       this.tamaño="Large"
       this.precio="115"       
       this.cantidad=cantidadpersoc
       this.items.push({pizza:this.pizza,tamaño:this.tamaño,precio:this.precio,cantidad:this.cantidad})
pedididopizzas[indice]=this.cantidad+" "+this.pizza+" "+this.tamaño+" "+this.ex4
      indicepersoc=indice
      indice++
       this.dialog=false
        }
        },
        agregarpersonalizada()
        {
          if(this.size==="Small")
          {
            this.agregarPersonalizadachica();
          }
           if(this.size==="Medium")
          {
            this.agregarPersonalizadamediana();
          }
           if(this.size==="Large")
          {
            this.agregarPersonalizadagrande();
          } 
        },
     
      
      addtoapi()
      {
       
      var max=10000;
        var min=0;
        var random=Math.floor(Math.random()*(max-min)) +min ;
        var randomstring=random
        if(random<1000 && random>99)
        {
            randomstring="0"+random
        }
        if(random<100 && random>9)
        {
            randomstring="00"+random
        }
        if(random<10)
        {
            randomstring="000"+random
        }
        let pedido=
        { 
          
          pizzaType:pedididopizzas.toString(),
          code:randomstring.toString(),
          pizzaSize:this.tamaño,
          pizzaStatus:"pending",
          price : this.preciototal.toString(),
          name: this.name
         

        }
        axios.post('https://s9jxgvuilh.execute-api.us-east-2.amazonaws.com/testing/neworderpizza', pedido)
        .then((response)=>
        {
          console.log(response);
        })
        .catch((error) =>
        {
          console.log(error);
        });
        this.$router.push({ name: 'Estatus', params: { code:randomstring.toString() }})

      },
      agregarRefresco()
      {
        if(cantidadr == 0){
          cantidadr++
       this.total= 27
       this.preciototal=this.preciototal+this.total
       this.pizza="Refresco"
       this.precio="27"       
       this.cantidad=cantidadr
       this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
   pedididopizzas[indice]=this.cantidad+" "+this.pizza
      indicer=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Refresco")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadr++
         this.total= 27
         this.preciototal=this.preciototal+this.total
          this.pizza="Refresco"
       this.precio="27"      
         this.cantidad=cantidadr
         this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicer]=this.cantidad+" "+this.pizza
      
         
       }
      },
       agregarPapas()
      {
        if(cantidadpapas == 0){
          cantidadpapas++
       this.total= 30
       this.preciototal=this.preciototal+this.total
       this.pizza="Papas"
       this.precio="30"       
       this.cantidad=cantidadpapas
       this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
   pedididopizzas[indice]=this.cantidad+" "+this.pizza
      indicepapas=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Papas")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadpapas++
         this.total= 30
         this.preciototal=this.preciototal+this.total
          this.pizza="Papas"
       this.precio="30"      
         this.cantidad=cantidadpapas
         this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicepapas]=this.cantidad
      
         
       }
      },
       agregarEnsalada()
      {
        if(cantidadensa == 0){
          cantidadensa++
       this.total= 45
       this.preciototal=this.preciototal+this.total
       this.pizza="Ensalada"
       this.precio="45"       
       this.cantidad=cantidadensa
       this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
   pedididopizzas[indice]=this.cantidad+" "+this.pizza
      indicer=indice
      indice++
       }
      else
       {
         this.items.map(
           function(actualItem, index , arr){
             if(actualItem.pizza=="Ensalada")
             {
               arr.splice(index, index+1)
             }
           }
         )
         cantidadpm++
         this.total= 45
         this.preciototal=this.preciototal+this.total
          this.pizza="Ensalada"
       this.precio="45"      
         this.cantidad=cantidadr
         this.items.push({pizza:this.pizza,precio:this.precio,cantidad:this.cantidad})
      pedididopizzas[indicer]=this.cantidad+" "+this.pizza
      
         
       }
      },
      },
         
        computed: {
     result: function () {
      return this.preciototal=this.preciototal + this.total
    },

  
  }
  }
</script>

<style>
.scroll
{
 
  max-height : 600px;
  overflow: scroll;
  margin-bottom: 30px;

}
.scroll2
{
  
  max-height : 500px;
  overflow: scroll;

}
.limite
{
  max-height: 200px;
  max-width: 200px;
  }
  .hi{
    color: #CC5C00;
  }
  h3{
    color: #CC5C00;
  }
  .headline
  {
    text-align: justify;
    font-size: 5px 
  }
  .txt
  {
    font-size: 17px;
    text-align: justify;
    
  }
  .margen
  {
    padding-bottom: 0px;
    padding-top: 20px;
  }
  .margin1
  {
    padding-top: 7%
  }
  .margin2
  {
    padding-top: 14%
  }
  .ingredientes
  {
    text-align: center;
    font-size: 20px;
    font: sans-serif;
  }
  .theme--light.v-label {
    color: black;
}
</style>
