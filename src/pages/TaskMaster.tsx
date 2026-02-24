import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import type { TaskFormData } from "../schemas/taskSchema";

export function TaskMaster() {
  // "BANCO DE DADOS" local da aplicação
  const [tasks, setTasks] = useState<TaskFormData[]>([]);

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const tasksArmazenadas = localStorage.getItem("tasks");

    if (tasksArmazenadas === null) {
      setTasks([]);
      return;
    }

    setTasks(JSON.parse(tasksArmazenadas));
  }, []);

  // Formulário
  const formulario = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  // Submissão
  function submeterFormulario(dados: TaskFormData) {
    const novaLista = [...tasks, dados];

    setTasks(novaLista);
    formulario.reset();

    // Salvamento explícito
    localStorage.setItem("tasks", JSON.stringify(novaLista));
  }

  function removerTask(index: number) {
    const novaLista = tasks.filter((_, i) => i !== index);

    setTasks(novaLista);
    localStorage.setItem("tasks", JSON.stringify(novaLista));
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">TaskMaster</h1>

      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="space-y-4"
      >
        <div>
          <label>Título</label>
          <input
            {...formulario.register("title")}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.title && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.title.message}
            </p>
          )}
        </div>

        {/* CATEGORIA */}
        <div>
          <label>Categoria</label>
          <select
            {...formulario.register("category")}
            className="w-full border p-2 rounded"
          >
            <option value="">Selecione</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Urgente">Urgente</option>
          </select>

          {formulario.formState.errors.category && (
            <p className="text-red-500 text-sm">
              Categoria obrigatória
            </p>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </form>

      <div className="mt-6 space-y-2">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border p-2 rounded flex justify-between"
          >
            <span>
              {task.title} – {task.category}
            </span>
            <button
              onClick={() => removerTask(index)}
              className="text-red-500"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

