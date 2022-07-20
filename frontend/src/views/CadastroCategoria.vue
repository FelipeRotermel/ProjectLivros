<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      descricao: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      (this.descricao = {}), (this.categoria = {});
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
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
          placeholder="Adicione sua Categoria"
          v-model="categoria.nome"
        />
        <input
          class="form-control"
          type="text"
          name=""
          id=""
          placeholder="Adicione sua Descrição"
          v-model="categoria.descricao"
        />
        <button class="btn btn-secondary" @click="salvar">Salvar</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Categoria</th>
            <th scope="col">Descrição</th>
            <th scope="col">Excluir</th>
            <th scope="col">Atualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <th>{{ categoria.id }}</th>
            <th>{{ categoria.nome }}</th>
            <th>{{ categoria.descricao }}</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="excluir(categoria)">
                Excluir
              </button>
            </th>
               <th>
              <button class="btn btn-success btn-sm" @click="editar(categoria)">
                Atualizar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <iframe
        width="110"
        height="200"
        src="https://www.myinstants.com/instant/ohhh-my-god-26392/embed/"
        frameborder="0"
        scrolling="no"
      ></iframe>
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
