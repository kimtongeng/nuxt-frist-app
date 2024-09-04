<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NuxtLink class="navbar-brand" to="#">Navbar</NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NuxtLink class="nav-link active" aria-current="page" to="/home">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/plugin">PlugIn</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="#">More</NuxtLink>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>