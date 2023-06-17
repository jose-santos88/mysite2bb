import { useEffect, useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import TaskContext from "../contexts/TaskContext"

export default function HomeList() {
  const { tarefas, listaTarefas, removeTarefa } = useContext (TaskContext)
  const [loading, setLoading] = useState (false)
  const navigate = useNavigate()

  async function carrega() {
    setLoading(true)
    await listaTarefas()
    setLoading(false)
  }

  useEffect(() => {
    carrega()
  }, [])

  async function handleRemover(key) {
    await removeTarefa(key)
  }

  function handleEditar(key) {
    navigate ("/editar/" + key)
  }

  return (
    <>
    {loading ? <h3>Aguarde...</h3> :
    <ol>
      {tarefas.map((tarefa, key) => <li key={key}>{tarefa.nome} - {tarefa.prioridade}
      <button onClick={() => handleEditar(tarefa.key)}>Editar</button>
      <button onClick={() => handleRemover(tarefa.key) }>Remover</button>
      </li>)}
    </ol>
    }
    </>
  )
}