import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.bottomSection}>
        <h3 className={styles.title}>{title}</h3>
        <button
          className={styles.detailsButton}
          onClick={() => setShowDetails(true)}
        >
          Plus de détails
        </button>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>

      {showDetails && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button
              className={styles.closeButton}
              onClick={() => setShowDetails(false)}
            >
              Retour
            </button>
          </div>
        </div>
      )}
    </div>
  );
};