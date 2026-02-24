import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importação das páginas
import { Home } from './pages/Home'
import { TaskMaster } from './pages/TaskMaster'
import { ConnectHub } from './pages/ConnectHub'
import { MoneyFlow } from './pages/MoneyFlow'

// Importação do menu
import { Menu } from './components/Menu'

// Componente principal da aplicação
export function App() {
    return (
        <BrowserRouter>

            {/* Menu permanece visível em todas as páginas */}
            <Menu />

            {/* Definição das rotas */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/taskmaster' element={<TaskMaster />} />
                <Route path='/connecthub' element={<ConnectHub />} />
                <Route path='/moneyflow' element={<MoneyFlow />} />
            </Routes>

        </BrowserRouter>
    )
}