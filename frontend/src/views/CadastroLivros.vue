<script>
import axios from 'axios';
import LivrosApi from "@/api/livros.js"
const livrosApi = new LivrosApi
export default {
  data() {
    return {
      editoras: [],
      autores: [],
      categorias: [],
      preco: {},
      livro: {},
      livros: [],
    };
  },
  async created() {
    await this.buscarTodasAsEditoras();
    await this.buscarTodasAsCategorias();
    await this.buscarTodosOsAutores();
    await this.buscarTodosOsLivros();
  },
  methods: {
    async buscarTodasAsEditoras() {
      const editoras = await axios.get("http://localhost:4000/editoras");
      this.editoras = editoras.data;
      },
    async buscarTodasAsCategorias() {
      const categorias = await axios.get("http://localhost:4000/categorias");
      this.categorias = categorias.data;
      },
    async buscarTodosOsAutores() {
      const autores = await axios.get("http://localhost:4000/autores");
      this.autores = autores.data;
      },
    async buscarTodosOsLivros() {
      const livros = await axios.get("http://localhost:4000/cadastrolivros");
      this.livros = livros.data;
      },
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
         } else {
        await livrosApi.adicionarLivro(this.livro);
        }
      this.livros = await livrosApi.buscarTodosOsLivros();
      (this.livro = {}) , (this.preco = {})

  },
  async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
  },
   editar(livro) {
    Object.assign(this.livro, livro);
  }
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
        <input class="form-control" type="text" name="" placeholder="Livro" v-model="livro.nome" />
        <select class="form-select" name="" placeholder="Categoria" v-model="livro.categoria" >
          <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome" >
            {{ categoria.nome }}
          </option>
        </select>
        <select class="form-select" placeholder="Editora" name="" v-model="livro.editora">
          <option v-for="editora in editoras" :key="editora.id" :value="editora.nome" >
            {{ editora.nome }}
          </option>
        </select>
        <select class="form-select" placeholder="Autor" name="" v-model="livro.autor" >
          <option v-for="autor in autores" :key="autor.id" :value="autor.nome">
            {{ autor.nome }}
          </option>
        </select>
        <input class="form-control" type="number" name="" placeholder="Preço" v-model="livro.preco"/>
        <button class="btn btn-secondary" @click="salvar">Salvar</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Livro</th>
            <th scope="col">Categoria</th>
            <th scope="col">Editora</th>
            <th scope="col">Autor</th>
            <th scope="col">Preço(R$)</th>
            <th scope="col">Excluir</th>
            <th scope="col">Atualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <th>{{ livro.id }}</th>
            <th>{{ livro.nome }}</th>
            <th>{{ livro.categoria }}</th>
            <th>{{ livro.editora }}</th>
            <th>{{ livro.autor }}</th>
            <th>{{ livro.preco }}</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="excluir(livro)">
                Excluir
              </button>
            </th>
              <th>
              <button class="btn btn-success btn-sm" @click="editar(livro)">
                Atualizar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <iframe
        width="110"
        height="200"
        src="https://www.myinstants.com/instant/vine-boom-sound-70972/embed/"
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
