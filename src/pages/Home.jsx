import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import SocialLogo from "../components/SocialLogo";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialSection from "../components/TestimonialSection";
import Content from "../components/Content";
import Faq from "../components/Faq";
import BlogSection from "../components/BlogSection";
import FreeTrialSection from "../components/FreeTrialSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <SocialLogo />
      <FeaturesSection />
      <TestimonialSection />
      <Content />
      <Faq />
      <BlogSection />
      <FreeTrialSection />
      <Footer />
    </div>
  );
};

export default Home;
