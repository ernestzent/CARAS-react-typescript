import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <SubscriptionForm />
        <FeaturedSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;