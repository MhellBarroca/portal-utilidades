import { NavLink } from 'react-router-dom'

// Componente responsável pela navegação principal
export function Menu() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex gap-6">
            {/* NavLink permite identificar qual rota está ativa */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/taskmaster">TaskMaster</NavLink>
            <NavLink to="/connecthub">ConnectHub</NavLink>
            <NavLink to="/moneyflow">MoneyFlow</NavLink>
        </nav>
    )
}