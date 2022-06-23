<script setup>
</script>
<template>
<section class="h-100 h-custom">
  <div class="container py-5 h-100"  >
    <div class="row d-flex justify-content-center align-items-center h-100" >
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3" >
          <div class= "card-body bg-dark text-white p-4 p-md-5"  style="border-radius: 1rem;">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registre-se</h3>
            <form class="px-md-2">
              <div class="form-outline mb-4">
                <input type="text" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">Nome</label>
              </div>
              <div class="row">
                <div class="form-outline mb-4">
                <input type= "email" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">E-mail</label>
              </div>
                <div class="form-outline mb-4">
                  <div class="form-outline datepicker">
                    <input type= "email" id="form3Example1q" class="form-control" />
                  <label class="form-label" for="form3Example1q">Senha</label>
                  </div>
                </div>
              </div>

              <div class="row justify-content-between">
                <div class="col-7">
                <div class="form-outline datepicker">
                    <input type="date" class="form-control" id="exampleDatepicker1" />
                    <label for="exampleDatepicker1" class="form-label">Selecione sua data de nascimento</label>
                  </div>
                  </div>
                <div class="col-3">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Turma
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">1info1</a></li>
                      <li><a class="dropdown-item" href="#">1info2</a></li>
                      <li><a class="dropdown-item" href="#">1info3</a></li>
                      <li><a class="dropdown-item" href="#">2info1</a></li>
                      <li><a class="dropdown-item" href="#">2info2</a></li>
                      <li><a class="dropdown-item" href="#">2info3</a></li>
                      <li><a class="dropdown-item" href="#">3info1</a></li>
                      <li><a class="dropdown-item" href="#">3info2</a></li>
                      <li><a class="dropdown-item" href="#">3info3</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-success btn-lg mb-1">Registrar</button>
              <div class="row">
              <p class="mb-0">Já possui conta?</p>
              <RouterLink to="/login"><p class="text-white-50 fw-bold">Logar-se</p></RouterLink>
            </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<style>
</style>