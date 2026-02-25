import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import type { ContactFormData } from "../schemas/contactSchema";

export function ConnectHub() {
  const [contacts, setContacts] = useState<ContactFormData[]>([]);

  useEffect(() => {
    const contatosArmazenados = localStorage.getItem("contacts");
    if (contatosArmazenados) {
      setContacts(JSON.parse(contatosArmazenados));
    }
  }, []);

  const formulario = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function submeterFormulario(dados: ContactFormData) {
    const novaLista = [...contacts, dados];
    setContacts(novaLista);
    formulario.reset();
    localStorage.setItem("contacts", JSON.stringify(novaLista));
  }

  function removerContato(index: number) {
    const novaLista = contacts.filter((_, i) => i !== index);
    setContacts(novaLista);
    localStorage.setItem("contacts", JSON.stringify(novaLista));
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">

      <header>
        <h1 className="text-3xl font-bold">ConnectHub</h1>
        <p className="text-muted">Gerencie seus contatos</p>
      </header>

      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="bg-surface p-6 rounded-xl shadow space-y-4"
      >
        <div>
          <label className="text-sm font-medium">Nome Completo</label>
          <input
            {...formulario.register("name")}
            className="w-full border p-2 rounded mt-1"
          />
          {formulario.formState.errors.name && (
            <p className="text-danger text-sm">
              {formulario.formState.errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">E-mail</label>
          <input
            {...formulario.register("email")}
            className="w-full border p-2 rounded mt-1"
          />
          {formulario.formState.errors.email && (
            <p className="text-danger text-sm">
              {formulario.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Telefone</label>
          <input
            {...formulario.register("phone")}
            className="w-full border p-2 rounded mt-1"
          />
          {formulario.formState.errors.phone && (
            <p className="text-danger text-sm">
              {formulario.formState.errors.phone.message}
            </p>
          )}
        </div>

        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
          Adicionar contato
        </button>
      </form>

      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-surface p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{contact.name}</p>
              <p className="text-sm text-muted">{contact.email}</p>
              <p className="text-sm text-muted">{contact.phone}</p>
            </div>
            <button
              onClick={() => removerContato(index)}
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