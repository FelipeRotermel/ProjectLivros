<script>
import axios from "axios"
export default {
    data() {
        return {
            novo_editor: "",
            site_editora: "",
            editoras: [],
        };
    },
    async created() {
        const editoras = await axios.get("http://localhost:4000/editora")
        this.editoras = editoras.data
    },
    methods: {
        async salvar() {
          const editor = {
            edit: this.novo_editor,
            site: this.site_editora,
        };
        const editor_criado = await axios.post("http://localhost:4000/editora", editor);
        this.editoras.push(editor_criado.data);
        this.novo_editor = "";
        this.site_editora = "";
        },
        async excluir(editor) {
                await axios.delete(`http://localhost:4000/editora/${editor.id}`);
                const indice = this.editoras.indexOf(editor);
                this.editoras.splice(indice, 1);
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
                    v-model="novo_editor" />
                <input class="form-control" type="text" name="" id="" placeholder="Adicione o site dela"
                    v-model="site_editora" />
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
                    <tr v-for="editor in editoras" :key="editor.id">
                        <th>{{ editor.edit }}</th>
                        <th>{{ editor.site }} </th>
                        <th><button class="btn btn-danger btn-sm" @click="excluir(editor)">Excluir</button></th>
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