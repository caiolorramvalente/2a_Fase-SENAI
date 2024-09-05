import React, { useState } from 'react'
import './Exemplo.css'
function Exemplo() {

     const [resultado, setResultado] = useState(0)

     function aumentar(){
        setResultado(resultado+1)
     }
     function abaixar(){
        setResultado(resultado-1)
     }
  return (
    <div>
     <center>
        <button onClick={aumentar}>➕</button>
        <button onClick={abaixar}>➖</button>
      
       {resultado}
      
      </center>

    </div>
  )
}

export default Exemplo
