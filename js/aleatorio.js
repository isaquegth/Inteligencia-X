const nomes = ["Jubileia", "Cleodosmar", "almerindo", "Marisvaldo", "Ardolindo", "vargolim", "sebastiano"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)