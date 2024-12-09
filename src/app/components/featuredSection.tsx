import Image from "next/image"
import Koenigsegg from "../../../public/images/Koenigsegg.png"
import GTR from "../../../public/images/gtr.png"


function FeaturedSection() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 md:pt-8">
        <div className="absolute bg-LightBlue w-[20.438rem] flex flex-col justify-center items-start pl-4 pt-4 pb-1 rounded-[10px] sm:w-[22rem] md:static lg:w-[28rem] min-[1440px]:w-[640px]">
          <h3 className="text-white font-medium text-base lg:text-xl min-[1440px]:text-[32px] min-[1440px]:leading-[48px] min-[1440px]:w-[272px]">The Best Platform for Car Rental</h3>
          <p className="text-white font-medium text-[12px] max-w-60 pt-3 min-[1440px]:text-base">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <a href="#" id="PrimaryButton" className="mt-4 text-base">Rental Car</a>
          <Image src={Koenigsegg} alt="Koenigsegg car featured" className="w-[196px] mt-6 ml-[53px] lg:w-[300px] min-[1440px]:w-[406px] min-[1440px]:mt-0 min-[1440px]:ml-[121px]" />
        </div>

        <div className="absolute bg-primaryBlue w-[20.438rem] flex-col justify-center items-start pl-4 pt-4 pb-2 rounded-[10px] sm:w-[22rem] hidden md:flex md:static lg:w-[28rem] min-[1440px]:w-[640px] bg-no-repeat bg-cover" style={{backgroundImage: "url('/images/addBg.png')"}}>
          <h3 className="text-white font-medium text-base lg:text-xl min-[1440px]:text-[32px] min-[1440px]:leading-[48px] min-[1440px]:w-[272px]">The Best Platform for Car Rental</h3>
          <p className="text-white font-medium text-[12px] max-w-60 pt-3 min-[1440px]:text-base">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <a href="#" id="SecondaryButton" className="mt-4 text-base">Rental Car</a>
          <Image src={GTR} alt="Koenigsegg car featured" className="w-[170px] mt-6 ml-[53px] lg:w-[270px] min-[1440px]:w-[370px] min-[1440px]:mt-0 min-[1440px]:ml-[121px]" />
        </div>
      </div>
    </>
  )
}

// style={{backgroundImage: "url('/images/spiral.png')"}} 

export default FeaturedSection