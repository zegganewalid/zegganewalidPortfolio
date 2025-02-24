import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zeggane Walid</h1>
        <div className={styles.description}>
          <p className={styles.mainTitle}>
            Étudiant en Licence 3 Informatique – MIAGE
          </p>
          <p className={styles.subtitle}>
            Université d'Évry, Université Paris-Saclay
          </p>
          <p className={styles.text}>
            Passionné par l'informatique et la gestion des systèmes d'information, 
            je suis actuellement en troisième année de Licence MIAGE 
            (Méthodes Informatiques Appliquées à la Gestion des Entreprises).
          </p>
          <p className={styles.text}>
            Mon parcours allie à la fois des compétences en développement logiciel, 
            en gestion de projet et en analyse de données.
          </p>
        </div>
        {/* Bouton pour faire défiler vers la section "contact" */}
        <button onClick={scrollToContact} className={styles.contactBtn}>
          Prendre Contact
        </button>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
