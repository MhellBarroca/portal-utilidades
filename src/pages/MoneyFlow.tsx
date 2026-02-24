import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { moneySchema } from "../schemas/moneySchema";
import type { MoneyFormData } from "../schemas/moneySchema";

export function MoneyFlow() {
  /*
    Estado que guarda a lista de lançamentos financeiros.
    Funciona como banco de dados local da aplicação.
  */
  const [items, setItems] = useState<MoneyFormData[]>([]);

  /*
    Ao carregar a página, buscamos os dados salvos no localStorage.
  */
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("moneyflow");

    if (dadosSalvos === null) {
      setItems([]);
      return;
    }

    setItems(JSON.parse(dadosSalvos));
  }, []);

  /*
    Configuração do formulário com React Hook Form + Zod.
  */
  const formulario = useForm<MoneyFormData>({
    resolver: zodResolver(moneySchema),
    defaultValues: {
      description: "",
      value: 0,
    },
  });

  /*
    Submissão do formulário.
  */
  function submeterFormulario(dados: MoneyFormData) {
    const novaLista = [...items, dados];

    setItems(novaLista);
    formulario.reset();

    // Persistência no localStorage
    localStorage.setItem("moneyflow", JSON.stringify(novaLista));
  }

  /*
    Cálculo do saldo total.
    Soma todos os valores cadastrados.
  */
  const saldoTotal = items.reduce(
    (total, item) => total + item.value,
    0
  );

  /*
    Remove um item pelo índice.
  */
  function removerItem(index: number) {
    const novaLista = items.filter((_, i) => i !== index);

    setItems(novaLista);
    localStorage.setItem("moneyflow", JSON.stringify(novaLista));
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">MoneyFlow</h1>

      {/* Exibição do saldo total */}
      <p className="mb-4 font-semibold">
        Saldo Total: R$ {saldoTotal.toFixed(2)}
      </p>

      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="space-y-4"
      >
        {/* Descrição */}
        <div>
          <label>Descrição</label>
          <input
            {...formulario.register("description")}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.description && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.description.message}
            </p>
          )}
        </div>

        {/* Valor */}
        <div>
          <label>Valor</label>
          <input
            type="number"
            step="0.01"
            {...formulario.register("value", {
              valueAsNumber: true,
            })}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.value && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.value.message}
            </p>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </form>

      {/* Lista de lançamentos */}
      <div className="mt-6 space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="border p-2 rounded flex justify-between"
          >
            <span>
              {item.description} – R$ {item.value.toFixed(2)}
            </span>
            <button
              onClick={() => removerItem(index)}
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


