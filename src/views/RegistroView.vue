<script setup>
</script>
<template>
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">

                  <h2 class="fw-bold mb-2 text-uppercase">Cadastre-se</h2>
                  <p class="text-white-50 mb-5"></p>

                  <div class="form-outline form-white mb-4">
                    <input type="text"  placeholder= "Insira seu Nome!" class="form-control form-control-lg" />
                    <label class="form-label">Nome</label>
                  </div>    

                  <div class="form-outline form-white mb-4">
                    <input type="email"  placeholder= "Insira seu Email!" class="form-control form-control-lg" />
                    <label class="form-label">Email</label>
                  </div>    

                  <div class="form-outline form-white mb-4">
                    <input type="password" placeholder="Insira sua senha!" id="typePasswordX" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX">Senha</label>
                  </div>

                  <div class="form-outline form-white col-6">
                    <input type="date" class="form-control form-control-lg" />
                    <label class="form-label">Data de Nascimento</label>
                  </div>

                  <button class="btn btn-outline-light btn-lg px-5" type="submit">Criar Conta</button>
                  
                </div>

                <div>
                  <p class="mb-0">Já possui conta?   <router-link class="text-white-50fw-bold" to="/login">Logar-se</router-link>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vh-100 {
  margin-top: 50px;
  margin-bottom: 17%;
}
</style>