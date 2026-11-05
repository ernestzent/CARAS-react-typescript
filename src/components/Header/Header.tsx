import React from 'react';
import styled from 'styled-components';
import logoCaras from '../../assets/img/Logo2.png';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #C81010; /* Contraste 6.15:1 con texto blanco */
  padding: 2rem;
  text-align: center;
  color: #FFFFFF;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer role="banner">
      <Logo src={logoCaras} alt="Logo CARAS - Revista de estilo de vida y sociedad" />
      <Title>La exclusividad llega directo a tu correo.</Title>
      <Subtitle>
        Únete a nuestro <span lang="en">newsletter</span> y entérate antes que nadie sobre lo mejor del estilo de vida, moda y celebridades.
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;