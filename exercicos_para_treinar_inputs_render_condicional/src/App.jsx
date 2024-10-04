import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Pousada from './pages/Pousada'
import PesquisaHabitantes from './pages/PesquisaHabitantes'

function App() {
  const [pagina, setPagina] = useState(<Home />)

  return (
    <>
      
      <button onClick={()=>{setPagina(<Pousada />)}}>Diarias de uma pousada</button>
      <button onClick={()=>{setPagina(<PesquisaHabitantes />)}}>🔎Pesquisa sobre habitantes🔍</button>
      {pagina}
      
      
      
    </>
  )
}

export default App
