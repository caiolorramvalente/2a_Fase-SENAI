import React, { useState } from 'react'

function DoisCopos() {
    const [resultado,setResultado]=useState()
    function numeroPar(){
        let numeroDigitado = Number(prompt("digite um numero pra verrifcar se é positivo!"))
        
        if(numeroDigitado % 2 == 0 && numeroDigitado>1){
            setResultado("O numero digitado é positivo é par ao mesmo tempo!✅")


        }else{
            setResultado("o numero digitado não é par e positivo ao mesmo tempo!❌")
        }




    }



 
 
    return (
    <div className='mediaContainer'>
        <h2>Atividade verrificar se é par e positivo ao mesmo tempo!</h2>
        <button onClick={numeroPar}>Verrificar</button>
        <p>resultado:</p>{resultado}


      
    </div>
  )
}

export default DoisCopos
