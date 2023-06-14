import { urlApi } from "./FirebaseConfig"

//GET obter, listar
export async function listaTarefas() {
    let tarefas = []
   await fetch(urlApi + "tarefas.json")
  .then((response) => response.json())
    .then((data) => {
        for(let key in data) {
            tarefas.push({key, ...data[key]})
        }    
    })
    .catch((error) => { throw Error("Deu ruim") })
    return tarefas  
}

//POST criar, inserir
export async function insereTarefa(tarefa) {
    await fetch(urlApi + "tarefas.json",{
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: { 'Content-type': 'application/json'}
    })
    .catch((error) => {throw Error("Deu ruim") })
}

//PUT alterar, modificar
export async function modificaTarefa(tarefa) {
    await fetch(urlApi + "tarefas/" + tarefa.key + ".json",{
        method: 'PUT',
        body: JSON.stringify({nome: tarefa.nome, prioridade: tarefa.prioridade}),
        headers: { 'Content-type': 'application/json'}
    })
    .catch((error) => {throw Error("Deu ruim") })
}

//DELETE destruir, remover
export async function removeTarefa(key) {
    await fetch(urlApi + "tarefas/" + key + ".json", {
        method: 'DELETE'
    })
    .catch((error) => { throw Error("Deu ruim") })
}

// Objeto JS
//{nome: "Fazer algo", prioridade: 1}

// Objeto JSON
//{"nome": "Fazer algo", "prioridade": 1}
