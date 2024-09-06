import React, { useState } from 'react'

function AlunoNota() {

    const [resultado,setResultado]=useState()
  
  function notas(){
    let notaUm=Number(prompt("digite sua primeira nota do colegio"))
    let notaDois=Number(prompt("digite sua primeira nota do colegio"))
    let divisor=2
    let mediaAluno
    let letraNota

    mediaAluno=(notaUm+notaDois)/divisor


    if(mediaAluno>=9 && mediaAluno<=10){
        letraNota="A"
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'resultado em letras: '+letraNota)
        

    }else if(mediaAluno>7.5 && mediaAluno<9){
        letraNota='B'
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'resultado em letras: '+letraNota)


    }else if(mediaAluno>6 && mediaAluno<7.5){
        letraNota="C"
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'resultado em letras: '+letraNota)



    }else if(mediaAluno>4 && mediaAluno<6){
        letraNota="D"
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'resultado em letras: '+letraNota)


    }else if(mediaAluno>0 && mediaAluno<4){
        letraNota="E"
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'resultado em letras: '+letraNota)


    }else if(mediaAluno<=0){
        letraNota="F"
        setResultado('nota um: '+notaUm+"\nnota Dois: "+notaDois+'\nmedia nota: '+mediaAluno+'\nresultado em letras: '+letraNota)


    }



    




  }
  
  
  
  
    return (
    <div className='mediaContainer'>
        <h2>📘Escola📘</h2>
        <button onClick={notas}>ver notas</button>
       <p>Nota: </p>{resultado}


      
    </div>
  )
}

export default AlunoNota
