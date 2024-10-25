import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado,contatoPessoa} = useContext(GlobalContext)
 

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      {contatoPessoa}

    </div>
  )
}

export default Home
