import Image from "next/image";
import ProfilePic from "../../../public/images/profilePic.png"
import SearchIcon from "../../../public/images/search-normal.png"
import Filter from "../../../public/images/filter.png"
import Like from "../../../public/images/Like.png"
import Notifications from "../../../public/images/Notification.png"
import Settings from "../../../public/images/Settings.png"



function HeaderDashboard() {
  return (
    <>
      <div className="flex justify-center items-center w-screen bg-white gap-8 pt-8 pb-8 md:pb-1">
        <div className="flex-col justify-center items-center w-[20.438rem] bg-white gap-8 sm:w-[35rem] md:w-[44rem] lg:w-[58rem] min-[1440px]:w-[84rem]">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center font-bold text-2xl gap-8">
            <h2 className="text-primaryBlue min-[1440px]:text-[32px]">MORENT</h2>
            <div className="hidden md:inline min-[1440px]:flex min-[1440px]:items-center">
              <Image src={SearchIcon} alt="Search Icon" className="absolute w-6 mt-3 ml-6 min-[1440px]:mt-0"/>
              <input type="text" placeholder="Search something here" className="w-[16.438rem] h-12 rounded-[10px] border-[1px] text-center text-sm font-medium sm:w-[25rem] lg:rounded-full min-[1440px]:w-[492px]"/>
              <Image src={Filter} alt="Filter icon" className="w-6 hidden min-[1440px]:absolute min-[1440px]:inline min-[1440px]:ml-[28rem]"/>
            </div>
            <div className="border-[1px] p-3 rounded-[10px] hover:cursor-pointer hidden md:inline min-[1440px]:hidden">
              <Image src={Filter} alt="Filter icon" className="w-6"/>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={Like} alt="Like" className="hidden min-[1440px]:inline hover:cursor-pointer"/>
            <Image src={Notifications} alt="Notification" className="hidden min-[1440px]:inline hover:cursor-pointer"/>
            <Image src={Settings} alt="Setting" className="hidden min-[1440px]:inline hover:cursor-pointer"/>
            <Image src={ProfilePic} alt="profile Picture" className="w-7 lg:w-10 min-[1440px]:lg:w-11"/>
          </div>
        </div> 

        <div className="pt-8 flex justify-between items-center">
          <div className="md:hidden">
            <Image src={SearchIcon} alt="Search Icon" className="absolute w-6 mt-3 ml-6"/>
            <input type="text" placeholder="Search something here" className="w-[16.438rem] h-12 rounded-[10px] border-[1px] text-center text-sm font-medium sm:w-[25rem]"/>
          </div>
          <div className="border-[1px] p-3 rounded-[10px] hover:cursor-pointer md:hidden">
            <Image src={Filter} alt="Filter icon" className="w-6"/>
          </div>
        </div> 
        </div>      
      </div>
    </>
  )
}

export default HeaderDashboard