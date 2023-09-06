import styles from "./Rodape.module.css"

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <p className={styles.rodapeTexto}>Desenvolvido por <a href="https://github.com/amigodalua" target="_blank" rel="noreferrer">Matheus Pantunes</a></p>
        </footer>

    )
}