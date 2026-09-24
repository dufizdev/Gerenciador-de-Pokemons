let totalMons = []

function cadastrar () {
    alert ("Lembre-se de ativar o f12 para verificar se seu pokemon foi adicionado corretamente")
    


    const nomePokemon = prompt ("Qual o nome do seu Pokemon?")
    if (nomePokemon === null || nomePokemon.trim() === ""){
         alert ("Preenchimento incorreto! O nome é obrigatório")
         return
    } 
     const tipo = prompt ("Qual o tipo do seu Pokemon?")
        if (tipo === null || tipo.trim() === ""){
        alert ("Preenchimento incorreto! O tipo é obrigatorio")
        return
    }
     const genero = prompt ("Qual o genero do seu pokemon?")
        if (genero === null || genero.trim() === ""){
        alert ("Preenchimento incorreto! O genero é obrigatorio")
        return
    }

      
        const novoPoke = {
            nomePokemon: nomePokemon,
            tipo: tipo,
            genero: genero
        }
        
        totalMons.push(novoPoke);
        console.log ("Cadastro feito com Sucesso!");
        alert ("Registro Concluido!");
    }



function mostrarPokes(){
    if (totalMons == 0){alert("Nenhum item encontrado")}
    for (i = 0 ; i < totalMons.length; i++){
        alert(`Ordem de registro: ${i + 1}\nNome: ${totalMons[i].nomePokemon}\nTipo: ${totalMons[i].tipo}\nGenero: ${totalMons[i].genero}`);
    }
}


function deletarID () {
    let IDselecionado = prompt("Qual id deseja deletar?");
    
    //é so para converter vai que da erro né (deu)
    let indiceReal = IDselecionado - 1
    
    if (indiceReal >= 0 && indiceReal < totalMons.length) {
        let removendo = totalMons.splice(indiceReal, 1)
        alert("Parabéns, deu certo! Pokémon removido: " + removendo[0].nomePokemon);
    } else {
        alert("ID errado ou inexistente!")
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
        alert ("Pokemon nao encontrado")
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

function removerUltimo (){
    let removendoUltimo = totalMons.pop();

    if (removendoUltimo !== undefined) {
        alert ("Ultimo pokemon removido com sucesso! Removido: " + removendoUltimo.nomePokemon);
    } else {
        alert ("Não há pokémons para remover!");
    }
}

function exibirTotal (){
    let quantidadeMons = totalMons.length;
    alert ("itens cadastrados: " + quantidadeMons);
}