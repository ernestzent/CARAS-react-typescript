import React from 'styled-components';
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #ED1E1E;
    padding: 2rem;
    text-align: center;
    color: #FFF;
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

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 800px;
    margin: 0 auto;
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo src="/img/Logo2.png" alt="Logo CARAS" />
            <Title>La exclusividad llega directo a tu correo.</Title>
            <Subtitle>Únete a nuestro newsletter y entérate antes que nadie sobre lo mejor del estilo de vida, moda y celebridades.</Subtitle>
        </HeaderContainer>
    );
};

export default Header;