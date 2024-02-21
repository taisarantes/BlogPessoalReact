import './App.css'

import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import Home from './paginas/home/Home'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} ></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  )
}
export default App