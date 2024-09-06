import React, { useState } from 'react'

function Compra() {
    const [resultado,setResultado]=useState()
  
    function mercado(){
    let valorCompra=Number(prompt("digite o valor de sua compra em reais(R$):"))
    let DescontoUm=45
    let DescontoDois=30
    let valorDesconto
    if(valorCompra<20){
        valorDesconto=(valorCompra*DescontoUm)/100
        valorCompra=valorCompra-valorDesconto
        setResultado("valor: "+valorCompra)


    }else{
        valorDesconto=(valorCompra*DescontoDois)/100
        valorCompra=valorCompra-valorDesconto
        setResultado(valorCompra)


    }








  }
  
  
  
    return (
    <div className='mediaContainer'>
        <h2>🥩mercado🥦</h2>
        <button onClick={mercado}>Inserrir</button>
        <p>resultado</p>{resultado}
    


      
    </div>
  )
}

export default Compra
