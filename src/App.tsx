// // import { BrowserRouter, Routes, Route } from 'react-router-dom'

// // // Importação das páginas
// // import { Home } from './pages/Home'
// // import { TaskMaster } from './pages/TaskMaster'
// // import { ConnectHub } from './pages/ConnectHub'
// // import { MoneyFlow } from './pages/MoneyFlow'

// // // Importação do menu
// // import { Menu } from './components/Menu'

// // // Componente principal da aplicação
// // export function App() {
// //     return (
// //         <BrowserRouter>

// //             {/* Menu permanece visível em todas as páginas */}
// //             <Menu />

// //             {/* Definição das rotas */}
// //             <Routes>
// //                 <Route path='/' element={<Home />} />
// //                 <Route path='/taskmaster' element={<TaskMaster />} />
// //                 <Route path='/connecthub' element={<ConnectHub />} />
// //                 <Route path='/moneyflow' element={<MoneyFlow />} />
// //             </Routes>

// //         </BrowserRouter>
// //     )
// // }

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// // Importação das páginas
// import { Home } from './pages/Home'
// import { TaskMaster } from './pages/TaskMaster'
// import { ConnectHub } from './pages/ConnectHub'
// import { MoneyFlow } from './pages/MoneyFlow'

// // Importação do menu
// import { Menu } from './components/Menu'

// // Componente principal da aplicação
// export function App() {
//     return (
//         <BrowserRouter>

//             {/* Container global do sistema */}
//             <div className="min-h-screen bg-gray-100">

//                 {/* Menu fixo */}
//                 <Menu />

//                 {/* Área centralizada das páginas */}
//                 <div className="max-w-6xl mx-auto p-6">
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/taskmaster' element={<TaskMaster />} />
//                         <Route path='/connecthub' element={<ConnectHub />} />
//                         <Route path='/moneyflow' element={<MoneyFlow />} />
//                     </Routes>
//                 </div>

//             </div>

//         </BrowserRouter>
//     )
// }

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