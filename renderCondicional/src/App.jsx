import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contatos from './pages/Contatos'
import UsuarioPage from './pages/UsuarioPage'
import Render from './pages/Render'

function App() {
  const[pagina, setPagina] = useState(<Home />)

  function mostrarHome(){
    setPagina(<Contatos />)



  }

  
  return (
    <>
    <nav>
      {/* <button onClick={mostrarHome}>pagina de contato</button> */}
      <button onClick={()=>{setPagina(<UsuarioPage />)}}>Pagina usuario</button>
      <button onClick={()=>{setPagina(<Home />)}}>home page</button>
      <button onClick={()=>{setPagina(<Render />)}}>pagina Render</button>
      
      </nav>
     {pagina}


    </>
  )
}

export default App
