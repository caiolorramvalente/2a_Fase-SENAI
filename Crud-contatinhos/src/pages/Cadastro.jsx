import React, { useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from "../contexts/GlobalContext"
import './Cadastro.css'

function Cadastro() {
const [inptNome,setInptNome]=useState('')
const{ contatoPessoa,setContatoPessoa,contatosPessoas,setContatosPessoas} = useContext(GlobalContext)

function cadastrarContatinho(){
    // setContatoPessoa(inptNome)
    setContatosPessoas([...contatosPessoas,inptNome])
    console.log(contatosPessoas)



}

  return (
    <div>
        <Navbar />
        <h1>Cadastre seu contatinho</h1>
        <div className='input-container'>
        <label>Nome:</label><input type="text" value={inptNome} onChange={(event)=>{setInptNome(event.target.value)}} />
        {/* <label>Idade</label><input type="text" />
        <label></label><input type="text" /> */}
     

        </div><br /><br />
        <button onClick={cadastrarContatinho}>Cadastrar contatinho</button>
      
        <div className="contatosPessoas">{contatosPessoas.map((c,index)=>(
            <div key={index} className='cardContatos'>
                <img src="../images/user.png" alt="" className='imgDragao' />
                <h3>Contato: </h3>
                <p>{c}</p>
            </div>
        ))}</div>
      
    </div>
  )
}

export default Cadastro
