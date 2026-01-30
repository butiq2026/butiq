import Image from "next/image";

export default function FeaturesSection() {
  return (
    <>
      {/* FEATURES SECTION */}
      <section className="bg-[#fffdf9] w-full">
        <div className="max-w-[1100px] mx-auto px-5 pt-20 md:pt-24 pb-24 md:pb-32 text-center">

          {/* Title */}
          <h2 className="text-[18px] md:text-[20px] font-medium mb-8 md:mb-10">
            WELCOME TO THE BUTIQ HOTEL
          </h2>

          {/* Description */}
          <p className="max-w-[900px] mx-auto mb-10 text-[14px] md:text-[16px] text-[#333] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-[140px]">
            {[
              { icon: "/images/heroIcons/butler.svg", label: "BUTLER ON CALL" },
              { icon: "/images/heroIcons/cuisine.svg", label: "AUTHENTIC REGIONAL CUISINE" },
              { icon: "/images/heroIcons/pets.svg", label: "PETS WELCOME EVERYWHERE" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full border border-black flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={28}
                    height={28}
                  />
                </div>

                <span className="text-[11px] md:text-[12px] tracking-wide text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-[1000px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/Amanjena.mp4" type="video/mp4" />
        </video>

        {/* optional overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </section>
    </>
  );
}
