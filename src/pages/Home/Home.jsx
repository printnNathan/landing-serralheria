import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Cta from '../../components/Cta/Cta';
import Location from '../../components/Location/Location';
import Footer from '../../components/Footer/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat/WhatsAppFloat';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Cta />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default HomePage;
