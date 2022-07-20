<script>
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      autor: {},
      obra_p: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      (this.obra_p = {}), (this.autor = {});
    },
    async excluir(autor) {
      await autoresApi.excluirAutor(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="col-12 text-center">
      <div class="title">
        <h2>Cadastro De Livros</h2>
      </div>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          name=""
          id=""
          placeholder="Nome do Autor"
          v-model="autor.nome"
          @keyup.enter="salvar"
        />
        <input
          class="form-control"
          type="text"
          name=""
          id=""
          placeholder="Obra Principal dele(a)"
          v-model="autor.obra_p"
          @keyup.enter="salvar"
        />
        <button class="btn btn-secondary" @click="salvar">Salvar</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Autor</th>
            <th scope="col">Obra Principal</th>
            <th scope="col">Excluir</th>
            <th scope="col">Atualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <th>{{ autor.id }}</th>
            <th>{{ autor.nome }}</th>
            <th>{{ autor.obra_p }}</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="excluir(autor)">
                Excluir
              </button>
            </th>
            <th>
              <button class="btn btn-success btn-sm" @click="editar(autor)">
                Atualizar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.input-group .btn {
  background-color: #c614f3;
  transition: 0.25s;
}

.input-group .btn:hover {
  background-color: #73048f;
}

.col-12 {
  margin-top: 30px;
}

.col-12 .input-group {
  margin-top: 30px;
}

.col-12 .table {
  margin-top: 30px;
}

thead tr th {
  font-size: 24px;
}
</style>
