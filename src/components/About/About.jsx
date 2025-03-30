import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const handleDownloadCV = () => {
    // Utiliser la variable d'environnement de Vite si disponible
    const baseUrl = import.meta.env.BASE_URL || "/zegganewalidPortfolio";
    const pdfUrl = `${baseUrl}/cv/CvMasterWalidZeggane.pdf`;
    
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CvMasterWalidZeggane.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduated.png")} alt="graduated icon" />
            <div className={styles.aboutItemText}>
              <h3>Formation</h3>
              <p>+4 ans d'études en Informatique</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/entrepreneur.png")} alt="entrepreneur icon" />
            <div className={styles.aboutItemText}>
              <h3>Experience</h3>
              <p>+10 projets académiques et personnels</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/handshake.png")} alt="handshake icon" />
            <div className={styles.aboutItemText}>
              <h3>Collaboration</h3>
              <p>Ouvert à l'apprentissage et au travail d'équipe</p>
            </div>
          </li>
        </ul>
        {/* Bouton de téléchargement du CV */}
        <button className={styles.cvButton} onClick={handleDownloadCV}>
          <img src={getImageUrl("about/cv.png")} alt="CV icon" />
          Télécharger mon CV
        </button>
      </div>
    </section>
  );
};
