import { getFirestore, addDoc, getDocs, deleteDoc, updateDoc, doc, collection, query, where } from "firebase/firestore"
import { app } from "./FirebaseConfig"

const db = getFirestore(app)

export async function listaTarefas() {
  const tarefas = []
  const resposta = await getDocs(
    //query(
      collection(db, "tarefas"),
      // where("prioridade", '==', 1))
      //)
  )
  resposta.forEach((doc) => {
    tarefas.push({ key: doc.id, ...doc.data() })
  })
  return tarefas;
}

export async function insereTarefa(tarefa) {
  await addDoc(collection(db, "tarefas"), tarefa)
}

export async function modificaTarefa(tarefa) {
  await updateDoc(doc(db, "tarefas", tarefa.key), {nome: tarefa.nome, prioridade: tarefa.prioridade})
}

export async function removeTarefa(key) {
  await deleteDoc(doc(db, "tarefas", key))
}
