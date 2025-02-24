import React from "react";
import styles from "./Services.module.css";
import { getImageUrl } from "../../utils";

export const Services = () => {
  const services = [
    {
      title: "Développement Web Front-End",
      description:
        "Création d'interfaces utilisateur dynamiques et réactives avec React.js et Vue.js. Design moderne et responsive.",
      imageSrc: "services/frontend.png",
    },
    {
      title: "Développement Web Back-End",
      description:
        "Développement de back-end robuste avec Node.js et Express.js, gestion de bases de données avec MongoDB.",
      imageSrc: "services/backend.png",
    },
    {
      title: "Analyse de Données avec Power BI",
      description:
        "Analyse avancée de données, création de dashboards interactifs et visuels avec Power BI pour des prises de décision éclairées.",
      imageSrc: "services/powerbi.png",
    },
  ];

  return (
    <section className={styles.container} id="services">
      <div>
        <h2 className={styles.title}>Mes Services</h2>
        <div className={styles.content}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <img
                src={getImageUrl(service.imageSrc)}
                alt={service.title}
                className={styles.serviceIcon}
              />
              <div className={styles.serviceDetails}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
