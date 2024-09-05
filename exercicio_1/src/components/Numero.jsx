import React, { useState } from 'react'

function Numero() {
const [resultado,setResultado]=useState()
   function NumeroPositivo(){
    let numeroDigitado=Number(prompt("digite um número paa verrificar se é positivo : "))

    if(numeroDigitado>=1){
        setResultado("positivo")



    }else if(numeroDigitado==0){

        setResultado("numero digtado foi zero")


    }else if(numeroDigitado<0){

        setResultado("Negativo")
    }else{
        setResultado("Nulo")
    }





   }
   

    return (
    <div className='mediaContainer'>
        <h2>exercicio numero para verrificar</h2>
        <button onClick={NumeroPositivo}>verrificar</button>
        Resultado:{resultado}
      
    </div>
  )
}

export default Numero

