import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils"; // Assurez-vous que cette fonction existe

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    project: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.project) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    // Envoi du formulaire via EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.project,
      }, USER_ID)
      .then(() => {
        alert("Message envoyé avec succès !");
        setFormData({ name: "", email: "", subject: "", project: "" });
      })
      .catch((error) => {
        console.error("Erreur d'envoi :", error);
        alert("Erreur lors de l'envoi du message");
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.header}>
        <h2>Contact</h2>
        <p>Écrivez-moi</p>
      </div>

      {/* Section des liens */}
      <div className={styles.content}>
        <div className={styles.linksSection}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a 
                href="mailto:zegganewalid11@email.com" 
                target="_blank"  // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurise l'ouverture du lien
              >
                zegganewalid11@email.com
              </a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a 
                href="https://www.linkedin.com/in/zeggane-walid/"
                target="_blank"  // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurise l'ouverture du lien
              >
                linkedin.com/zeggane-walid
              </a>
            </li>
            <li className={styles.link}>
              <img 
                src={getImageUrl("contact/githubIcon.png")} 
                alt="Github icon" 
              />
              <a 
                href="https://github.com/zegganewalid"
                target="_blank"  // Ouvre dans un nouvel onglet
                rel="noopener noreferrer" // Sécurise l'ouverture du lien
              >
                github.com/zegganewalid
              </a>
            </li>
          </ul>
        </div>

        {/* Formulaire de contact */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Nom *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Sujet *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Projet *</label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </footer>
  );
};
