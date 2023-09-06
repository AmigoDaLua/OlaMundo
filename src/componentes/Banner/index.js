import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Opa, como vai? Meu nome é Matheus Pantunes e, entre outras coisas, sou <strong>Desenvolvedor Front-End</strong>.
                    <br /><br />Essa página, por exemplo, fiz com React.JS!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Círculo colorido"
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Matheus Pantunes"
                />
            </div>
        </div>
    )
}