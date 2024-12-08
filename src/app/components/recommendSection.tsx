import Image from "next/image";
import Rush from "../../../public/images/rush.png"
import Fuel from "../../../public/images/gas-station.png"
import Transmission from "../../../public/images/tansmission.png"
import Capacity from "../../../public/images/profile-2user.png"
import CRV from "../../../public/images/CRV.png"
import ANT from "../../../public/images/ANT.png"
import MGZX from "../../../public/images/MG ZX.png"
import MGZS from "../../../public/images/MG ZS.png"

export default function RecommendSection() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="pt-[31px] w-[20.438rem] flex flex-col justify-center items-start md:w-[45rem] lg:w-[60rem] min-[1440px]:w-[1312px]">
        <div className="flex flex-col"><p className="font-semibold text-sm text-SecondaryGray">Recommendation Car</p></div>
        <div className="flex flex-col justify-center items-center pt-5 gap-5 md:flex-row md:w-[45rem] lg:w-[60rem] md:flex-wrap min-[1440px]:w-[1312px] min-[1440px]:gap-8">
        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px]">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>All New Rush</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={ANT} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px]">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>CR  - V</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={CRV} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px]">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>All New Terios</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={ANT} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px]">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>CR  - V</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={CRV} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px]">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>MG ZX Exclusice</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={MGZX} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px] hidden md:inline">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>New MG ZS</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={MGZS} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px] hidden md:inline">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>MG ZX Excite</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={MGZX} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        <div id="card" className="w-[327px] lg:w-[250px] min-[1440px]:w-[304px] hidden md:inline">
          <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
            <h3>New MG ZS</h3>
            <p>sport</p>
          </div>
          <div className="flex pl-10 gap-[59px] lg:flex-col lg:pl-0 lg:gap-2">
            <div className="flex justify-center itmes-center">
            <Image src={MGZS} alt="Koenigsegg car" className="pt-8 w-[142px] lg:pt-0 min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start lg:flex-row">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
          </div>
          <div className="flex flex-row gap-[107px] items-center pt-0 pl-4 pb-4 lg:gap-5 lg:pt-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
            <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
            <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
          </div>
        </div>

        </div> 
      </div>
        <div className="pt-12 flex justify-end items-center w-[20.438rem] md:w-[45rem] md:pb-8 min-[1440px]:pt-16 min-[1440px]:pb-16 min-[1440px]:w-[1312px]">
          <a href="#" id="CardButton">Show More Car</a>
          <p className="font-semibold text-sm text-SecondaryGray pl-[49px] md:pl-[15.5rem] min-[1440px]:pl-[530px]">120 cars</p>
        </div>
    </div>
    </>
  )
}
