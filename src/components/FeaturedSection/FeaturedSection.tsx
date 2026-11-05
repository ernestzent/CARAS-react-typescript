import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #ffffff;
  padding: 60px 20px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  color: #C81010;
`;

const ImageContent = styled.div`
  flex: 1;
  img {
    width: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const Bullet = styled.li`
  margin-bottom: 15px;
  list-style: none;
  &::before {
    content: "▪";
    color: #C81010;
    margin-right: 10px;
    aria-hidden: true;
  }
`;

const FeaturedSection: React.FC = () => {
  return (
    <Section aria-labelledby="featured-heading">
      <Container>
        <TextContent>
          <SectionTitle id="featured-heading">
            Tu pase <span lang="en">VIP</span> al centro de la noticia.
          </SectionTitle>
          <p>Sé parte de nuestro círculo exclusivo.</p>
          <ul style={{ padding: 0 }} aria-label="Beneficios de la suscripción">
            <Bullet><strong>Exclusividad:</strong> Noticias antes que nadie.</Bullet>
            <Bullet><strong>Inspiración:</strong> Tendencias en moda y belleza.</Bullet>
            <Bullet><strong>Comunidad:</strong> Acceso a eventos <span lang="en">VIP</span>.</Bullet>
          </ul>
        </TextContent>
        <ImageContent>
          <img
            src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80"
            alt="Evento exclusivo de gala y estilo de vida de Revista CARAS"
          />
        </ImageContent>
      </Container>
    </Section>
  );
};

export default FeaturedSection;