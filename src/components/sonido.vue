<template>
</template>
<script>

export default {
    props:['pizzaestatus'],
    data (){
        return{
    text: '',
    status1:"hola",
    status2:"",
    status3:""
        }
  },
  created()
  {
      var self=this
    
      
      
      setInterval(function(){
    self.playSound();
      },1000)
      
  },
  methods: {
    playSound () {
       if(this.status1===this.pizzaestatus)
       {

       }
       else{
       switch(this.pizzaestatus)
       {
         case "Serving(Finished)":
         var audio = new Audio('http://soundbible.com/grab.php?id=2218&type=mp3');
        audio.play();
        this.status1=this.pizzaestatus
        break;
        case "Prepared":
        var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
        audio.play();
        this.status1=this.pizzaestatus
        break;
        case "Oven":
        var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
        audio.play();
        this.status1=this.pizzaestatus
        break;
         case "Cutting":
        var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
        audio.play();
        this.status1=this.pizzaestatus
        break;
         default:
        var audio = new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
        audio.play();
        this.status1=this.pizzaestatus
        break;

       }      
       }
      }
  } 
}

</script>
<style>

</style>
