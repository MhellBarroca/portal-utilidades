import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { moneySchema, type MoneyFormData } from "../schemas/moneySchema";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";

export function MoneyFlow() {
  const [items, setItems] = useState<MoneyFormData[]>([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("moneyflow");
    if (dadosSalvos) setItems(JSON.parse(dadosSalvos));
  }, []);

  const formulario = useForm<MoneyFormData>({
    resolver: zodResolver(moneySchema),
    defaultValues: { description: "", value: 0 },
  });

  function submeterFormulario(dados: MoneyFormData) {
    const novaLista = [...items, dados];
    setItems(novaLista);
    formulario.reset();
    localStorage.setItem("moneyflow", JSON.stringify(novaLista));
  }

  function removerItem(index: number) {
    const novaLista = items.filter((_, i) => i !== index);
    setItems(novaLista);
    localStorage.setItem("moneyflow", JSON.stringify(novaLista));
  }

  const entradas = items.filter(i => i.type === "Entrada")
    .reduce((t, i) => t + i.value, 0);

  const saidas = items.filter(i => i.type === "Saída")
    .reduce((t, i) => t + i.value, 0);

  const saldoTotal = entradas - saidas;

  return (
    <div className="max-w-2xl mx-auto space-y-8">

      <header>
        <h1 className="text-3xl font-bold">MoneyFlow</h1>
        <p className="text-muted">Controle financeiro pessoal</p>
      </header>

      {/* DASHBOARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface p-4 rounded-xl shadow">
          <p className="text-muted">Entradas</p>
          <p className="text-green-600 font-bold text-xl">
            R$ {entradas.toFixed(2)}
          </p>
        </div>

        <div className="bg-surface p-4 rounded-xl shadow">
          <p className="text-muted">Saídas</p>
          <p className="text-danger font-bold text-xl">
            R$ {saidas.toFixed(2)}
          </p>
        </div>

        <div className="bg-surface p-4 rounded-xl shadow">
          <p className="text-muted">Saldo</p>
          <p className={`font-bold text-xl ${saldoTotal >= 0 ? "text-green-600" : "text-danger"}`}>
            R$ {saldoTotal.toFixed(2)}
          </p>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="bg-surface p-6 rounded-xl shadow space-y-4"
      >
        <Input
          label="Descrição"
          {...formulario.register("description")}
          error={formulario.formState.errors.description?.message}
        />

        <Select
          label="Tipo"
          {...formulario.register("type")}
          error={formulario.formState.errors.type?.message}
          options={[
            { value: "Entrada", label: "Entrada (+)" },
            { value: "Saída", label: "Saída (-)" },
          ]}
        />

        <Input
          label="Valor"
          type="number"
          step="0.01"
          {...formulario.register("value", { valueAsNumber: true })}
          error={formulario.formState.errors.value?.message}
        />

        <Button type="submit">Adicionar</Button>
      </form>

      {/* LISTA */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-surface p-4 rounded-lg shadow flex justify-between"
          >
            <div>
              <p className="font-medium">{item.description}</p>
              <p className={`text-sm ${item.type === "Entrada" ? "text-green-600" : "text-danger"}`}>
                {item.type} – R$ {item.value.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removerItem(index)}
              className="text-danger"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}