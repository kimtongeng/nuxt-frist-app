import { defineNuxtPlugin } from "nuxt/app";
import { computed } from "vue";

export default defineNuxtPlugin((nuxtApp)=>{
  const createMessage = (name:string) => {
    // Return a computed property that generates a message
    const message = computed(() => `Hello, ${name}! Welcome to our site.`);

    return {
      message
    };
  };
  return {
    provide:{
      useCreateMessage : createMessage
    }
  }
})