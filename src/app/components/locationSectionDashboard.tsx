import Image from "next/image";
import DarkMark from "../../../public/images/DarkBlueMark.png"
import Mark from "../../../public/images/Mark.png"
import Swap from "../../../public/images/Swap.png"

export default function LocationSectionDashboard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8 gap-10 md:mt-10 md:flex-row" >
        <div className="bg-white p-3 rounded-[10px] w-[20.438rem] flex flex-col gap-6 sm:w-[22rem] lg:w-[25rem]">
          <div className="flex gap-2 items-center">
            <Image src={DarkMark} alt="blueMark" className="w-4 h-4"/>
            <h3 className="font-semibold text-lg">Pick - up</h3>
          </div>
          <div className="flex flex-row gap-5 lg:justify-center">
            <div className="flex flex-col items-start justify-start">
              <h3 className="font-semibold text-lg">Locations</h3><p className="text-xs text-SecondaryGray">Semarang<svg className="w-3 h-3 inline text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
            <div className="bg-SecondaryGray border-[1px]"></div>
            <div className="flex flex-col items-start justify-start ">
              <h3 className="font-semibold text-lg">Date</h3><p className="text-xs text-SecondaryGray">20 July 2022<svg className="w-3 h-3 inline text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
            <div className="bg-SecondaryGray border-[1px]"></div>
            <div className="flex flex-col items-start justify-start ">
              <h3 className="font-semibold text-lg">Time</h3><p className="text-xs text-SecondaryGray">07.00<svg className="w-3 h-3 inline text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
          </div>
        </div> 
        <div className="absolute shadow-lg hover:cursor-pointer rounded-[10px] bg-primaryBlue p-[18px] lg:static"><Image className="w-6" src={Swap} alt="Swap Values"/></div> 
        <div className="bg-white p-3 rounded-[10px] w-[20.438rem] flex flex-col gap-6 sm:w-[22rem] lg:w-[25rem]">
          <div className="flex gap-2 items-center">
            <Image src={Mark} alt="blueMark" className="w-4 h-4"/>
            <h3 className="font-semibold text-lg">Drop - off</h3>
          </div>
          <div className="flex flex-row gap-5 lg:justify-center ">
            <div className="flex flex-col items-start justify-start">
              <h3 className="font-semibold text-lg">Locations</h3><p className="text-xs text-SecondaryGray">Semarang<svg className="w-3 h-3 inline text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
            <div className="bg-SecondaryGray border-[1px]"></div>
            <div className="flex flex-col items-start justify-start ">
              <h3 className="font-semibold text-lg">Date</h3><p className="text-xs text-SecondaryGray">21 July 2022<svg className="w-3 h-3 inline text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
            <div className="bg-SecondaryGray border-[1px]"></div>
            <div className="flex flex-col items-start justify-start ">
              <h3 className="font-semibold text-lg">Time</h3><p className="text-xs text-SecondaryGray">01.00<svg className="w-3 h-3 inline text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"/>
              </svg>
              </p>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

