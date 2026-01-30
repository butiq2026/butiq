"use client";

const experiences = [
    {
        title: "GOA",
        desc:
            "Our hotels in Goa are situated in quiet neighbourhoods, a world away from the more familiar tourist hotspots. So whether you’re checking in to Velha, Cuelim or Hideaway in Netravali you’ll leave with a decidedly local, and new experience of Goa. One that involves leisurely walks, cycle tours, and of course, some great local delicacies.",
        cta: "EXPLORE",
    },
    {
        title: "GIR",
        desc:
            "Early riser or not, a chance to visit our neighbourhood lions Simba, Bhuro or Allauddin, is always on the cards, thanks to three safaris a day. A sighting is all but sure given the Gir National Sanctuary is home to 700 lions at last count. There’s more on offer beyond the company of lions, of course. A picnic? Check. A leisurely nature trail? Sure. A beach to yourself at Diu? We thought you’d never ask.",
        cta: "EXPLORE",
    },
    {
        title: "KOCHI",
        desc:
            "Art walks. Historic walks. Or leisurely, neighbourhood walks. The riches of Mattancherry and Fort Kochi are within, well, walking distance from the hotel. The town’s creative spirit runs through its markets, boutiques, and cafes, offering a wealth of local experiences no matter your interests.",
        cta: "EXPLORE",
    },
    {
        title: "MARAVANTE BEACH",
        desc:
            "Few will know that Maravanthe Beach on which the hotel sits, is also one of the best diving sites in the country. It’s one of the many unique experiences that the region offers. Others include a visit to the sacred shrine of Murudapa, a trail to the Agumbe Peak and Dolphin spotting. We’ve really got you covered.",
        cta: "EXPLORE",
    },
    {
        title: "ASSAM",
        desc:
            "In the “land of the red river and blue hills”, the great outdoors always leaves you wanting more. Still relatively unexplored, Assam promises to be a trip of many firsts, no matter how many times you visit. Home to the world’s finest tea and the majestic Brahmaputra, the region is also a treasure trove of uncharted adventures. Whether it’s befriending a local artisan or a one-horned rhino, you can never be sure of what’s to come.",
        cta: "EXPLORE",
    },
    {
        title: "THIMPHU",
        desc:
            "Why settle for less than the happiest place on earth when you need a reboot from life’s daily stressors? Bhutan offers rare solitude and time for peace with its awe-inspiring views of the mighty Himalayas, rich cultural heritage, lush hiking trails and ancient Buddhist temples. The Postcard Dewa will make sure you’re warm and well-fed as you indulge in some private time with nature.",
        cta: "EXPLORE",
    },
    {
        title: "GALLE",
        desc:
            "The Sri Lankan port city of Galle has something for everyone: modernist architectural wonders for those who enjoy history and design. Whales, turtles and mangroves for the nature nerds, and pristine beaches for anyone who just wants to unwind. The Postcard Galle offers all this and more.",
        cta: "EXPLORE",
    },
];

export default function Experiences() {
    return (
        <section className="bg-white mt-8">
            {/* HEADER */}
            <div className="bg-[#D9D9D9] h-[613px] flex items-center justify-center">
                <h2 className="text-[48px] md:text-[60px] text-white font-light">
                    EXPERIENCES
                </h2>
            </div>


            {/* CONTENT */}
            <div className="mx-auto px-6 lg:px-20 py-28 space-y-32">
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* IMAGE */}
                        <div
                            className={`w-full h-[360px] bg-[#d9d9d9] ${index % 2 !== 0 ? "lg:order-2" : ""
                                }`}
                        />

                        {/* TEXT */}
                        <div
                            className={`${index % 2 !== 0 ? "lg:order-1" : ""
                                }`}
                        >
                            <h3 className="text-[24px] mb-4">
                                {item.title}
                            </h3>

                            <p className="text-[17px] mb-6">
                                {item.desc}
                            </p>

                            <span className="text-[17px] underline underline-offset-4 cursor-pointer">
                                {item.cta}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
