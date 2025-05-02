import Comp1 from '../components/comp1';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';
import OurInfrastructure from '../components/OurInfrastructure';
import OurStory from '../components/OurStory';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <Comp1 />

      <div id="our-story">
        <OurStory />
      </div>

      <div id="products">
        <ProductGrid />
      </div>

      <div id="infrastructure">
        <OurInfrastructure />
      </div>

      <Footer />
    </>
  );
};

export default Home;
