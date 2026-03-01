import React from 'react';
import styles from "./Sobre.module.css"

function Sobre() {
    return (
        <div className={styles.espaco}>
            <span className={styles.titulo}>Sobre Mim</span>

            <div className={styles.card}>
                <div className={styles.imagem}></div>
                <div className={styles.textoCompleto}>

                    <div className={styles.paragrafos}>
                        <p className={styles.paragrafo1}>COMECOU Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto sed nostrum sapiente quasi ad explicabo
                            illo vitae expedita! Ipsa perferendis sint quas autem deleniti, provident quasi non minus atque! ACABOU</p>

                        <p className={styles.paragrafo2}>COMECOU Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et repellendus minima amet quidem, cupiditate
                            iusto quia sapiente soluta molestiae explicabo doloremque velit ipsam ea enim eos dolorum maiores sed! ACABOU
                        </p>

                        <p className={styles.paragrafo3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quisquam, cumque blanditiis tenetur
                            dolore illum porro magni eveniet temporibus, consequatur deleniti beatae dolorum voluptates laborum quam ducimus. Culpa, illum nulla.</p>

                        <div className={styles.botoes}>
                            <button className={styles.botao1}> Github</button>
                            <button className={styles.botao2}> Linkedin</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Sobre;
