import { useEffect, useState } from "react"
import styles from './ListaRepositorio.module.css'

function ListaRepositorio({ nomeUsuario }) {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true)
        setDeuErro(false)

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then((res) => {
                if(!res.ok) {
                    throw new Error('USUÁRIO NÃO ENCONTRADO')
                }
                return res.json()
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)
            })
            .catch((error) => {
                setDeuErro(true)
                setEstaCarregando(false)
                setRepos([])
            })
        }, [nomeUsuario])

        return(
            <div className="container">
                {deuErro && (
                    <div className={styles.alert}>
                        <h1 className={styles.mensagem}>USUÁRIO NÃO ENCONTRADO</h1>
                    </div>
                )}
                {estaCarregando ? (
                    <div className={styles.alert}>
                        <h1 className={styles.mensagem}>Caregando...</h1>
                    </div>
                ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => ( 
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> 
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
                )}
            </div>
        )
}

export default ListaRepositorio