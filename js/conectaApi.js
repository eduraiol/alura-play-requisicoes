const urlApi = "http://localhost:3000/videos"

async function listaVideos() {
    const conexao = await fetch(urlApi);
    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
}

export const conectaApi = {
    listaVideos
}