<template>
    <div>
 <v-progress-circular class="ml-auto"
       v-if="value<50"
       :rotate="-90"
       :size="100"
       :width="15"
       :value="value"
       color="green"
     >
   {{minutos}} : {{segundos}}
    </v-progress-circular>
    <v-progress-circular class="ml-auto"
       v-if="value>=50 && value<75"
       :rotate="-90"
       :size="100"
       :width="15"
       :value="value"
       color="yellow"
     >
   {{minutos}} : {{segundos}}
    </v-progress-circular>
    <v-progress-circular class="ml-auto"
       v-if="value>75"
       :rotate="-90"
       :size="100"
       :width="15"
       :value="value"
       color="red"
     >
   {{minutos}} : {{segundos}}
    </v-progress-circular>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name: 'tempo',
    props:
    [
      'time',
      'status'

    ]
    ,
    data(){
        var vm=this
        return{
        
          countDowndate : new Date(this.time),
          mins : 0,
          seg : 0,
          minutos:0,
          segundos:0,
          distance:0,
          tiempo : this.time,
          value:0
        
        }
    },
    
 
    mounted()
    {   var min = parseInt(this.time);
        var vm=this
          vm.countDowndate.setTime(min+1800000)
          var now = new Date().getTime();
           vm.distance = vm.countDowndate.getTime()-now;
           vm.value=(100-((vm.distance/1800000)*100))
            if(vm.distance<=0)
           {
             vm.value=100
           }
           if(this.status==="Serving(Finished)")
           {
             vm.value=100
            vm.seg=0
            vm.mins=0
               if(vm.mins < 10)
        {
              vm.minutos="0"+vm.mins
        }
           if(vm.seg < 10)
        {
          vm.segundos="0"+vm.seg
        }
           }
          else{
      var x = setInterval(function()
      { 
           if(this.status==="Serving(Finished)")
           {
             vm.value=100
            vm.seg=0
            vm.mins=0
               if(vm.mins < 10)
        {
              vm.minutos="0"+vm.mins
        }
           if(vm.seg < 10)
        {
          vm.segundos="0"+vm.seg
        }
           }else{
        var now = new Date().getTime();

        var pizzatime =vm.countDowndate.getTime();
        vm.distance = pizzatime-now;
         vm.mins = Math.floor((vm.distance % (1000 * 60 * 60)) / (1000 * 60));
         vm.minutos=vm.mins
        vm.seg = Math.floor((vm.distance %(1000*60))/(1000));
        vm.segundos=vm.seg
     
        if(vm.mins < 0)
        {
              vm.mins=0
        }
           if(vm.seg < 0)
        {
          vm.seg=0
        }
          if(vm.mins < 10)
        {
              vm.minutos="0"+vm.mins
        }
           if(vm.seg < 10)
        {
          vm.segundos="0"+vm.seg
        }
        
         vm.value += 0.05555555555
           }
      },1000);
    
    }   
    }
}
</script>
<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>