import React from 'styled-components';
import styled from 'styled-components';
import { Testimonial } from '../../types';

const Section = styled.section`
  background: #f9f9f9;
  padding: 60px 20px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 40px auto 0;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 2px solid #ED1E1E;
`;

const mockTestimonials: Testimonial[] = [
  { id: 1, name: 'Luz', location: 'CDMX', quote: 'Mi dosis perfecta de moda.', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 2, name: 'Joel', location: 'Monterrey', quote: 'Curaduría impecable.', avatar: 'https://i.pravatar.cc/150?img=11' }
];

const Testimonials: React.FC = () => {
  return (
    <Section>
      <h2 style={{ color: '#ED1E1E' }}>Lo que dicen nuestros lectores</h2>
      <Grid>
        {mockTestimonials.map((t) => (
          <Card key={t.id}>
            <Avatar src={t.avatar} alt={t.name} />
            <p><em>"{t.quote}"</em></p>
            <h4>{t.name}</h4>
            <small>{t.location}</small>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;