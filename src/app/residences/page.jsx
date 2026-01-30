"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---------- TOP ICONS WITH CUSTOM WIDTH & HEIGHT ---------- */
const categories = [
  { label: "Riverside", icon: "/images/residenceIcons/River.svg", width: 72, height: 53.36 },
  { label: "Hills", icon: "/images/residenceIcons/Hills.svg", width: 85.79, height: 44.34 },
  { label: "Beaches", icon: "/images/residenceIcons/Beach.svg", width: 69.95, height: 53.36 },
  { label: "City", icon: "/images/residenceIcons/City.svg", width: 49.46, height: 51.32 },
  { label: "Farm", icon: "/images/residenceIcons/Farm.svg", width: 64.01, height: 57.21 },
  { label: "Jungle", icon: "/images/residenceIcons/Jungle.svg", width: 49, height: 62 },
];

/* ---------- CARD DATA ---------- */
const cards = [
  { images: ["/images/sample.jpg", "/images/sample.jpg"], title: "THE BUTIQ HOTEL", city: "Bhopal" },
  { images: ["/images/sample.jpg", "/images/sample.jpg"], title: "THE BUTIQ HOTEL", city: "Agra" },
  { images: ["/images/sample.jpg", "/images/sample.jpg"], title: "THE BUTIQ HOTEL", city: "Banaras" },
  { images: ["/images/sample.jpg", "/images/sample.jpg"], title: "THE BUTIQ HOTEL", city: "Jaipur" },
];

/* ---------- OUTER ARROWS ---------- */
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -left-16 top-1/2 -translate-y-1/2 z-30
                 w-10 h-10 flex items-center justify-center
                 bg-white rounded-full shadow border border-gray-300"
    >
      <ChevronLeft size={22} className="text-gray-500" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -right-16 top-1/2 -translate-y-1/2 z-30
                 w-10 h-10 flex items-center justify-center
                 bg-white rounded-full shadow border border-gray-300"
    >
      <ChevronRight size={22} className="text-gray-500" />
    </button>
  );
}

/* ---------- CARD COMPONENT (PIXEL-PERFECT) ---------- */
function Card({ data }) {
  const imgSlider = useRef(null);

  const imageSettings = {
    infinite: true,
    arrows: false,
    dots: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[280px] mx-auto">
      {/* IMAGE SLIDER */}
      <div className="relative h-[380px] bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200">
        <Slider ref={imgSlider} {...imageSettings}>
          {data.images.map((img, i) => (
            <div key={i} className="relative h-[380px]">
              <Image src={img} alt={data.title} fill className="object-cover" />
            </div>
          ))}
        </Slider>

        {/* INNER ARROWS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button
            onClick={() => imgSlider.current?.slickPrev()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/90 border border-gray-300"
          >
            <ChevronLeft size={18} className="text-gray-700" />
          </button>
          <button
            onClick={() => imgSlider.current?.slickNext()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/90 border border-gray-300"
          >
            <ChevronRight size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4 text-center">
        <p className="text-[12px] tracking-wide font-semibold text-gray-900">{data.title}</p>
        <p className="text-[11px] text-gray-500 mt-1">{data.city}</p>
      </div>
    </div>
  );
}

/* ---------- OUTER SLIDER SECTION ---------- */
function Section({ title }) {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: "40px" } },
    ],
  };

  return (
    <div className="mt-20 relative">
      <p className="text-center text-[12px] tracking-widest mb-14 text-gray-800">{title}</p>
      <Slider {...settings}>
        {cards.map((item, i) => (
          <div key={i} className="px-4">
            <Card data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function Page() {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-6 mt-8">
      {/* TOP ICON CAROUSEL */}
      <Slider
        infinite
        arrows={false}
        slidesToShow={6}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 640, settings: { slidesToShow: 3 } },
        ]}
        className="mb-20"
      >
        {categories.map((c, i) => (
          <div key={i} className="flex justify-center">
            <div className="flex flex-col items-center justify-between h-[90px]">
              <Image
                src={c.icon}
                alt={c.label}
                width={c.width}
                height={c.height}
                className="object-contain"
              />
              <p className="text-[16px] text-center">{c.label}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* SECTIONS */}
      <Section title="HILLS" />
      <Section title="BEACHES" />
      <Section title="VALLEYS" />
      <Section title="DESERTS" />
    </div>
  );
}
