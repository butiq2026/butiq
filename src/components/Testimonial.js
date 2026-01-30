"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    author: "Nat Geo Traveller",
  },
  {
    text: "The Postcard Hotel has reset some of the default settings of the standard hotel experience.",
    author: "Condé Nast Traveller",
  },
  {
    text: "A stylish luxury hotel in Thimphu’s northern outskirts is where travellers are finding their happy place.",
    author: "Sunday Financial Express",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="mx-auto px-5 py-20 mt-20 text-center max-w-[900px]">

        {/* Plane Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/plane.svg"
            alt="plane"
            width={75}
            height={40}
          />
        </div>

        {/* Quote Text */}
        <p className="mx-auto text-[15px] leading-[1.9] text-[#444] mb-10 transition-opacity duration-500">
          “{testimonials[active].text}”
        </p>

        {/* Divider */}
        <div className="w-[60px] h-[1px] bg-[#cfcfcf] mx-auto mb-6" />

        {/* Author */}
        <span className="text-[16px] text-[#222] tracking-wide">
          {testimonials[active].author}
        </span>
      </div>
    </section>
  );
}
