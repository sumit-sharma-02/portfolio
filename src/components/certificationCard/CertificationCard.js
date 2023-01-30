import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="cert-card" style={{ backgroundColor: theme.themeColor }}>
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="content-overlay"
              style={{
                background: theme.name === "light" ? "#000000b3" : "#ffffffb3",
              }}
            ></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default CertificationCard;
