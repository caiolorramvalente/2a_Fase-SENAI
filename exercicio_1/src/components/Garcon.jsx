import React, { useState } from 'react'

function Garcon() {

    const [resultado,setResultado]=useState()

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
            

            
        }else{
            setResultado("O emprestimo não foi autorizado 😭")


        }



    }
    return (
    <div className='mediaContainer'>
        <h2>Restaurante</h2>
        <button onClick={prestacao}>verrificar</button>
        <p>reultado: </p>{resultado}
      
    </div>
  )
}

export default Garcon
