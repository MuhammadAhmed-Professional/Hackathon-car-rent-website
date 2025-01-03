"use client"
import HeaderDashboard from "../components/headerDashboard";
import LocationSection from "../components/locationSectionDashboard";
import SwiperCards from "../components/SwiperCards";
import Footer from "../components/footer";
import FilterDashboard from "../components/filterDashboard";


export default function Home() {
  return (
    <>
      <HeaderDashboard/>
      <div className="flex flex-row justify-center xl:justify-normal">
        <FilterDashboard/>
        <div>
          <LocationSection/>
          <SwiperCards/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
