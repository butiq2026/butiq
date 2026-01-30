"use client";

import Image from "next/image";

export default function PartnerServices() {
  return (
    <div className="w-full">

      {/* ================= PARTNER SECTION ================= */}
      <section className="relative w-full overflow-hidden mt-8">

        {/* Background */}
        <div className="absolute inset-0 bg-[#EDEDEDC7]" />

        {/* Desktop diagonal image */}
        <div className="absolute right-0 top-0 h-full w-[60%] hidden md:block clip-diagonal overflow-hidden">
          <Image
            src="/images/hero1.png"
            alt="Partner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-16 md:h-[520px] flex items-center">
          <div className="max-w-[420px]">
            <p className="text-[16px] md:text-[20px] uppercase">
              PARTNER WITH US
            </p>

            <p className="text-[14px] md:text-[16px] text-[#7D7D7D] mt-2">
              This is a dummy text. This is a dummy text.
            </p>

            <button className="mt-6 bg-black text-white text-[14px] md:text-[16px] h-[42px] w-full sm:w-[288px]">
              Become a member
            </button>
          </div>
        </div>

        {/* Mobile image (below content) */}
        <div className="relative w-full h-[240px] sm:h-[300px] md:hidden">
          <Image
            src="/images/hero1.png"
            alt="Partner"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="mx-auto px-6 py-20">
        <h3 className="text-center text-[16px] md:text-[20px] mb-14">
          SERVICES WE OFFER
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 border">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`
                px-6 md:px-8 py-10 md:py-14
                flex flex-col items-start text-left
                border-b md:border-b-0
                ${index !== 2 ? "md:border-r" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 md:mb-8 mt-6 md:mt-20">
                <span className="text-gray-400 text-xs">icon</span>
              </div>

              {/* Text */}
              <p className="text-[14px] md:text-[16px] text-[#6A6A6A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <button className="bg-black text-white text-[14px] md:text-[16px] h-[42px] w-full sm:w-[288px]">
            Learn more
          </button>
        </div>
      </section>

      {/* ================= CLIP PATH ================= */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(28% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
}
