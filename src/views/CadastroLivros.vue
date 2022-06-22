<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      livro: "",
      editora: "",
      categoria: "",
      preco: "",
      autor:"",
      livros: [
        { id: 1, livro: "Harry Potter", editora: "Bloomsbury Publishing", categoria: "Fantasia", autor: "J.K. Rowling", preco: "25,00" },
        { id: 2, livro: "1984", editora: "Companhia das Letras", categoria: "Ficção", autor: "George Orwell", preco: "29,99" },
      ],
    };
  },
  methods: {
    salvar() {
     if (this.livro !== "") {
      const id = uuid();
      this.livros.push({
        id: id,
        livro: this.livro,
        editora: this.editora,
        categoria: this.categoria,
        autor: this.autor,
        preco: this.preco,
      });
      this.livro = "";
      this.editora = "";
      this.categoria = "";
      this.autor = "";
      this.preco = "";
      } else {
      alert("Informe as coisas!") 
      } 
     },
   excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
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
                <input class="form-control" type="text" name="" id="" placeholder="Livro" v-model="livro" />
                <input class="form-control" type="text" name="" id="" placeholder="Editora" v-model="editora" />
                <select class="form-select" name="" id="" v-model="categoria">
                    <option disabled value="">Categoria</option>
                    <option>Horror</option>
                    <option>Autoajuda</option>
                    <option>Ação e aventura</option>
                    <option>Biografia</option>
                    <option>Fantasia</option>
                    <option>Ficção científica</option>
                    <option>Horror</option>
                    <option>História</option>
                    <option>Humor</option>
                    <option>Infantil</option>
                    <option>Romance</option>
                    <option>Religião e Espiritualidade</option>
                    <option>Tecnologia e Ciência</option>
                </select>
                <input class="form-control" type="text" name="" id="" placeholder="Autor" v-model="autor" />
                <input class="form-control" type="number" name="" id="" placeholder="Preço" v-model="preco" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Livro</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Preço(R$)</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livro in livros" :key="livro.id">
                        <th>{{ livro.livro }}</th>
                        <th>{{ livro.editora }}</th>
                        <th>{{ livro.categoria }}</th>
                        <th>{{ livro.autor}}</th>
                        <th>{{ livro.preco }}</th>
                        <th><button class="btn btn-danger btn-sm" @click="excluir">Excluir</button></th>
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