export default defineNuxtRouteMiddleware((to,from)=>{
    const authPage = ['/','/home','/about'];
    const isAuth = false;
    if(authPage.includes(to.fullPath)){
      if(!isAuth){
        return navigateTo("/login");
      }
    }
 
 
})