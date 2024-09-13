import { useState } from 'react'
import './App.css'
import NumeroAleatorio from './pages/NumeroAleatorio'
import DiasSemana from './pages/DiasSemana'
import VerrificarPar from './pages/VerrificarPar'


function App() {
  
  const [pagina,setPagina]=useState(<NumeroAleatorio />)
  

  return (
    <>

    <button onClick={()=>{setPagina(<NumeroAleatorio />)}}>número aleatorio</button> 
    <button onClick={()=>{setPagina(<DiasSemana />)}}>dia da semana:</button>
    <button onClick={()=>{setPagina(<VerrificarPar />)}}>verrificação de números pares </button>
    
   
   {pagina}
    
    
    

    
      
    </>
  )
}

export default App
