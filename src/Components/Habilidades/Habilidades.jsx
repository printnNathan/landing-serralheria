import React from 'react';
import styles from "./Habilidades.module.css"
import correto from "../../assets/icons/correto.png"
import iconeBackEnd from "../../assets/icons/backend_icon.svg"
import iconeBancoDeDados from "../../assets/icons/bd_icon.png"
import iconeFerramentas from "../../assets/icons/ferramentas_icon.png"

function Habilidades() {
    return (
        <div className={styles.espaco}>
            <span className={styles.titulo}>Habilidades Técnicas</span>

            <div className={styles.cards}>

                <div className={styles.card1}>

                    <div>
                        <img src={iconeBackEnd} alt="icone de um servidor" className={styles.iconeBackEnd} />
                    </div>


                    <div className={styles.listando}>

                        <span className={styles.subtitulo}>Backend</span>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />.NET FRAMEWORK</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                    </div>
                </div>

                <div className={styles.card2}>

                    <div>
                        <img src={iconeBancoDeDados} alt="icone de um servidor" className={styles.iconeBackEnd} />
                    </div>


                    <div className={styles.listando}>

                        <span className={styles.subtitulo}>Banco de Dados</span>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />.NET FRAMEWORK</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                    </div>
                </div>

                <div className={styles.card3}>

                    <div>
                        <img src={iconeFerramentas} alt="icone de um servidor" className={styles.iconeBackEnd} />
                    </div>


                    <div className={styles.listando}>

                        <span className={styles.subtitulo}>Ferramentas</span>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />.NET FRAMEWORK</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>


                        <ul>
                            <li><img src={correto} alt="icone de correto" className={styles.correto} />C# / .NET Core</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Habilidades;
