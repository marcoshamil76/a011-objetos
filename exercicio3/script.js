const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, 
//mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const copiapokemon1 = {...pokemon1}
    copiapokemon1.nome = "Squirtle"
    copiapokemon1.tipo = "Água"

    pokemon1.ataques = [] // criação do modulo ataques

    console.log (pokemon1.ataques)

    pokemon1.ataques = [{
        nome: "Investida",
        dano: 40,
        tipo: "Normal",
        precisao: 100
    }] // inserido este ataque na array de ataques
    console.log(pokemon1.ataques)

    copiapokemon1.ataques = [...pokemon1.ataques] // copiado ataques para copiapokemon1
    console.log (copiapokemon1.ataques)

    pokemon1.ataques.push({
                            nome: "Folha Navalha",
                            dano: 100,
                            tipo: "Grama",
                            precisao: 100
                        })
    console.log (pokemon1.ataques)

    copiapokemon1.ataques.push ({
                            nome: "Jato de Água",
                            dano: 40,
                            tipo: "agua",
                            precisao:100 
    })
    console.log (pokemon1)
    console.log (copiapokemon1)
    


