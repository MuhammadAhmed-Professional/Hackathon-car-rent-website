import Header from "./components/header";
import FeaturedSection from "./components/featuredSection";
import LocationSection from "./components/locationSection";
import PopularSection from "./components/popularSection";
import RecommendSection from "./components/recommendSection";
import Footer from "./components/footer";



export default function Home() {
  return (
    <>
      <Header/>
      <FeaturedSection/>
      <LocationSection/>
      <PopularSection/>
      <RecommendSection/>
      <Footer/>
    </>
  );
}
