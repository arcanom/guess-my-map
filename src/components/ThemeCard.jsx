import React from 'react';
import styles from './ThemeCard.module.css'
import { Link } from 'react-router-dom';
function ThemeCard( {nom, nombreDeJeu, image}){
    return(
     <div className={styles.themeCard} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.themeCardOverlay}>
        <h2>{nom}</h2>
        <p>Nombre de jeux : {nombreDeJeu}</p>
        <Link to={`/${encodeURIComponent(nom)}/1`}>
        <button>Jouer</button>
        </Link>
      </div>
    </div>
    )
}

export default ThemeCard;