<script>
import axios from "axios"
export default {
    data() {
        return {
            novo_autor: "",
            obra_p: "",
            autores: [],
        };
    },
    async created() {
        const autores = await axios.get("http://localhost:4000/autores")
        this.autores = autores.data
    },
    methods: {
        async salvar() {
          const autor = {
            nome: this.novo_autor,
            obra: this.obra_p,
        };
        const autor_criado = await axios.post("http://localhost:4000/autores", autor);
        this.autores.push(autor_criado.data);
        this.novo_autor = "";
        this.obra_p = "";
        },
        async excluir(autor) {
            await axios.delete(`http://localhost:4000/autores/${autor.id}`);
            const indice = this.autores.indexOf(autor);
            this.autores.splice(indice, 1);
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
                    v-model="novo_autor"/>
                <input class="form-control" type="text" name="" id="" placeholder="Obra Principal dele(a)"
                    v-model="obra_p" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Obra Principal</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="autor in autores" :key="autor.id">
                        <th>{{ autor.id }}</th>
                        <th>{{ autor.nome }}</th>
                        <th>{{ autor.obra }}</th>
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