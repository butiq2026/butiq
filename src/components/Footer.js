"use client";
import Link from "next/link";

import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] text-[#111]">

      {/* TOP SIGNUP BAR */}
      <div className="border-b border-[#969696] mx-20">
        <div className="
          max-w-[1440px] mx-auto
          px-6 lg:px-12
          py-7
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-6
        ">
          <h3 className="text-[21px] font-light">
            Get Inspired
          </h3>

          <p className="text-[13px] max-w-[520px] text-center">
            To receive updates about exclusive experiences, events, new destinations and more, please register your interest
          </p>

          <button className="bg-black text-white w-[260px] h-[30px] text-[13px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="
        max-w-[1440px] mx-auto
        px-6 lg:px-20
        py-20
        grid
        grid-cols-1 lg:grid-cols-[260px_1fr]
        gap-24
      ">

        {/* MORE INFORMATION */}
        <div>
          <h4 className="mb-5 text-[21px]">
            More information
          </h4>

          <ul className="space-y-[3px] text-[13px]">
            <li className="text-[14px]">Aman Group</li>
            <li>- Aman</li>
            <li>- Aman Essentials</li>
            <li>- Aman Interiors</li>
            <li>- Janu</li>
            <li>Gift Card</li>
            <li>Forthcoming Developments</li>
            <li>Careers</li>
            <li>Leadership</li>
            <li>Sustainability</li>
            <li>Privacy Notice</li>
            <li>Cookie Policy</li>
            <li>Legal Notice</li>
            <li>Digital Accessibility</li>
            <li>Cookies Settings</li>
          </ul>

          <Link href="/contact">
            <button className="mt-5 border border-[#999] px-6 py-[6px] text-[13px] hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </Link>

        </div>

        {/* DESTINATIONS */}
        <div>
          <h4 className="mb-5 text-[21px]">
            Destinations
          </h4>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-24
            gap-y-14
            text-[13px]
          ">

            {/* COLUMN 1 */}
            <div>
              <p className="space-y-[3px] text-[14px]">Americas & Caribbean</p>
              <p>Amanera, Dominican Republic</p>
              <p>Amangani, United States</p>
              <p>Amangiri, United States</p>
              <p>Aman New York, United States</p>
              <p>Amanyara, Turks & Caicos Islands</p>
              <p>Amanvari, Opening 2025</p>
              <p>Aman Miami Beach, Opening 2026</p>
              <p>Aman Beverly Hills, Opening 2027</p>

              <p className="mt-6 space-y-[3px] text-[14px]">Europe & Africa</p>
              <p>Amanjena, Morocco</p>
              <p>Aman Le Mélézin, France</p>
              <p>Amanruya, Turkey</p>
              <p>Aman Sveti Stefan, Montenegro</p>
              <p>Aman Venice, Italy</p>
              <p>Amanzoe, Greece</p>
              <p>Aman Rosa Alpina, Opening 2025</p>
              <p>Aman Spa at The Connaught, United Kingdom</p>
            </div>

            {/* COLUMN 2 */}
            <div>
              <p className="space-y-[3px] text-[14px]">Asia</p>
              <p>Amanbagh, India</p>
              <p>Amandari, Indonesia</p>
              <p>Amandayan, China</p>
              <p>Amandira, Indonesia</p>
              <p>Amanfayun, China</p>
              <p>Amankila, Indonesia</p>
              <p>Amankora, Bhutan</p>
              <p>Aman Kyoto, Japan</p>
              <p>Aman-i-Khas, India</p>
              <p>Amanjiwo, Indonesia</p>
              <p>Amansara, Cambodia</p>
              <p>Aman Summer Palace, China</p>
              <p>Aman Villas at Nusa Dua, Indonesia</p>
              <p>Amanwana, Indonesia</p>
              <p>Amanyangyun, China</p>
            </div>

            {/* COLUMN 3 */}
            <div>
              <p className="space-y-[3px] text-[14px]">• Asia (continued)</p>
              <p>• Amangalla, Sri Lanka</p>
              <p>• Amanemu, Japan</p>
              <p>• Aman Residences, Tokyo, Japan</p>
              <p>• Amantaka, Laos</p>
              <p>• Aman Tokyo, Japan</p>
              <p>• Amanoi, Vietnam</p>
              <p>• Amanpulo, Philippines</p>
              <p>• Amanpuri, Thailand</p>
              <p>• Amanwella, Sri Lanka</p>
              <p>• Aman Nai Lert Bangkok, Coming soon</p>
              <p>• Aman Niseko, Opening 2027</p>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#969696] mx-20">
        <div className="
          max-w-[1440px] mx-auto
          px-6 lg:px-12
          py-6 pb-10
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-4
          text-[13px]
        ">
          <img src="/images/logo.svg" alt="butiq" className="h-[41px] w-[93px]" />

          <div className="flex items-center gap-5 text-[26px]">
            <span className="mr-2 text-[13px]">Follow us on:</span>
            <FaFacebookF />
            <FaWhatsapp />
            <FaYoutube />
            <FaInstagram />
            <FaXTwitter />
          </div>

          <span>Copyright 2025, Aman Group S.a.r.l.</span>
        </div>
      </div>

    </footer>
  );
}
