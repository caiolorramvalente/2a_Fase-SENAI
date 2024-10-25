import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates domo da simocroft'
const [contatoPessoa,setContatoPessoa]=useState('')
const [contatosPessoas,setContatosPessoas]=useState([])

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            contatoPessoa,
            setContatoPessoa,
            contatosPessoas,
            setContatosPessoas


        }}>
            {children}
        </GlobalContext.Provider>
        
    )
}
