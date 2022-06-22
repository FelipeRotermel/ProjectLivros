<script>
</script>
<template>
  <div class="container-fluid" id="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="navbar-brand" to="/"><h3>Books Everywhere!</h3></RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="navbar-brand" to="/login"><h4>Login</h4></RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="navbar-brand" to="/cadastrolivros"><h4>Cadastro de Livros</h4></RouterLink>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-brand h3 {
  margin-top: 9px;
  transition: 0.25s;
}

.navbar-brand h3:hover {
  color: white;
}

.navbar-brand h4 {
  margin-top: 13px;
  margin-left: 30px;
  color: white;
  transition: 0.25s;
}

.navbar-brand h4:hover {
  transform: scale(1.1);
}

#NavBar {
  background-color: #73048f;
  height: 75px;
}

</style>