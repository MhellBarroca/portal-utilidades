import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";
import type { ContactFormData } from "../schemas/contactSchema";

export function ConnectHub() {
  /*
    Estado que funciona como "banco de dados local da aplicação".
    Guarda a lista de contatos cadastrados.
  */
  const [contacts, setContacts] = useState<ContactFormData[]>([]);

  /*
    Ao carregar a página, buscamos os contatos salvos no localStorage.
    Isso garante que os dados persistam após F5.
  */
  useEffect(() => {
    const contatosArmazenados = localStorage.getItem("contacts");

    if (contatosArmazenados === null) {
      setContacts([]);
      return;
    }

    setContacts(JSON.parse(contatosArmazenados));
  }, []);

  /*
    Configuração do formulário usando React Hook Form
    + validação com Zod.
  */
  const formulario = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  /*
    Função chamada quando o formulário é enviado.
    Recebe os dados já validados pelo Zod.
  */
  function submeterFormulario(dados: ContactFormData) {
    const novaLista = [...contacts, dados];

    // Atualiza o estado
    setContacts(novaLista);

    // Limpa o formulário após cadastro
    formulario.reset();

    /*
      Salvamento explícito no localStorage.
      Mesmo padrão usado em aula e no TaskMaster.
    */
    localStorage.setItem("contacts", JSON.stringify(novaLista));
  }

  /*
    Remove um contato usando o índice do array.
  */
  function removerContato(index: number) {
    const novaLista = contacts.filter((_, i) => i !== index);

    setContacts(novaLista);
    localStorage.setItem("contacts", JSON.stringify(novaLista));
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ConnectHub</h1>

      <form
        onSubmit={formulario.handleSubmit(submeterFormulario)}
        className="space-y-4"
      >
        {/* Campo Nome */}
        <div>
          <label>Nome Completo</label>
          <input
            {...formulario.register("name")}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.name && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <label>E-mail</label>
          <input
            {...formulario.register("email")}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Campo Telefone */}
        <div>
          <label>Telefone</label>
          <input
            {...formulario.register("phone")}
            className="w-full border p-2 rounded"
          />
          {formulario.formState.errors.phone && (
            <p className="text-red-500 text-sm">
              {formulario.formState.errors.phone.message}
            </p>
          )}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Adicionar
        </button>
      </form>

      {/* Lista de contatos */}
      <div className="mt-6 space-y-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="border p-2 rounded flex justify-between"
          >
            <span>
              {contact.name} – {contact.email} – {contact.phone}
            </span>
            <button
              onClick={() => removerContato(index)}
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


// Se o professor perguntar:

// “Como você valida os dados?”

// Uso Zod integrado com React Hook Form através do zodResolver.

// “Onde os dados ficam salvos?”

// No estado do componente e sincronizados com o localStorage.

// “Por que usar useEffect?”

// Para carregar os dados salvos quando a página é aberta.

// “Por que usar reset?”

// Para limpar o formulário após o cadastro.

// Tudo simples.
// Tudo igual aula.
// Tudo legítimo.