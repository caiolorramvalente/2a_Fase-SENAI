import { useState } from "react"
import './Media.css'

function Medias() {
  
  const[resultado,setResultado]= useState()
  
  function calcularMedia(){
    let notaUm= Number(prompt("digite a 1° nota"))
    let notaDois = Number(prompt("digite a 2° nota"))
    let media=(notaDois+notaUm)/2
    setResultado(media)


  }
    return (

    <div >
        <div className="mediaContainer">

       <h2>exercício para calcular media de 2️ números</h2>
       <button onClick={calcularMedia}>Calcular</button>
      Média: {resultado}
      </div>
      
      
    </div>
  )
}

export default Medias
