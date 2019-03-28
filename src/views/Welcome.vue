<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        
      <v-flex xs12  child-flex>
          <h2 class="display-3 font-weight-thin">Welcome!!</h2>
        
      </v-flex>
      
    </v-layout>
    
    <v-layout row wrap>
        <v-layout>
            
        </v-layout>
      <v-flex xs3></v-flex>
      <v-flex xs6>
        <v-layout row >
            
          <v-flex xs10 >
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field   v-model="name" color="#CC5C00"  :rules="nameRules" label="Please Insert Your Name" required @keypress.enter="redirecionar"></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs2>
            
            <v-btn :to="{ name: 'home', params: { name:name }}" fab dark color="#CC5C00"> 
              <v-icon dark>chevron_right</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs3></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
     data (){
       return{
      valid: true,
       name: '',
      nameRules: [
         v => (v && v.length >=3) || 'more that 3 ',
      ]
      }},
      methods:
      {
        redirecionar(){
          console.log(this.name)
          this.$router.push({ name: 'home', params: { name:this.name }})
        }
      }
    
      
}
</script>
<style>
.display-3{
  color: #CC5C00;
}
</style>
