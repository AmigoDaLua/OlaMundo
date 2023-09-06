import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import erro404 from "assets/404.png"
import { useNavigate } from "react-router-dom"

export default function NaoEncontrada(){

    const navegar = useNavigate()

    return(
        <>
            <div
            className={styles.conteudoContainer}
            >
                <span className={styles.texto404}>404</span>

                <img 
                className={styles.imagemErro404}
                src={erro404}
                alt="Personagem perdido na floresta"
            />

                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                
                <div 
                className={styles.botaoContainer}
                onClick={()=> navegar(-1)}
            >
                <BotaoPrincipal 
                tamanho="lg"
                >
                    Voltar
                </BotaoPrincipal>
            </div>


            </div>
        </>


    )
}