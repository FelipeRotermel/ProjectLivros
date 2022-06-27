<script>
import { v4 as uuid } from "uuid";
export default {
    data() {
        return {
            nome: '',
            obra_p: '',
            livros: [
                { id: 1, nome:"C.S. Lewis", obra_p:"As Cronicas de Narnia"  },
                { id: 2, nome:"J.K. Rowling", obra_p:"Harry potter (Saga)" },
            ],
        };
    },
    methods: {
        salvar() {
            if (this.livro !== "") {
                const id = uuid();
                this.livros.push({
                    id: id,
                    nome: this.nome,
                    obra_p: this.obra_p,
                });
                this.nome = "";
                this.obra_p = "";
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
                <input class="form-control" type="text" name="" id="" placeholder="Nome do Autor"
                    v-model="nome" />
                <input class="form-control" type="text" name="" id="" placeholder="Obra Principal dele(a)"
                    v-model="obra_p" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Autor</th>
                        <th scope="col">Obra Principal</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="livro in livros" :key="livro.id">
                        <th>{{ livro.nome }}</th>
                        <th>{{ livro.obra_p }} </th>
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