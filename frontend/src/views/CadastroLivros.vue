<script>
import axios from "axios";
export default {
  data() {
    return {
      editoras: [],
      autores: [],
      categorias: [],
      livro: {},
    };
  },
  async created() {
    await this.buscarTodosOsAutores();
    await this.buscarTodosAsCategorias();
    await this.buscarTodosAsEditoras();
  },
  methods: {
    async buscarTodosAsEditoras() {
      const editoras = await axios.get("http://localhost:4000/editora");
      this.editoras = editoras.data;
    },
    async buscarTodosAsCategorias() {
      const categorias = await axios.get("http://localhost:4000/categorias");
      this.categorias = categorias.data;
    },
    async buscarTodosOsAutores() {
      const autores = await axios.get("http://localhost:4000/autores");
      this.autores = autores.data;
    },
    async salvar() {
      await axios.post("http://localhost:4000/cadastrolivros", this.livro);
      await this.buscarTodosAsEditoras();
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
          placeholder="Livro"
          v-model="livro"
        />
        <select
          class="form-select"
          name=""
          placeholder="Categoria"
          v-model="livro.categoria"
        >
          <option
            v-for="categoria in categorias"
            :key="categoria.id"
            :value="categoria.id"
          >
            {{ categoria.catego }}
          </option>
        </select>
        <select
          class="form-select"
          placeholder="Editora"
          name=""
          id=""
          v-model="editoras"
        >
          <option
            v-for="editora in editoras"
            :key="editora.id"
            :value="editora.id"
          >
            {{ editora.edit }}
          </option>
        </select>
        <select
          class="form-select"
          placeholder="Autor"
          name=""
          id=""
          v-model="autores"
        >
          <option v-for="autor in autores" :key="autor.id" :value="autor.id">
            {{ autor.nome }}
          </option>
        </select>
        <input
          class="form-control"
          type="number"
          name=""
          id=""
          placeholder="Preço"
          v-model="preco"
        />
        <button class="btn btn-secondary" @click="salvar">Salvar</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Livro</th>
            <th scope="col">Categoria</th>
            <th scope="col">Editora</th>
            <th scope="col">Autor</th>
            <th scope="col">Preço(R$)</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <th>{{ livro.nome }}</th>
            <th>{{ livro.editora }}</th>
            <th>{{ livro.categoria }}</th>
            <th>{{ livro.autor }}</th>
            <th>{{ livro.preco }}</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="excluir(livro)">
                Excluir
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
