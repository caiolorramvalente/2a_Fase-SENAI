import React, { useState } from 'react'
import StatusEmprestimos from './StatusEmprestimos'

function Garcon() {

    const [resultado,setResultado]=useState()
    const  [stateRelatorio,setStateRelatorio]=useState()


    function prestacao(){
        let valorSalario = Number(prompt("digite seu salario: "))
        let  porcentagemPrestacao=30
        let valorEmprestimo=Number(prompt("digite o valor do seu emprestimo"))
        let vezesPrestacao=Number(prompt("digite em quantas vezes vai pagar"))
        let valorPrestacao
        let salarioMaxprestacao

        salarioMaxprestacao=(valorSalario*porcentagemPrestacao)/100
        valorPrestacao=valorEmprestimo/vezesPrestacao

        if(salarioMaxprestacao>valorPrestacao){
            setResultado("O emprestimo foi autorizado 😀")
            let infosrelatorio = {
                situacao: "aprovado",
                maxPrestacao: salarioMaxprestacao  ,
                prestacao:vezesPrestacao,
                emprestimo:valorEmprestimo ,
                valorPrestacao:valorPrestacao

            
            
            
                
            }
            {stateRelatorio(infosrelatorio)}
            
            

            
        }else{
            setResultado("O emprestimo não foi autorizado 😭")
            let infosrelatorio = {
                situacao: "reprovado",
                maxPrestacao: salarioMaxprestacao  ,
                prestacao:vezesPrestacao,
                emprestimo:valorEmprestimo ,
                valorPrestacao:valorPrestacao

            
            
            
                
            }
            {stateRelatorio(infosrelatorio)}


        }



    }
    return (
    <div className='mediaContainer'>
        <h2>emprestimos</h2>
        <button onClick={prestacao}>verrificar</button>
        {stateRelatorio &&<StatusEmprestimos  infos={stateRelatorio} />}
      
    </div>
  )
}

export default Garcon
