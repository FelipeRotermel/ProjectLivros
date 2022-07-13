<script>
</script>
<template>
  <div class="container-fluid fixed-top" id="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="navbar-brand">
              <h3>Books Everywhere!</h3>
            </a>
          </li>
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/">
              <h4>Home</h4>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/cadastrolivros">
              <h4>Cadastro de Livros</h4>
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
              <div class="navbar-brand dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown">Cadastro</div>
            <ul class="dropdown-menu dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
              <li>
                <RouterLink class="dropdown-item" to="/categoria">
                  Categoria
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/editora">
                  Editoras
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/autores">
                  Autores
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/login">
              <h4>Login</h4>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>

* {
  font-weight: bolder;
}

.navbar-brand h3 {
  margin-top: 9px;
  transition: 0.25s;
}

.navbar-brand h3:hover {
  color: white;
}

h4 {
  margin-top: 13px;
  margin-left: 30px;
  color: white;
  transition: 0.25s;
  font-size: 24px;
}

.navbar-brand h4:hover {
  transform: scale(1.1);
}

.nav-link {
margin-top: 100px;
}

#dropdown {
  margin-top: 5px;
  margin-left: 30px;
  color: white;
  transition: 0.25s;
  font-size: 24px;
  transition: 0.25s;
}

#dropdown:hover {
  transform: scale(1.1);
}

#NavBar {
  background-color: #73048f;
  height: 75px;
}

</style>