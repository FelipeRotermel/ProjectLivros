import axios from 'axios';
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get('https://bookseverywhere.herokuapp.com/cadastrolivros');
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(`https://bookseverywhere.herokuapp.com/cadastrolivros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post('https://bookseverywhere.herokuapp.com/cadastrolivros', livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://bookseverywhere.herokuapp.com/cadastrolivros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://bookseverywhere.herokuapp.com/cadastrolivros/${livro.id}`,
      livro,
    );
    return response.data;
  }
}