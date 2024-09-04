<template>
  <div>
    <h1>welcome to home page</h1>
    <img src="/2.jpg" alt="">
    <button @click="sayHello">Click me</button>
  
  </div>
</template>

<script>

export default {
  setup(){
    const {sayHello} = useUtils();
   
  
  
    return{

      sayHello,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>