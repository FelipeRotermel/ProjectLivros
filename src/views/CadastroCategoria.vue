<script>
import { v4 as uuid } from "uuid";
export default {
    data() {
        return {
            categoria: "",
            descricao: "",
            livros: [
                { id: 1,   categoria: "Fantasia", descricao: "Embarque em algo completamente novo e inédito com essa categoria",},
                { id: 2,   categoria: "Ficção", descricao: "Uma categoria que gosta de viajar na maionese", },
            ],
        };
    },
    methods: {
        salvar() {
            if (this.livro !== "") {
                const id = uuid();
                this.livros.push({
                    id: id,
                    categoria: this.categoria,
                    descricao: this.descricao,
                });
                this.categoria = "";
                this.descricao = "";
            } else {
                alert("Informe a categoria!")
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
                <input class="form-control" type="text" name="" id="" placeholder="Adicione sua Categoria"
                    v-model="categoria" />
                <input class="form-control" type="text" name="" id="" placeholder="Adicione sua Descrição"
                    v-model="descricao" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Categoria</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livro in livros" :key="livro.id">
                        <th>{{ livro.categoria }}</th>
                        <th>{{ livro.descricao }} </th>
                        <th><button class="btn btn-danger btn-sm" @click="excluir">Excluir</button></th>
                    </tr>
                </tbody>
            </table>
       <iframe width="110" height="200" src="https://www.myinstants.com/instant/ohhh-my-god-26392/embed/" frameborder="0" scrolling="no"></iframe>
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