import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import ServiceBar from "./components/servicebar.jsx";
import Services from "./components/services.jsx";
import About from "./components/about.jsx";
import WhyVenus from "./components/whyvenus.jsx";
import FaqContact from "./components/faqcontact.jsx";
import Cta from "./components/cta.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServiceBar />
        <Services />
        <About />
        <WhyVenus />
        <FaqContact />
        <Cta />
        <Footer />
      </main>
    </>
  );
}

export default App;