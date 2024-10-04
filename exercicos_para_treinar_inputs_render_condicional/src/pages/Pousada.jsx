import React, { useState } from 'react'
import './Pousada.css'
import RelatorioDaPousada from '../components/RelatorioDaPousada'

function Pousada() {
  const [diasPousada,setDiasPousada ]=useState('')
  const [descontoUber,setDescontoUber]=useState('')
  const [relatorioPagamento,setRelatorioPagamento]=useState('')
  const [formaPagamento,setFormaPagamento]=useState('')

   function verrificarEstadia(){
    let valorDesconto
    let valorEstadia



    switch(true){

      case diasPousada<=5:

        if(descontoUber==15){
          valorEstadia=diasPousada*100

          valorDesconto=(valorEstadia*15)/100

          valorEstadia=valorEstadia-valorDesconto
           let RelatorioEstadia={
            valorEstadia:valorEstadia,
            obteveDesconto:"Sim",
            diasHospedado:diasPousada,
            valorDesconto:valorDesconto,
            formaPagamento:formaPagamento}
            setRelatorioPagamento(RelatorioEstadia)

        }else{
          valorEstadia=diasPousada*100

          let RelatorioEstadia={
            valorEstadia:valorEstadia,
            obteveDesconto:"Não",
            diasHospedado:diasPousada,
            valorDesconto:"não teve desconto",
            formaPagamento:formaPagamento}
          
         
            setRelatorioPagamento(RelatorioEstadia)
        }
        


      break

      case diasPousada>=6 && diasPousada <=10 :

        if(descontoUber==15){
          valorEstadia=diasPousada*90

          valorDesconto=(valorEstadia*15)/100

          valorEstadia=valorEstadia-valorDesconto

          let RelatorioEstadia={
            valorEstadia:valorEstadia,
            obteveDesconto:"Sim",
            diasHospedado:diasPousada,
            valorDesconto:valorDesconto,
            formaPagamento:formaPagamento}

            setRelatorioPagamento(RelatorioEstadia)

          
          }else{
            valorEstadia=diasPousada*90

            let RelatorioEstadia={
              valorEstadia:valorEstadia,
              obteveDesconto:"Não",
              diasHospedado:diasPousada,
              valorDesconto:'não teve desconto',
              formaPagamento:formaPagamento}

              setRelatorioPagamento(RelatorioEstadia)
         

          }


      break

      case diasPousada>=11 :
        if(descontoUber==15){
          valorEstadia=diasPousada*80
          valorDesconto=(valorEstadia*15)/100
          valorEstadia=valorEstadia-valorDesconto

          let RelatorioEstadia={
            valorEstadia:valorEstadia,
            obteveDesconto:"Sim",
            diasHospedado:diasPousada,
            valorDesconto:valorDesconto,
            formaPagamento:formaPagamento}

            setRelatorioPagamento(RelatorioEstadia)

          
          }else{
            valorEstadia=diasPousada*80

            let RelatorioEstadia={
              valorEstadia:valorEstadia,
              obteveDesconto:"Não",
              diasHospedado:diasPousada,
              valorDesconto : "não teve desconto",
              formaPagamento:formaPagamento}

              setRelatorioPagamento(RelatorioEstadia)
         

          }


      default:





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
    
    <button onClick={verrificarEstadia}> verrificar </button>

    {relatorioPagamento && <RelatorioDaPousada infos={relatorioPagamento} />}

   




      
    </div>
  )
}

export default Pousada
