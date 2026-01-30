"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------- DATA ---------- */
const destinations = [
  { image: "/images/destinations/banaras-hotel.png", title: "THE BUTIQ HOTEL", city: "Banaras" },
  { image: "/images/destinations/satpura.png", title: "THE BUTIQ HOTEL", city: "Satpura Tiger Reserve" },
  { image: "/images/destinations/agra.png", title: "THE BUTIQ HOTEL", city: "Agra" },
  { image: "/images/destinations/shekhpura.png", title: "THE BUTIQ HOTEL", city: "Shekhpura" },
  { image: "/images/destinations/bhopal.png", title: "THE BUTIQ HOTEL", city: "Bhopal" },
];

const logos = [
  "/images/logo-1.svg",
  "/images/logo-2.svg",
  "/images/logo-3.svg",
  "/images/logo-4.svg",
  "/images/logo-5.svg",
];

/* ---------- CUSTOM ARROWS ---------- */
function Arrow({ onClick, direction }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 
        ${direction === "left" ? "-left-10" : "-right-10"}
        text-gray-500 hover:text-black transition`}
    >
      {direction === "left" ? (
        <ChevronLeft size={26} />
      ) : (
        <ChevronRight size={26} />
      )}
    </button>
  );
}

export default function DestinationsSection() {
  const cardSettings = {
    arrows: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "28px",
        },
      },
    ],
  };

  const logoSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 5,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-[#fffdf9] py-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative">

        {/* HEADING */}
        <h2 className="text-center text-[18px] sm:text-[20px] mb-12 tracking-wide">
          DESTINATIONS
        </h2>

        {/* DESTINATION SLIDER */}
        <Slider {...cardSettings} className="mb-24">
          {destinations.map((item, i) => (
            <div key={i} className="px-3 sm:px-6">
              <div className="flex justify-center">
                <div
                  className="
                    relative 
                    w-full 
                    max-w-[360px]
                    h-[380px] sm:h-[440px] lg:h-[488px]
                    overflow-hidden
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.city}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 w-full text-center pb-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-[13px] sm:text-[14px] text-white tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-[12px] sm:text-[13px] text-white/90">
                      {item.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* LOGO SLIDER */}
        <Slider {...logoSettings}>
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={logo}
                alt="logo"
                width={80}
                height={36}
                className="opacity-70"
              />
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
