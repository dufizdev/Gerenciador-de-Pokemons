let totalMons = []

function cadastrar () {
    alert ("Lembre-se de ativar o f12 para verificar se seu pokemon foi adicionado corretamente")
    const novoPoke = {
        nomePokemon: prompt ("Qual o nome do seu Pokemon?"),
        tipo: prompt ("Qual o tipo do seu Pokemon?") ,
        genero: prompt ("Qual o genero do seu pokemon?")
    }
    
    totalMons.push(novoPoke)
    alert ("Registro Concluido!")
}


function mostrarPokes(){
    if (totalMons == 0){console.log ("Nenhum item encontrado")}
    for (i = 0 ; i < totalMons.length; i++){
        console.log(`Ordem de registro: ${i + 1} \n` ,`Nome: ${totalMons[i].nomePokemon}\n` , `Tipo: ${totalMons[i].tipo}\n` , `Genero: ${totalMons[i].genero}`)
    }
}


function deletarID () {
    let IDselecionado = prompt("Qual id deseja deletar?");
    
    //é so para converter vai que da erro né (deu)
    let indiceReal = IDselecionado - 1;
    
    
    if (indiceReal >= 0 && indiceReal < totalMons.length) {
     
        let removendo = totalMons.splice(indiceReal, 1);
        
        alert("Parabéns, deu certo! Pokémon removido: " + removendo[0].nomePokemon);
    } else {
        alert("ID errado ou inexistente!");
    } 
    console.clear()
}

//lembra de passa o lowercase para nao dar os erros bestas de letra minuscula ou maiuscula
function buscarPokemon (){
   const buscarPokemon = prompt ("Digite o nome do pokemon que deseja buscar!");
   
    let encontrado = totalMons.find (pokemon => pokemon.nomePokemon === buscarPokemon);

    if (encontrado !== undefined) {
    alert("Encontrado!\nNome: " + encontrado.nomePokemon + "\nTipo: " + encontrado.tipo + "\nGênero: " + encontrado.genero);
    } else {
        alert ("Nao achei pae")
    }
}

function limparTudo (){
    let certeza = confirm("Tem certeza que quer limpar tudo? (dados serão perdidos)")

    if (certeza === true){
    totalMons = []
    console.clear()
    } else {
    
        console.log ("Nada foi feito.")
        
    }
}

function limparConsole (){
    console.clear()
}