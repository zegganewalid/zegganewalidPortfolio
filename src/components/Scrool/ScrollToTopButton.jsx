// ScrollToTopButton.jsx
import React, { useState } from "react";
import { getImageUrl } from "../../utils"; // Assure-toi que cette fonction existe
import styles from "./ScrollToTopButton.module.css"; // Importation du fichier CSS module

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction de défilement vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Gérer la visibilité du bouton en fonction du défilement
  const toggleButtonVisibility = () => {
    if (window.scrollY > 300) { // Ajuster la valeur pour la visibilité du bouton
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Écouter l'événement de défilement
  window.onscroll = toggleButtonVisibility;

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <img 
            src={getImageUrl("scrool/scrool.png")} 
            alt="Scroll to top" 
            className={styles.scrollIcon}
          />
        </button>
      )}
    </>
  );
};
