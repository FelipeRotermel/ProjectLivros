<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editora: {},
      site_editora: {},
      editoras: [],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editoras.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      (this.site_editora = {}), (this.editora = {});
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
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
                    v-model="editora.nome" />
                <input class="form-control" type="text" name="" id="" placeholder="Adicione o site dela"
                    v-model="editora.site_editora" />
                <button class="btn btn-secondary" @click="salvar">Salvar</button>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Editora</th>
                        <th scope="col">Site</th>
                        <th scope="col">Excluir</th>
                        <th scope="col">Atualizar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="editora in editoras" :key="editora.id">
                        <th>{{ editora.nome }}</th>
                        <th>{{ editora.site_editora }} </th>
                        <th><button class="btn btn-danger btn-sm" @click="excluir(editora)">Excluir</button></th>
                        <th><button class="btn btn-success btn-sm" @click="editar(editora)">Atualizar</button></th>
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