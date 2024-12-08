
export default function Footer() {
  return (
    <>
    <div className="flex flex-col items-center justify-center md:bg-white">
      <div className="pt-12 w-[20.438rem] flex flex-col gap-12 sm:w-[35rem] md:w-[45rem] lg:w-[60rem] min-[1440px]:w-[1312px]">
        <div className="w-[20.438rem] flex flex-col gap-12 sm:w-[35rem] md:w-[45rem] md:flex-row lg:w-[60rem] lg:justify-between min-[1440px]:w-[1312px]">
          <div className="flex flex-col gap-4 w-[220px]">
            <h2 className="text-primaryBlue font-bold text-2xl">MORENT</h2>
            <p className="font-semibold text-xs text-SecondaryGray">Our vision is to provide convenience and help increase your sales business.</p>  
          </div>
          <div className="flex flex-col gap-8 min-[1440px]:flex-row min-[1440px]:gap-[60px] md:w-[45rem] md:flex-row lg:w-[60rem] lg:justify-end lg:gap-[60px]">
            <div className="flex flex-row gap-[65px] ">
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-xl">About</h2>
                <p className="font-semibold text-base text-SecondaryGray">How it works</p>
                <p className="font-semibold text-base text-SecondaryGray">Featured</p>
                <p className="font-semibold text-base text-SecondaryGray">Partnership</p>
                <p className="font-semibold text-base text-SecondaryGray">Bussiness Relation</p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-xl">Socials</h2>
                <p className="font-semibold text-base text-SecondaryGray">Discord</p>
                <p className="font-semibold text-base text-SecondaryGray">Instagram</p>
                <p className="font-semibold text-base text-SecondaryGray">Twitter</p>
                <p className="font-semibold text-base text-SecondaryGray">Facebook</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                  <h2 className="font-semibold text-xl">Community</h2>
                  <p className="font-semibold text-base text-SecondaryGray">Events</p>
                  <p className="font-semibold text-base text-SecondaryGray">Blog</p>
                  <p className="font-semibold text-base text-SecondaryGray">Podcast</p>
                  <p className="font-semibold text-base text-SecondaryGray">Invite a friend</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="hidden md:block"/>
        <div className="flex flex-col gap-8 md:flex-row-reverse md:justify-between md:pb-6">
          <div className="flex justify-between items-center md:gap-6">
            <p className="font-semibold text-xs">Privacy & Policy</p>
            <p className="font-semibold text-xs">Terms & Condition</p>
          </div>
          <p className="font-semibold text-xs">©2022 MORENT. All rights reserved</p>
        </div>
      </div>
    </div>
    </>
  )
}
