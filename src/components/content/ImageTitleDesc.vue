<template>

    <div :class="class">
        <div  class="   text-center">
        <div class="items-center ">
            <img class="rounded-full  " :src="src">
        </div>
        <h4 class="titels-font mt-9 mb-3 " > {{ title }}</h4>
        <p class="mb-12">{{desc}}</p>
    </div>
    </div>
  
</template>
<script>
 export default {
    props:{
        src:String,
        title:String,
        desc:String,
        class:String
    }
 }
</script>
