import React from "react";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import "./Skills.css";
import myImage from "../../assets/images/david1a.jpg";
import myimage2 from"../../assets/images/david1a.jpg";
import ecom from "../../assets/images/ecom.png";

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
     
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            
            <div key={"skills-" + index} className="skills-main-div">
              { /* <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade> */ }
              
              <div className="skills-text-div">

                
              
                <div>
   <h1 className="SD12">SOLUÇÕES DIGITAIS</h1>
      <div className="accordion">
        <article>
          <input id="article1" type="radio" name="articles" defaultChecked />
          <label htmlFor="article1">
          <h2 className="sites1">
          <img src={ecom} alt="Descrição da Imagem" className="icon" />
        •  E-COMMERCE
      </h2>
          </label>
          <div>
          Nosso serviço de e-commerce oferece soluções completas para sua loja online. Desenvolvemos plataformas personalizadas, otimizadas para conversão, com design responsivo e integrações seguras. Aumente suas vendas com uma experiência de compra fluida, gestão eficiente de produtos e suporte contínuo. Transforme visitantes em clientes fiéis.
          </div> 
        </article> 
        

        <article>
          <input id="article2" type="radio" name="articles" />
          <label htmlFor="article2">
            <h2 className="sites1">•  SITES</h2>
          </label>
          <div>
          Oferecemos criação de sites modernos e responsivos, adaptados às necessidades do seu negócio. Desenvolvemos sites intuitivos, com design atraente e navegação eficiente. Nossa equipe garante performance otimizada, SEO amigável e suporte contínuo. Estabeleça sua presença online de forma profissional e atraia mais clientes.
          </div>
        </article>

        <article>
          <input id="article3" type="radio" name="articles" />
          <label htmlFor="article3">
            <h2 className="sites1">•  MARKETING</h2>
          </label>
          <div>
          Maximize sua visibilidade com nossas estratégias de marketing digital. Especializados em Google Ads e campanhas em redes sociais, impulsionamos seu alcance e engajamento. Analisamos e otimizamos anúncios para garantir resultados efetivos, aumentando conversões e ROI. Atraia e retenha clientes com marketing direcionado e eficiente.
          </div>
        </article>

        <article>
          <input id="article4" type="radio" name="articles" />
          <label htmlFor="article4">
            <h2 className="sites1">•  BRANDING</h2>
          </label>
          <div>
          Destaque-se no mercado com nosso serviço de branding. Criamos identidades visuais impactantes e coerentes, refletindo a essência do seu negócio. Desenvolvemos logotipos, paletas de cores e materiais de comunicação que fortalecem sua marca. Construa uma presença sólida e memorável, conquistando a lealdade de seus clientes.
          </div>
        </article>
      </div>
    </div>


    <div>
<h1 className="SD123">QUEM SOMOS</h1>
<h3>Somos uma equipa dinâmica de apaixonados por desenvolvimento de soluções digitais. Com uma experiência sólida em criação de sites, e-commerce, marketing digital e branding, já realizamos mais de 40 projetos, cada um deles contribuindo para o aperfeiçoamento contínuo dos nossos serviços. </h3>

<h3>O nosso compromisso é entregar soluções inovadoras e personalizadas que impulsionem os negócios e projetos dos nossos clientes. Cada projeto é uma nova oportunidade para superar expectativas e alcançar resultados excepcionais. </h3>

<h3>Deixe-nos transformar suas ideias em realidade digital com eficiência e criatividade.</h3>
<div className="equipa">
<main>
      <div className="card">
      <img src={myimage2} alt="Descrição da Imagem" />
        <div className="card-content">
          <h2>João Teixeira</h2>
          <p>
          Autodidata em tecnologia, João é especialista em desenvolvimento de software, trazendo inovação e eficiência para cada projeto.
          </p>
  
        </div>
      </div>
      <div className="card">
      <img src={myimage2} alt="Descrição da Imagem" />
        <div className="card-content">
          <h2>David Claro</h2>
          <p>
          Designer talentoso, David transforma conceitos em interfaces intuitivas e atraentes, elevando a experiência do usuário em cada solução digital.
          </p>

        </div>
      </div>
    </main>
    </div>
    
    

    </div>
    <div>
<h1 className="SD12">O QUE JÁ FIZEMOS</h1>
<h3>Dois jovens autodidatas com mais de cinco anos de colaboração, são a força por trás de um negócio de soluções digitais inovadoras. 
  Juntos, desenvolveram mais de 50 projetos, combinando suas habilidades em tecnologia e design para criar produtos digitais de alto impacto. 
  Sua dedicação e expertise transformam ideias em soluções eficientes, destacando-se no mercado pela criatividade e qualidade.</h3>
<div className="equipa">
<main className="main3">
<div class="row">
  <div class="column">
    <div class="card">
<h2>34</h2>

    </div>
    
  </div>
  <div class="column">
    <div class="card">
    <h2>34</h2>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <h2>34</h2>
    </div>
  </div>
  <div class="column">
    <div class="card">
    <h2>34</h2>
    <h3>Estratégias criadas</h3>
    </div>
  </div>
</div>
    </main>
    </div>
    
    

    </div>
    
                

                <Fade right duration={2000}>
                  <div style={{ textAlign: "center" }}>
                    {skill.skills.map((skillSentence, skillIndex) => {
                      return (
                        <p
                          key={"skill-sentence-" + skillIndex}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div key={"skills-" + index} className="skills-main-div">
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                  
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill theme={theme} logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={2000}>
                  <div style={{ textAlign: "center" }}>
                    {skill.skills.map((skillSentence, skillIndex) => {
                      return (
                        <p
                          key={"skill-sentence-" + skillIndex}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <img src={myImage} alt="Skill" width="100" height="100" />
                </div>
              </Fade>
            </div>
          );
        }
      })}


    </div>
    
  );
}

export default SkillSection;
