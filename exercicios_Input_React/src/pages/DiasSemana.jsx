import React, { useState } from 'react'
import './DiasSemanas.css'


function DiasSemana() {
    const [numero,setNumero] = useState()
    const [diaSemana,setDiaSemana] =useState()

     function numeroDiaSemana(){
        
        switch(true){
            case numero==1:
                setDiaSemana('domingo')

            break

            case numero==2:
                setDiaSemana('segunda')

            break

            case numero==3:
                setDiaSemana('terça')

            break

            case numero==4:
                setDiaSemana('quarta')

            break

            case numero==5:
                setDiaSemana('quinta')

            break

            case numero==6:
                setDiaSemana('sexta')

            break

            case numero==7:
                setDiaSemana('sabado')

            

            default:
                setDiaSemana(<img src='./images/ta_Errado.jfif'/>)
                
        }
     }

    
  
    return (
    <div className='container_master'>
        <h2> digite o numero e descubra a qual dia ele comresponde!</h2>

        <p>digite aqui</p> <input type="text" value={numero} onChange={(event)=>{setNumero(event.target.value)}} /> <br />
        <button className='Butao' onClick={numeroDiaSemana}>Conferrir</button><br />
        resultado: <br /><br />{diaSemana}

      
    </div>
  )
}

export default DiasSemana
