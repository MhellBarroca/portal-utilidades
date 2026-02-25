import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import type { TaskFormData } from "../schemas/taskSchema";

export function TaskMaster() {
  const [tasks, setTasks] = useState<TaskFormData[]>([]);

  useEffect(() => {
    const tasksArmazenadas = localStorage.getItem("tasks");
    if (tasksArmazenadas) {
      setTasks(JSON.parse(tasksArmazenadas));
    }
  }, []);

  const formulario = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  function submeterFormulario(dados: TaskFormData) {
    const novaLista = [...tasks, dados];
    setTasks(novaLista);
    formulario.reset();
    localStorage.setItem("tasks", JSON.stringify(novaLista));
  }

  function removerTask(index: number) {
    const novaLista = tasks.filter((_, i) => i !== index);
    setTasks(novaLista);
    localStorage.setItem("tasks", JSON.stringify(novaLista));
  }

  return (
    <div className="space-y-6 max-w-xl mx-auto">

      <header>
        <h1 className="text-3xl font-bold text-gray-800">TaskMaster</h1>
        <p className="text-muted">Organize suas tarefas</p>
      </header>

      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="bg-surface p-6 rounded-xl shadow space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Título</label>
          <input
            {...formulario.register("title")}
            className="w-full border p-2 rounded mt-1"
          />
          {formulario.formState.errors.title && (
            <p className="text-danger text-sm">
              {formulario.formState.errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Categoria</label>
          <select
            {...formulario.register("category")}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">Selecione</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>
        </div>

        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
          Adicionar tarefa
        </button>
      </form>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-surface p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-muted">{task.category}</p>
            </div>
            <button
              onClick={() => removerTask(index)}
              className="text-danger hover:text-red-700"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}