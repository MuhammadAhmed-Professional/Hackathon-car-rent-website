"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Koenigsegg from "../../../public/images/Koenigsegg.png";
import Fuel from "../../../public/images/gas-station.png";
import Transmission from "../../../public/images/tansmission.png";
import Capacity from "../../../public/images/profile-2user.png";
import GTR from "../../../public/images/gtr.png";
import Rolls from "../../../public/images/rolls.png";

interface CarData {
  name: string;
  type: string;
  image: any;
  fuel: string;
  transmission: string;
  capacity: string;
  price: string;
}

const carData: CarData[] = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: Koenigsegg,
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: GTR,
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00/day",
  },
  {
    name: "Rolls - Royce",
    type: "Sedan",
    image: Rolls,
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    price: "$96.00/day",
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: GTR,
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: "$80.00/day",
  },
];

export default function SwiperCards() {
  return (
    <div className="flex flex-col justify-center items-center  py-8 px-4">
      <div className=" w-[343px] md:w-[740px] lg:w-[940px] ">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper className="mt-8"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper className="mt-8"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper className="mt-8"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper className="mt-8"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper className="mt-8"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[10px] overflow-hidden flex flex-col">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={car.image}
                    alt={`${car.name} car`}
                    width={232}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-around py-4 text-gray-600">
                  <p className="text-sm flex items-center">
                    <Image
                      src={Fuel}
                      alt="Fuel"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.fuel}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Transmission}
                      alt="Transmission"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.transmission}
                  </p>
                  <p className="text-sm flex items-center">
                    <Image
                      src={Capacity}
                      alt="Capacity"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {car.capacity}
                  </p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 border-t">
                  <h3 className="text-gray-800 font-bold">{car.price}</h3>
                  <a href="#" id="CardButton" className="min-[1440px]:text-base">Rental Now</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
