import React from "react";
import { getImageUrl } from "../../utils"; // Assurez-vous que cette fonction existe

import styles from "./Footer.module.css"; // Assurez-vous que le fichier CSS existe

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3 className={styles.title}>WALID</h3>
        <p className={styles.copyRight}>2025 © zeggane walid. Tous droits réservés.</p>
        <div className={styles.icons}>
          <a 
            href="https://github.com/zegganewalid" 
            className={styles.icon}
            target="_blank"  // Ouvre dans un nouvel onglet
            rel="noopener noreferrer" // Sécurise l'ouverture du lien
          >
            <img 
              src={getImageUrl("contact/githubIcon.png")} 
              alt="GitHub" 
              className={styles.iconImage}
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/zeggane-walid" 
            className={styles.icon}
            target="_blank"  // Ouvre dans un nouvel onglet
            rel="noopener noreferrer" // Sécurise l'ouverture du lien
          >
            <img 
              src={getImageUrl("contact/linkedinIcon.png")} 
              alt="LinkedIn" 
              className={styles.iconImage}
            />
          </a>
          <a 
            href="mailto:zegganewalid11@gmail.com" 
            className={styles.icon}
            target="_blank"  // Ouvre dans un nouvel onglet (ceci est plus utile si vous utilisez une plateforme d'email comme Gmail)
            rel="noopener noreferrer" // Sécurise l'ouverture du lien
          >
            <img 
              src={getImageUrl("contact/emailIcon.png")} 
              alt="Email" 
              className={styles.iconImage}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
