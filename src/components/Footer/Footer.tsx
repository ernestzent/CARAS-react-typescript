import React from 'react';
import styled from 'styled-components';
import iconFacebook from '../../assets/img/facebook.png';
import iconInstagram from '../../assets/img/instagram.png';
import iconX from '../../assets/img/medios-de-comunicacion-social.png'; 

const FooterContainer = styled.footer`
  background: #ED1E1E;
  color: white;
  padding: 3rem 10% 1.5rem 10%;
  text-align: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  
  @media (min-width: 52em) { /* 832px - Breakpoint para tabletas/escritorio */
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

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #ffd6d6;
  }
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
  color: #ffd6d6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #FFF;
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
  width: 3rem; /* Ajustado para que no se vean gigantes */
  height: 3rem;
  object-fit: contain;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #FFF;
  margin: 2.5rem 0 1.5rem 0;
  opacity: 0.4;
`;

const FooterBottom = styled.div`
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: #FFF;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn>
          <h3>Contacto</h3>
          <p>Email: contacto@caras.com.mx</p>
          <p>Teléfono: +52 (55) 1234 5678</p>
          <p>Av. Vasco de Quiroga 2000, CDMX</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Legales</h3>
          <NavMenu>
            <li><NavLink href="#">Aviso de privacidad</NavLink></li>
            <li><NavLink href="#">Términos de servicio</NavLink></li>
          </NavMenu>
        </FooterColumn>

        <FooterColumn>
          <h3>Síguenos</h3>
          <SocialLinks>

            <SocialAnchor href="https://www.facebook.com/Revista.Caras" target="_blank" rel="noopener noreferrer">
              <SocialIconImg src={iconFacebook} alt="Facebook CARAS" />
            </SocialAnchor>
            
            <SocialAnchor href="https://x.com/carasmexico" target="_blank" rel="noopener noreferrer">
              <SocialIconImg src={iconX} alt="X CARAS" />
            </SocialAnchor>
            
            <SocialAnchor href="https://www.instagram.com/carasmexico/" target="_blank" rel="noopener noreferrer">
              <SocialIconImg src={iconInstagram} alt="Instagram CARAS" />
            </SocialAnchor>
          </SocialLinks>
        </FooterColumn>
      </FooterTop>

      <Divider />

      <FooterBottom>
        <p>EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;