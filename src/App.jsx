import "bootstrap/dist/css/bootstrap.min.css";
import Navsection from "./sections/navbar";
import HeroSection from "./sections/hero";
import FeaturesSection from "./sections/features";
import FooterSection from "./sections/footer";
function App() {
  return (
    <>
      <Navsection/>
      <HeroSection/>
      <FeaturesSection/>
      <FooterSection/>
    </>
  );
}

export default App;

