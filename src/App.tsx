import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { TaskMaster } from "./pages/TaskMaster"
import { ConnectHub } from "./pages/ConnectHub"
import { MoneyFlow } from "./pages/MoneyFlow"

import { Menu } from "./components/Menu"

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        {/* Menu fixo */}
        <Menu />

        {/* Área principal */}
        <main className="max-w-6xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taskmaster" element={<TaskMaster />} />
            <Route path="/connecthub" element={<ConnectHub />} />
            <Route path="/moneyflow" element={<MoneyFlow />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
