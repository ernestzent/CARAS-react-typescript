import React from 'react';
import styled from 'styled-components';
import { Testimonial } from '../../types';

const Section = styled.section`
  background: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #C81010;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 40px auto 0;
`;

const Card = styled.article`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #C81010;
  object-fit: cover;
  margin-bottom: 15px;
`;

const AuthorName = styled.h3`
  margin: 10px 0 5px;
  font-size: 1.15rem;
  color: #222222;
`;

const LocationText = styled.small`
  color: #555555; /* Contraste 7.4:1 sobre blanco */
  font-size: 0.9rem;
`;

const mockTestimonials: Testimonial[] = [
  { id: 1, name: 'Luz', location: 'Yucatán', quote: 'Mi dosis perfecta de moda y estilo de vida antes de empezar el día.', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 2, name: 'Alan', location: 'CDMX', quote: 'Las exclusivas sobre celebridades siempre llegan primero aquí. Impecable.', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 3, name: 'Sofía', location: 'Puebla', quote: 'Nadie cubre las bodas de la alta sociedad y las exclusivas de la realeza como CARAS.', avatar: 'https://i.pravatar.cc/150?img=32' },
  { id: 4, name: 'Valeria', location: 'Querétaro', quote: 'Ver los looks de las alfombras rojas y las galas exclusivas me sirve de muchísima inspiración.', avatar: 'https://i.pravatar.cc/150?img=68' },
  { id: 5, name: 'Roberto', location: 'Mérida', quote: 'Los reportajes de viajes de lujo y la escena social son una joya. Mi lectura obligada.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 6, name: 'Karen', location: 'Guadalajara', quote: 'Gracias a sus correos me he enterado de tendencias de belleza que no veo en ningún otro lado.', avatar: 'https://i.pravatar.cc/150?img=44' }
];

const Testimonials: React.FC = () => {
  return (
    <Section aria-labelledby="testimonials-heading">
      <SectionTitle id="testimonials-heading">Lo que dicen nuestros suscriptores</SectionTitle>
      <Grid>
        {mockTestimonials.map((t) => (
          <Card key={t.id} aria-label={`Testimonio de ${t.name}`}>
            <Avatar src={t.avatar} alt={`Avatar de ${t.name}, suscriptor en ${t.location}`} />
            <p><em>"{t.quote}"</em></p>
            <AuthorName>{t.name}</AuthorName>
            <LocationText>{t.location}</LocationText>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;