"use client";

export default function ContactPage() {
    return (
        <main className="bg-white">

            <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-[20px] font-medium mb-3">
                            Butiq Concierge & Central Reservations
                        </h2>

                        <p className="text-[13px] text-[#7D7D7D] mb-3">
                            Butiq’s multilingual Reservations team are always available to help you with your travel planning, from booking a single night to multi-resort itineraries.  Operating 24 hours a day, 7 days a week to be at your service, to plan your ultimate Aman experience.
                        </p>

                        <div className="text-[13px] space-y-2 mb-12">
                            <p>Email: <span className="text-[#7D7D7D]">reservations@aman.com</span></p>
                            <p>Direct Dial:</p>
                            <p>Tel: <span className="text-[#7D7D7D]">+1 754 216 7830</span></p>
                            <p>Tel: <span className="text-[#7D7D7D]">+81 3 4578 0484 (Japan)</span></p>
                            <p>Tel: <span className="text-[#7D7D7D]">+65 6027 9617 (Singapore)</span></p>
                            <p className="mt-2">
                                Call us from the US toll-free:
                                <br /><span className="text-[#7D7D7D]">1-833-654-BUTIQ (2626)</span>
                            </p>
                            Contact us via WhatsApp:
                            <br /><span className="text-[#7D7D7D]"> +94 77 774 3500</span>
                        </div>

                        {/* CONTACT FORM */}
                        <h3 className="text-[20px] font-medium">CONTACT US</h3>
                        <p className="text-[#7D7D7D] text-[16px] mb-4">You can reach us anytime</p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="border border-[#ccc] px-3 py-2 text-[13px] outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="border border-[#ccc] px-3 py-2 text-[13px] outline-none"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-[#ccc] px-3 py-2 text-[13px] outline-none"
                            />

                            <div className="flex w-full border border-[#ccc] text-[13px]">

                                {/* COUNTRY CODE DROPDOWN */}
                                <select
                                    className="border-r border-[#ccc] px-3 py-2 bg-white outline-none"
                                    defaultValue="+91"
                                >
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+91">+91</option>
                                    <option value="+81">+81</option>
                                    <option value="+65">+65</option>
                                    <option value="+61">+61</option>
                                    <option value="+49">+49</option>
                                    <option value="+33">+33</option>
                                    <option value="+971">+971</option>
                                    <option value="+94">+94</option>
                                </select>

                                {/* PHONE NUMBER */}
                                <input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="flex-1 px-3 py-2 outline-none"
                                />
                            </div>


                            <button
                                type="submit"
                                className="bg-black text-white w-full py-2 text-[13px]"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT IMAGE / GREY PANEL */}
                    <div className="w-full h-[620px] bg-[#e5e5e5] flex items-center justify-center">
                        {/* Image optional */}
                        {/* <img src="/images/contact.jpg" alt="" className="object-cover w-full h-full" /> */}
                    </div>

                </div>
            </section>

        </main>
    );
}
