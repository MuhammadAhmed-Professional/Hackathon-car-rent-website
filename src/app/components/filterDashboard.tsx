export default function Home() {
  return (
    <div className="hidden min-h-screen font-sans xl:flex">
      {/* Left-Side Filter Section */}
      <aside className="w-[250px] min-[1440px]:w-[360px] bg-white border-r border-gray-200 p-5">
        {/* TYPE Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-xs text-gray-500 mb-2">TYPE</h2>

          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Sport (10)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            SUV (12)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            MPV (16)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Sedan (20)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Coupe (14)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            Hatchback (14)
          </label>
        </div>

        {/* CAPACITY Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-xs text-gray-500 mb-2">CAPACITY</h2>

          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            2 Person (10)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            4 Person (14)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            6 Person (12)
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            8 or More (16)
          </label>
        </div>

        {/* PRICE Section */}
        <div>
          <h2 className="font-semibold text-xs text-gray-500 mb-2">PRICE</h2>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full mb-2"
          />
          <p>Max. $100.00</p>
        </div>
      </aside>

      {/* Main Content Area (just an empty placeholder) */}
      <main className="flex-1 p-5"></main>
    </div>
  );
}
