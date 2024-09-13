import React, { useState } from 'react'

function VerrificarPar() {
  const [numero,setNumero]=useState()
  const [ePar,setEPar]=useState()

  function verrificarSePar(){
    if(numero%2==0){
        setEPar("numero Par")


    }else{
        setEPar("é inpar")
    }







  }
  
  
  
    return (
    <div className='container_master'>
        <h2>verrificação de numeros pares!</h2>
        <p>digite o numero para verrficar se é par:</p>
        <input type="number" value={numero} onChange={(event)=>{setNumero(event.target.value)}} /><br />
        <button onClick={verrificarSePar}>verrificar</button><br />
        <p>resultado: </p> {ePar}





      
    </div>
  )
}

export default VerrificarPar
