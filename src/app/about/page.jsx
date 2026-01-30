"use client";

import Image from "next/image";
import Slider from "react-slick";

// ----------------- CUSTOM ARROWS -----------------
function NextArrow({ onClick }) {
    return (
        <button
        onClick={onClick}
        className="absolute -right-5 top-1/2 -translate-y-1/2 pb-20 z-20 w-[20px] h-[50px] flex items-center justify-center"
      >
        <svg
          width="20"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute -left-5 top-1/2 -translate-y-1/2 pb-20 z-20 w-[20px] h-[50px] flex items-center justify-center"
      >
        <svg
          width="20"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#A7A7A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
    );
  }

// ----------------- MAIN COMPONENT -----------------
export default function AboutTeamStories() {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true, // ✅ loop enabled
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full">

      {/* ================= ABOUT US ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[20px] uppercase mb-10">ABOUT US</p>
          <p className="text-[16px] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="mt-10 bg-black text-white text-[16px] h-[42px] w-[288px]">
            Explore
          </button>
        </div>
        <div className="relative w-full max-w-[648px] h-[260px] sm:h-[320px] md:h-[450px] md:ml-auto bg-[#E0E0E0]">
          <Image src="/images/about.jpg" alt="About" fill className="object-cover" priority />
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 relative">
        <p className="text-center text-[20px] uppercase mb-20">MEET OUR TEAM</p>

        <Slider {...sliderSettings}>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex justify-center px-3">
              <div className="w-full max-w-[412px]">

                <div className="relative w-full h-[360px] bg-[#E0E0E0]">
                  <Image src="/images/team.jpg" alt="Team" fill className="object-cover" />
                </div>

                <div className="pt-6 px-4 text-center">
                  <p className="text-[20px] font-medium uppercase">XYZ JACOBS</p>
                  <p className="mt-2 text-[16px] mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ================= PROPERTY STORIES ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 relative">
        <p className="text-center text-[20px] uppercase mb-20">PROPERTY STORIES</p>

        <Slider {...sliderSettings}>
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex justify-center px-3">
              <div className="w-full max-w-[412px]">

                <div className="relative w-full h-[360px] bg-[#E0E0E0]">
                  <Image src="/images/property.jpg" alt="Property" fill className="object-cover" />
                </div>

                <div className="pt-4 px-2 text-start">
                  <p className="text-[16px] text-[#6A6A6A]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                  </p>
                  <button className="mt-2 text-[16px] underline">Explore</button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </section>

    </div>
  );
}
