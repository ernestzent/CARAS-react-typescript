import React from 'styled-components';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: #ED1E1E;
    color: white;
    padding: 40px 20px;
    text-align: center;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>© 2026 EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS.</p>
        </FooterContainer>
    );
};

export default Footer;