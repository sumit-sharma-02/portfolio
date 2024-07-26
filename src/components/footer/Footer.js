import React from "react";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Footer.css";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <motion.div 
          className="footer-content"
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <motion.div className="footer-section">
            <h4>Páginas</h4>
            <ul>
              <li>
                <NavLink 
                  to="/home" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/experience" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </motion.div>
          <motion.div className="footer-section">
            <h4>Perfil Zaask</h4>
            <a href="https://www.zaask.pt/user/jdinnovationstudio" target="_blank" rel="noopener noreferrer">
              <img src="https://www.zaask.pt/widget?user=681918&widget=pro-findme" alt="Zaask Logo" className="zaask-logo" />
            </a>
          </motion.div>
          <motion.div className="footer-section footer-contact">
            <h4>Contato e Localização</h4>
            <ul>
              <li><span>Email:</span> <a href="mailto:info@jd-invest-group.com">info@jd-invest-group.com</a></li>
              <li><span>Telefone:</span> <a href="tel:+351123456789">+351 123 456 789</a></li>
              <li><span>Endereço:</span> Ponte de Vagos, Aveiro, Portugal</li>
            </ul>
          </motion.div>
          <motion.div className="footer-section footer-map">
            <h4>Localização</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.96534232632!2d-8.686011584682547!3d40.52821877935039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd237e53a2439af1%3A0x9c29f1b73b40a4c0!2sEstrada%20Principal%20194%2C%203840-216%20Ponte%20de%20Vagos%2C%20Portugal!5e0!3m2!1sen!2sus!4v1625076244312!5m2!1sen!2sus" 
              width="300" 
              height="200" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              title="Localização"
            ></iframe>
          </motion.div>
        </motion.div>
        <motion.p 
          className="footer-text" 
          style={{ color: props.theme.secondaryText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          JD Invest Group © 2024
        </motion.p>
      </Fade>
    </div>
  );
}
