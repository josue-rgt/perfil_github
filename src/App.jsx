import { useState } from "react" 
import Perfil from "./components/Perfil"
import ListaRepositorio from "./components/ListaRepositorio"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
      <input type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} />

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
