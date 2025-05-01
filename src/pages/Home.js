import Comp1 from '../components/comp1';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';
import OurInfrastructure from '../components/OurInfrastructure';
import OurStory from '../components/OurStory';
import ProductGrid from '../components/ProductGrid';
// import Products from '../components/Products';
// import Standards from '../components/Standards';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Comp1/>
      <OurStory />
      <ProductGrid/>
      <OurInfrastructure/>
      <Footer/>
    </>
  );
};

export default Home;