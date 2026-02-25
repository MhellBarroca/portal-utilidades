import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="space-y-10">

      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Portal de Utilidades
        </h1>
        <p className="text-gray-500">
          Centralize suas tarefas, contatos e finanças em um só lugar
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NavLink
          to="/taskmaster"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            TaskMaster
          </h2>
          <p className="text-gray-600">Gerenciamento de tarefas</p>
        </NavLink>

        <NavLink
          to="/connecthub"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            ConnectHub
          </h2>
          <p className="text-gray-600">Gerenciamento de contatos</p>
        </NavLink>

        <NavLink
          to="/moneyflow"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            MoneyFlow
          </h2>
          <p className="text-gray-600">Controle financeiro</p>
        </NavLink>
      </div>
    </div>
  );
}