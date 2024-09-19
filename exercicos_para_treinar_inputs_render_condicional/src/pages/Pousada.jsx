import React, { useState } from 'react'
import './Pousada.css'

function Pousada() {
  const [diasPousada,setDiasPousada ]=useState('')
  const [descontoUber,setDescontoUber]=useState('')
  const [relatorioPagamento,setRelatorioPagamento]=useState('')
  const [formaPagamento,setFormaPagamento]=useState('')

   function verrificarEstadia(){
    let valorPousada
    let valorDesconto
    let valorPousadaSemDesconto

    if(diasPousada<=5){
      valorPousadaSemDesconto=diasPousada*100
      if(Number(descontoUber)==15){
        valorDesconto=(valorPousadaSemDesconto*15)/100
        valorPousada=valorPousadaSemDesconto-valorDesconto
          
        let infosPagamentosPousada={
            valorPousadaBruto:valorPousadaSemDesconto,
            valorPousada:valorPousada,
            desconto:descontoUber,
            formaPagamento:formaPagamento,
            diasNaPousada:diasPousada

        }




      }else{
        valorPousadaSemDesconto=diasPousada*100
        
        let infosPagamentosPousada={
          valorPousadaBruto:valorPousadaSemDesconto,
          valorPousada:valorPousada,
          desconto:descontoUber,
          formaPagamento:formaPagamento,
          diasNaPousada:diasPousada

 

      }
    }

   }else if(diasPousada>6 && diasPousada<11){
    valorPousadaSemDesconto=diasPousada*90




   }

  }

  return (
    <div className='div_master'>
      <h2>🌴Óla seja bem vindo a nossa pousada,faça o cadastro 
        de sua estadia aqui🌴
      </h2>
      
      
        <label htmlFor="inptDiasPousada">digite quantos dias planeja ficar </label>
        <input type="Number" id='inptDiasPousada' value={diasPousada} onChange={(event)=>{setDiasPousada(event.target.value)}} /> <br />

        <p>você faz parte da Associação dos motoristas do Uber de Palhoça ?</p>
        <select name="" id="" value={descontoUber} onChange={(event)=>{setDescontoUber(event.target.value)}}>
          <option value="0">não</option>
          <option value="15">sim</option>
          
        </select>

        <p>forma de pagamento</p>

        <select className='slctPagamento' value={formaPagamento} onChange={(event)=>{setFormaPagamento(event.target.value)}} id='slctPagamento'>
          <option value="credito">credito</option>
          <option value="debito">debito</option>
          <option value="em dinheiro">em dinheiro</option>
        </select><br />
    <button> verrificar </button>

   




      
    </div>
  )
}

export default Pousada
