import React from "react";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import "./Skills.css";
import myImage from "../../assets/images/clients1.png";

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
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill theme={theme} logos={skill.softwareSkills} />
                </Fade>
                
<section className="accordion">
  
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb1" defaultChecked />
        <label htmlFor="cb1" className="tab__label">
         <strong> Desenvolvimento de websites personalizados para uso pessoal ou empresarial.</strong>
        </label>
        <div className="tab__content">
          
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb2" />
        <label htmlFor="cb2" className="tab__label">
          Criação e gestão de lojas online para maximizar as vendas.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb3" />
        <label htmlFor="cb3" className="tab__label">
          Desenvolvimento de aplicações web avançadas.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb4" />
        <label htmlFor="cb4" className="tab__label">
          Consultoria em tecnologia da informação.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb5" />
        <label htmlFor="cb5" className="tab__label">
          Suporte e manutenção contínua de websites.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>

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
<h1 className="tituloserv">SOLUÇÕES DIGITAIS</h1>
<section className="accordion">
  
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb1" defaultChecked />
        <label htmlFor="cb1" className="tab__label">
          Desenvolvimento de websites personalizados para uso pessoal ou empresarial.
        </label>
        <div className="tab__content">
          <h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb2" />
        <label htmlFor="cb2" className="tab__label">
          Criação e gestão de lojas online para maximizar as vendas.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb3" />
        <label htmlFor="cb3" className="tab__label">
          Desenvolvimento de aplicações web avançadas.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb4" />
        <label htmlFor="cb4" className="tab__label">
          Consultoria em tecnologia da informação.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb5" />
        <label htmlFor="cb5" className="tab__label">
          Suporte e manutenção contínua de websites.
        </label>
        <div className="tab__content"><h2>Benefícios e Características</h2>
          <ul>
            <li>
              <strong>Design Personalizado:</strong>
              <ul>
                <li>Desenvolvimento de layout exclusivo e atraente, alinhado à identidade visual do cliente.</li>
                <li>Uso de tecnologias modernas para garantir uma experiência de usuário agradável.</li>
              </ul>
            </li>
            <li>
              <strong>Funcionalidades Sob Medida:</strong>
              <ul>
                <li>Integração de funcionalidades específicas conforme a necessidade do cliente (e-commerce, blogs, portfólios, etc.).</li>
                <li>Desenvolvimento de formulários de contato, galerias de imagens, mapas interativos, entre outros.</li>
              </ul>
            </li>
            <li>
              <strong>Responsividade:</strong>
              <ul>
                <li>Design adaptativo para garantir uma experiência de navegação otimizada em dispositivos móveis, tablets e desktops.</li>
                <li>Testes em diferentes resoluções e navegadores para assegurar a compatibilidade.</li>
              </ul>
            </li>
            <li>
              <strong>SEO (Otimização para Motores de Busca):</strong>
              <ul>
                <li>Implementação de técnicas de SEO on-page para melhorar a visibilidade do site nos motores de busca.</li>
                <li>Análise e otimização de conteúdo, palavras-chave, meta tags e URLs amigáveis.</li>
              </ul>
            </li>
            <li>
              <strong>Desempenho e Segurança:</strong>
              <ul>
                <li>Otimização de carregamento de página para garantir velocidade e desempenho.</li>
                <li>Implementação de medidas de segurança, incluindo certificados SSL e proteção contra ataques.</li>
              </ul>
            </li>
            <li>
              <strong>Manutenção e Suporte:</strong>
              <ul>
                <li>Planos de manutenção contínua para garantir que o site esteja sempre atualizado e seguro.</li>
                <li>Suporte técnico disponível para resolver quaisquer problemas ou implementar novas funcionalidades.</li>
              </ul>
            </li>
            <li>
              <strong>Integração com Redes Sociais:</strong>
              <ul>
                <li>Conexão com perfis de redes sociais para aumentar a interação e alcance.</li>
                <li>Implementação de botões de compartilhamento e feeds de redes sociais no site.</li>
              </ul>
            </li>
            <li>
              <strong>Sistema de Gerenciamento de Conteúdo (CMS):</strong>
              <ul>
                <li>Integração de CMS (como WordPress, Joomla, etc.) para facilitar a atualização e gestão de conteúdo pelo próprio cliente.</li>
                <li>Treinamento para o cliente sobre como utilizar o CMS e fazer atualizações.</li>
              </ul>
            </li>
            <li>
              <strong>E-commerce:</strong>
              <ul>
                <li>Desenvolvimento de lojas virtuais completas, com carrinho de compras, gateway de pagamento e gestão de estoque.</li>
                <li>Implementação de sistemas de análise e relatórios de vendas.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>

    </div>
  );
}

export default SkillSection;
