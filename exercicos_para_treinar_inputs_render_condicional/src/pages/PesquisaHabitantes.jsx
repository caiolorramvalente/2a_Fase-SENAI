import React, { useState } from 'react'

function PesquisaHabitantes() {
    const [idadePessoas,setIdadePessoas]=useState('')
    const [perguntaLocalizacao,setPerguntaLocalizacao]=useState(1)
    
    function pesquisaHabitantes(){
        

    }





    return (
    <div>
        <h1>🌎 Òla seja bem vindo 🌎</h1>
        <h2>ola,essa pagina esta destinada a verrificar a idade de pessoas então digite a idade de 10 pessoa  </h2>
       <label htmlFor="inptIdade" >Digite aqui a idade das pessoas:{perguntaLocalizacao}</label> 
       <input type="text" id='inptIdade'  value={idadePessoas} onChange={(event)=>{setIdadePessoas(event.target.value)}} /> <br /><br /><br />
       {idadePessoas}

       <select name="" id="">
        <option value="">Masculino</option>
        <option value="">Feminino</option>
       </select><br /><br />
       <button onClick={pesquisaHabitantes}>cadastrar</button>
      
    </div>
  )
}

export default PesquisaHabitantes
