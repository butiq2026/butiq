"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/hero/hero1.png",
    "/images/hero/hero2.png",
    "/images/hero/hero3.png",
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <section className="relative w-full h-[75vh] mt-8 overflow-hidden px-4 md:px-10">
            <div className="mb-20">
                {/* Slides */}
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4  transform -translate-y-1/2 p-3 z-20"
                >
                    <ChevronLeft className="w-10 h-10 text-white" />
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 z-20"
                >
                    <ChevronRight className="w-10 h-10 text-white" />
                </button>
            </div>
        </section>
    );
}
