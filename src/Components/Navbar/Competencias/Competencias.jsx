import React from 'react';
import styles from "./Competencias.module.css";
import arquiteturaIcon from "../../assets/icons/development.png"
import cicloIcon from "../../assets/icons/ciclo.png"
import segurancaIcon from "../../assets/icons/segurancaIcon.png"
import branchIcon from "../../assets/icons/branch.png"

function Competencias() {
    return (
        <div>
            <div className={styles.espaco}>
                
                <h2>Outras Competências</h2>

                <div className={styles.cards}>
                    <div className={styles.card1}><img src={arquiteturaIcon} alt="" className={styles.icone}/> <p>Arquitetura de Software</p></div>
                    <div className={styles.card2}><img src={branchIcon} alt="" className={styles.icone}/> <p>Desing Patterns</p></div>
                    <div className={styles.card3}><img src={cicloIcon} alt="" className={styles.icone}/> <p>CI/CD</p></div>
                    <div className={styles.card4}><img src={segurancaIcon} alt="" className={styles.icone}/> <p>Segurança</p></div>
                </div>
                
            </div>

        </div>
    );
}

export default Competencias;
