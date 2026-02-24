import { NavLink } from "react-router-dom"

/*
  Página Home (Dashboard)
  Responsável por apresentar o portal e permitir
  a navegação para os módulos principais do sistema.
*/
export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      {/* Título principal do portal */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Portal de Utilidades
      </h1>

      {/* Texto introdutório */}
      <p className="text-gray-600 mb-10">
        Escolha um módulo para acessar:
      </p>

      {/* Grid responsivo com os cards de navegação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

        {/* Card de acesso ao TaskMaster */}
        <NavLink
          to="/taskmaster"
          className="bg-blue-500 text-white p-6 rounded-lg shadow hover:bg-blue-600 transition"
        >
          <h2 className="text-xl font-bold mb-2">TaskMaster</h2>
          <p>Gerenciamento de tarefas</p>
        </NavLink>

        {/* Card de acesso ao ConnectHub */}
        <NavLink
          to="/connecthub"
          className="bg-green-500 text-white p-6 rounded-lg shadow hover:bg-green-600 transition"
        >
          <h2 className="text-xl font-bold mb-2">ConnectHub</h2>
          <p>Gerenciamento de contatos</p>
        </NavLink>

        {/* Card de acesso ao MoneyFlow */}
        <NavLink
          to="/moneyflow"
          className="bg-purple-500 text-white p-6 rounded-lg shadow hover:bg-purple-600 transition"
        >
          <h2 className="text-xl font-bold mb-2">MoneyFlow</h2>
          <p>Controle financeiro</p>
        </NavLink>

      </div>

    </div>
  )
}