<template>
    <v-flex >
         <v-img v-if="status==='Prepared'"
                  src="https://previews.123rf.com/images/belchonock/belchonock1801/belchonock180110020/93086394-chef-preparando-pizza-en-mesa-de-m%C3%A1rmol-closeup.jpg"
                  aspect-ratio="2.5"
                ></v-img>
                 <v-img v-if="status==='Oven'"
                  src="https://allopizza.es/wp-content/uploads/2017/08/Horno_piedra_oscurecida.png"
                  aspect-ratio="2.5"
                ></v-img>
                   <v-img v-if="status==='Cutting'"
                  src="https://previews.123rf.com/images/dolgachov/dolgachov1705/dolgachov170501381/77891738-cocinar-manos-cortando-pizza-en-pedazos-en-la-pizzer%C3%ADa.jpg"
                  aspect-ratio="2.5"
                ></v-img>
                 <v-img v-if="status==='Serving(Finished)'"
                 src="https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg"
                  aspect-ratio="2.5"
                ></v-img>
    </v-flex>
</template>
<script>
export default {
    
    props:['status'],
data() {
    return {
       
       
    }
  }
 
   
}
</script>
