import React, { useState } from 'react'

function StarUber() {
 const [resultado,setResultado]=useState(1)
 const [Resultado,SetResultado]=useState(2)


    function calcularRota(){
        let distanciaPercurso=Number(prompt("ola seja bem vindo ao primeiro serviço de carro espacial!,para obeter os serviços diga a diatncia de seu percurso em quilometos(km): "))
        let velocidade=300000
        let tempo_viagem
        
        tempo_viagem=distanciaPercurso/velocidade
      
        if(tempo_viagem<60){
            
            tempo_viagem=tempo_viagem.toFixed(4)
            SetResultado("tempo da viagem em segundos:  ")
            setResultado(tempo_viagem)
            

        }else if(tempo_viagem>60 && tempo_viagem<3600){
            
            tempo_viagem=tempo_viagem/60
            tempo_viagem=tempo_viagem.toFixed(2)
            SetResultado(" tempo da viagem em minutos:   ")
            setResultado(tempo_viagem)


        }else if(tempo_viagem>3600 && tempo_viagem<86400){
            
                tempo_viagem=tempo_viagem/3600
                tempo_viagem=tempo_viagem.toFixed(2)
                SetResultado("tempo da viagem em horas:   ")
                setResultado(tempo_viagem)



        }else if(tempo_viagem>86400 && tempo_viagem<2592000){
            
            tempo_viagem=tempo_viagem/86400
            tempo_viagem=tempo_viagem.toFixed(0)
            SetResultado(" tempo da viagem em Dias:   ")
            setResultado(tempo_viagem)


            
        }else if(tempo_viagem>2592000 && tempo_viagem<31104000){
            
            tempo_viagem=tempo_viagem/2592000
            tempo_viagem=tempo_viagem.toFixed(0)
            SetResultado("tempo da viagem em meses:   ")
            setResultado(tempo_viagem)





        }else if(tempo_viagem>31104000){
            
            tempo_viagem=tempo_viagem/31104000
            tempo_viagem=tempo_viagem.toFixed(1)
            SetResultado(" tempo da viagem em anos:   ")
            setResultado(tempo_viagem)



        }


        





        



        
        









    }
 
 
 
 
 
 
 
 
 
 
 
 
 
    return (
    <div className='mediaContainer'>
        <h2>📀Star uber📀</h2>

        <button onClick={calcularRota}>verrificar tempo</button>
        {Resultado}
        {resultado}
        




      
    </div>
  )
}

export default StarUber
