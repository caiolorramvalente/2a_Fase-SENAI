import React from 'react'

function RelatorioDaPousada(props) {
  return (
    <div>

        <h2>relatorio de pagamento</h2>
        <p>forma pagamento: {props.infos.formaPagamento}</p>
        <p>valor da pousada: {props.infos.valorEstadia}</p>
        <p>teve desconto : {props.infos.obteveDesconto}</p>
        <p>valor desconto : {props.infos.valorDesconto}</p>
        <p>dias que ficou hospedado: {props.infos.diasHospedado} dias</p>
      
    </div>
  )
}

export default RelatorioDaPousada
