import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <p className={styles.paragrafo}>Olá, mundo! Meu nome é Matheus Pantunes e eu sou Desenvolvedor Front-End.
            Depois de mais de 6 anos trabalhando com design de livros, decidi seguir uma antiga paixão: computadores!</p>

            <p className={styles.paragrafo}>Em 2022, iniciei meus estudos em Programação, com foco em Desenvolvimento Web. 
            Sou apaixonado por Python/Web e o meu foco é aprender com os melhores.</p>

            <p className={styles.paragrafo}>Até agora, concluí o CS50, de Harvard, e tirei certificações em Flask Web Development e SCRUM Fundamentals.
            Também tenho inglês certificado e, neste momento, estou prestes a finalizar o CS50P de Harvard.</p>

            <p className={styles.paragrafo}>Ingressei no programa Oracle Next Education (ONE), este ano, seguindo a trilha Front-End, estou focando meus estudos em React.JS :)</p>

            <p className={styles.paragrafo}>Minhas áreas de interesse incluem: HTML5, CSS3, JavaScript, React, Python & Flask.</p>

            <p className={styles.paragrafo}>Se quiser dar uma olhada no meu GitHub, é só <a className={styles.paragrafoLink} href="https://github.com/AmigoDaLua" target="_blank" rel="noreferrer">clicar aqui</a>.</p>

        </PostModelo>
    )
}