const urlApi = "http://localhost:3000/videos"

async function listaVideos() {
    const conexao = await fetch(urlApi);
    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoconvertida = await conexao.json();
    return conexaoconvertida;
}

async function buscaVideos(termoDeBusca) {
    const conexao = await fetch(`${urlApi}?q=${termoDeBusca}`);

    const conexaoconvertida = conexao.json();

    return conexaoconvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}