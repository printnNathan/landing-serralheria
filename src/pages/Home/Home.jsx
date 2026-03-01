import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Cta from '../../Components/Cta/Cta';
import Location from '../../Components/Location/Location';
import Footer from '../../Components/Footer/Footer';
import WhatsAppFloat from '../../Components/WhatsAppFloat/WhatsAppFloat';

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
