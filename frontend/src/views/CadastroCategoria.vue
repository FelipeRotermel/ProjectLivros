<script>
import axios from "axios";
export default {
  data() {
    return {
      nova_cate: "",
      descricacao: "",
      categorias: [],
    };
  },
  async created() {
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
  },
  methods: {
    async salvar() {
      const categoria = {
        catego: this.nova_cate,
        desc: this.descricacao,
      };
      const categoria_criada = await axios.post(
        "http://localhost:4000/categorias",
        categoria
      );
      this.categorias.push(categoria_criada.data);
      this.nova_cate = "";
      this.descricacao = "";
    },
    async excluir(categoria) {
      await axios.delete(`http://localhost:4000/categorias/${categoria.id}`);
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
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
          v-model="nova_cate"
        />
        <input
          class="form-control"
          type="text"
          name=""
          id=""
          placeholder="Adicione sua Descrição"
          v-model="descricacao"
        />
        <button class="btn btn-secondary" @click="salvar">Salvar</button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Categoria</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <th>{{ categoria.id }}</th>
            <th>{{ categoria.catego }}</th>
            <th>{{ categoria.desc }}</th>
            <th>
              <button class="btn btn-danger btn-sm" @click="excluir(categoria)">
                Excluir
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
