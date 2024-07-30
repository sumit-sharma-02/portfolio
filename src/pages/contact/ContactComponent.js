import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;

export default function Contact(props) {
  const theme = props.theme;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dq9gfwh', 'template_cp61hip', e.target, 'dXVyQQhCKcgjFrK0q')
      .then((result) => {
        alert('Mensagem enviada com sucesso!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactTime: '',
          service: '',
          message: ''
        });
      }, (error) => {
        alert('Erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia page="contact" />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-form-div">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                />
              </div>
              <div>
                <label>Número de Telefone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Seu número de telefone"
                  required
                />
              </div>
              <div>
                <label>Horário de Contacto:</label>
                <select
                  name="contactTime"
                  value={formData.contactTime}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um horário</option>
                  <option value="9-10">9-10</option>
                  <option value="10-11">10-11</option>
                  <option value="11-12">11-12</option>
                  <option value="12-13">12-13</option>
                  <option value="13-14">13-14</option>
                  <option value="14-15">14-15</option>
                  <option value="15-16">15-16</option>
                  <option value="16-17">16-17</option>
                  <option value="17-18">17-18</option>
                </select>
              </div>
              <div>
                <label>Serviço:</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="website">Criação de Website</option>
                  <option value="branding">Criação de Branding</option>
                  <option value="marketing">Campanha de Marketing</option>
                  <option value="ecommerce">Desenvolvimento de E-commerce</option>
                  <option value="seo">Otimização SEO</option>
                </select>
              </div>
              <div>
                <label>Mensagem:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem (opcional)"
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}
