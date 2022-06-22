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
                <div class="col-md-6 mb-4">

                  <div class="form-outline datepicker">
                    <input type="date" class="form-control" id="exampleDatepicker1" />
                    <label for="exampleDatepicker1" class="form-label">Selecione sua data de nascimento</label>
                  </div>

                </div>
                <div class="form-outline mb-4">
                <input type= "email" id="form3Example1q" class="form-control" />
                <label class="form-label" for="form3Example1q">E-mail</label>
              </div>
              </div>

              <div class="mb-4">
                <select class="select">
                  <option value="1" disabled>Turma</option>
                  <option value="2">1info1</option>
                  <option value="3">1info2</option>
                  <option value="4">1info3</option>
                  <option value="5">2info1 s2</option>
                  <option value="6">2info2</option>
                  <option value="7">2info3</option>
                  <option value="8">3info1</option>
                  <option value="9">3info2</option>                                                                        
                  <option value="10">3info3</option>                
                </select>

              </div>

              <button type="submit" class="btn btn-success btn-lg mb-1">Registrar</button>

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