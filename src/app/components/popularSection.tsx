import Image from "next/image";
import Koenigsegg from "../../../public/images/Koenigsegg.png"
import Fuel from "../../../public/images/gas-station.png"
import Transmission from "../../../public/images/tansmission.png"
import Capacity from "../../../public/images/profile-2user.png"
import GTR from "../../../public/images/gtr.png"
import Rolls from "../../../public/images/rolls.png"

export default function PopularSection() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 pt-[31px] w-[20.438rem] min-[1440px]:min-w-[1312px] min-[1440px]:pt-[47px]">
        <div className="flex justify-between items-center">
          <p className="text-SecondaryGray font-semibold text-sm">Popular Car</p>
          <a href="#" className="text-primaryBlue font-semibold text-xs">View All</a>
        </div>
        <div className="flex gap-[19px] sm:justify-center min-[1440px]:gap-8">
          <div id="card" className="min-[1440px]:w-[304px]">
            <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
              <h3>Koenigsegg</h3>
              <p>sport</p>
            </div>
            <div className="flex justify-center itmes-center ">
            <Image src={Koenigsegg} alt="Koenigsegg car" className="pt-8 pb-11 w-[180px] min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p className="min-[1440px]:text-base"><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p className="min-[1440px]:text-base"><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p className="min-[1440px]:text-base"><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-7 pl-4 pb-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
              <h3 className="min-[1440px]:text-xl">$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
              <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
            </div>
          </div>

          <div id="card" className="min-[1440px]:w-[304px]">
            <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
              <h3>Koenigsegg</h3>
              <p>sport</p>
            </div>
            <div className="flex justify-center itmes-center ">
            <Image src={GTR} alt="Koenigsegg car" className="pt-8 pb-11 w-[180px] min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p className="min-[1440px]:text-base"><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p className="min-[1440px]:text-base"><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p className="min-[1440px]:text-base"><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-7 pl-4 pb-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
              <h3 className="min-[1440px]:text-xl">$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
              <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
            </div>
          </div>

          <div id="card" className="min-[1440px]:w-[304px]">
            <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
              <h3>Koenigsegg</h3>
              <p>sport</p>
            </div>
            <div className="flex justify-center itmes-center ">
            <Image src={Rolls} alt="Koenigsegg car" className="pt-8 pb-11 w-[180px] min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p className="min-[1440px]:text-base"><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p className="min-[1440px]:text-base"><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p className="min-[1440px]:text-base"><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-7 pl-4 pb-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
              <h3 className="min-[1440px]:text-xl">$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
              <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
            </div>
          </div>

          <div id="card" className="min-[1440px]:w-[304px]">
            <div className="pl-4 pt-4 min-[1440px]:pt-6 min-[1440px]:pl-6">
              <h3>Koenigsegg</h3>
              <p>sport</p>
            </div>
            <div className="flex justify-center itmes-center ">
            <Image src={GTR} alt="Koenigsegg car" className="pt-8 pb-11 w-[180px] min-[1440px]:min-w-[232px]"/>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
              <p><Image src={Fuel} alt="Fuel Tank" className="w-[14px] inline min-[1440px]:w-6"/> 90L</p>
              <p><Image src={Transmission} alt="Transmission Type" className="w-[14px] inline min-[1440px]:w-6"/> Manual</p>
              <p><Image src={Capacity} alt="Capacity of People" className="w-[14px] inline min-[1440px]:w-6"/> 2 People</p>
            </div>
            <div className="flex flex-row gap-4 items-center pt-7 pl-4 pb-4 min-[1440px]:pl-6 min-[1440px]:gap-14">
              <h3>$99.00/<span className="font-semibold text-xs text-SecondaryGray">day</span></h3>
              <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
            </div>
          </div>
        </div>
      </div> 

    </div>
    </>
  )
}
