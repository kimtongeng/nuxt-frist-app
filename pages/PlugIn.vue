<template>
  <div>
    <h1>this is plugin page</h1>
    <p>This is message from plugin {{ mes }}</p>
    <input type="text" v-model="mes.value">
  </div>
</template>

<script >
import { useNuxtApp } from 'nuxt/app';
import { ref } from 'vue';
export default {

  setup(){
    const mes = ref("")
    
    const nuxtApp = useNuxtApp();
    mes.value = nuxtApp.$useCreateMessage(mes.value).message
    
    return {
      mes
    }
  },
 
  
}
  
</script>

<style lang="scss" scoped>

</style>