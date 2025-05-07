import { useState } from "react" 
import Perfil from "./components/Perfil"
import ListaRepositorio from "./components/ListaRepositorio"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
      <div className="pesquisa">
        <input className="pesquisaUsuario" type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} placeholder="Digite o nome do usuário" />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ListaRepositorio nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
