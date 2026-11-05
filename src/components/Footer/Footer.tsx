import React from 'react';
import styled from 'styled-components';
import iconFacebook from '../../assets/img/facebook.png';
import iconInstagram from '../../assets/img/instagram.png';
import iconX from '../../assets/img/medios-de-comunicacion-social.png'; 

const FooterContainer = styled.footer`
  background: #C81010; /* Contraste 6.15:1 con texto blanco */
  color: #FFFFFF;
  padding: 3rem 10% 1.5rem 10%;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  
  @media (min-width: 52em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #FFFFFF;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #FFFFFF;
  }
`;

const ContactAddress = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled.a`
  color: #FFFFFF;
  text-decoration: underline;
  font-size: 0.95rem;
  font-weight: 600;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (min-width: 52em) {
    justify-content: flex-start;
  }
`;

const SocialAnchor = styled.a`
  display: inline-block;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIconImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #FFFFFF;
  margin: 2.5rem 0 1.5rem 0;
  opacity: 0.4;
`;

const FooterBottom = styled.div`
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #FFFFFF;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer role="contentinfo">
      <FooterTop>
        <FooterColumn>
          <h2>Contacto</h2>
          <ContactAddress>
            <p>Email: contacto@caras.com.mx</p>
            <p>Teléfono: +52 (55) 1234 5678</p>
            <p>Av. Vasco de Quiroga 2000, CDMX</p>
          </ContactAddress>
        </FooterColumn>

        <FooterColumn>
          <h2>Legales</h2>
          <nav aria-label="Enlaces legales">
            <NavMenu>
              <li><NavLink href="#privacidad">Aviso de privacidad</NavLink></li>
              <li><NavLink href="#terminos">Términos de servicio</NavLink></li>
            </NavMenu>
          </nav>
        </FooterColumn>

        <FooterColumn>
          <h2>Síguenos</h2>
          <nav aria-label="Redes sociales de CARAS">
            <SocialLinks>
              <SocialAnchor
                href="https://www.facebook.com/Revista.Caras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Facebook de Revista CARAS (se abre en una nueva pestaña)"
              >
                <SocialIconImg src={iconFacebook} alt="Facebook CARAS" />
              </SocialAnchor>
              
              <SocialAnchor
                href="https://x.com/carasmexico"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de X de Revista CARAS (se abre en una nueva pestaña)"
              >
                <SocialIconImg src={iconX} alt="X CARAS" />
              </SocialAnchor>
              
              <SocialAnchor
                href="https://www.instagram.com/carasmexico/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Revista CARAS (se abre en una nueva pestaña)"
              >
                <SocialIconImg src={iconInstagram} alt="Instagram CARAS" />
              </SocialAnchor>
            </SocialLinks>
          </nav>
        </FooterColumn>
      </FooterTop>

      <Divider aria-hidden="true" />

      <FooterBottom>
        <p>
          EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS.{' '}
          <span lang="en">TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</span>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;