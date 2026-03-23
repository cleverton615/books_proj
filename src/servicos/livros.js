import axios from 'axios';
const livrosAPI = axios.create({baseURL: 'http://localhost:8000/livros'}); //cria uma instância do axios com a URL base para as requisições relacionadas aos livros

async function getLivros() { //função para obter a lista de livros
    const response = await livrosAPI.get("/"); //faz uma requisição GET para a URL base (http://localhost:8000/livros/) para obter a lista de livros

    return response.data; //retorna os dados da resposta, que é a lista de livros
}

export {
    getLivros 
}