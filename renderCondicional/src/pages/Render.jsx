import React, { useState } from 'react'
import './Render.css'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import Login from '../components/Login'

function Render() {
    const [adm ,setAdm] = useState(true)
    const [idade,setIdade] = useState(0)
    const {usuario,setUsuario} = useState(true)

  return (
    <div>
        <h1>📁 renderização de condicionais 📁</h1>
        <div className='renderContainer'>
            <button onClick={()=>{setAdm(true)}}>ADM</button>
            <button onClick={()=>{setAdm(false)}}>Usuario</button>
            { adm && <PainelAdm /> }

        </div>
        <div className='renderContainer'>
            <button onClick={()=>{setIdade(idade+1)}}>➕</button>
            {idade}
         <button onClick={()=>{setIdade(idade-1)}}>➖</button>
         {idade>=18 && <ProdutosParaMaiores />}



        </div>
        <div className='renderContainer'>
            <button onClick={()=>{setUsuario(true)}}>Logar</button>

            <button onClick={()=>{setUsuario(false)}}>Deslogar</button>

            { usuario ? <UsuarioLogado /> : <Login /> }




        </div>

      
    </div>
  )
}

export default Render
