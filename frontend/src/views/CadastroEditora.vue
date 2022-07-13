<script>
import { v4 as uuid } from "uuid";
export default {
    data() {
        return {
            editora: "",
            site: "",
            livros: [
                { id: 1, editora: "Jambo", site: "jamboeditora.com.br" },
                { id: 2, editora: "Letras do Brasil", site: "letrasdobrasil.com.br", },
            ],
        };
    },
    methods: {
        salvar() {
            if (this.livro !== "") {
                const id = uuid();
                this.livros.push({
                    id: id,
                    editora: this.editora,
                    site: this.site,
                });
                this.editora = "";
                this.site = "";
            } else {
                alert("Informe a editora ou o site!")
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
                <input class="form-control" type="text" name="" id="" placeholder="Adicione uma Editora"
                    v-model="editora" />
                <input class="form-control" type="text" name="" id="" placeholder="Adicione o site dela"
                    v-model="site" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Editora</th>
                        <th scope="col">Site</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livro in livros" :key="livro.id">
                        <th>{{ livro.editora }}</th>
                        <th>{{ livro.site }} </th>
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