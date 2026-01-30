"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState("En");
  const [isLangOpen, setIsLangOpen] = useState(false);

  const searchRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white z-50 sticky top-0">
      <div className="max-w-[1440px] mx-auto h-[88px] px-6 flex items-center justify-between relative">

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8"
          >
            {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="relative" ref={searchRef}>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`absolute top-8 left-0 border border-black/20 rounded-md px-3 py-1 transition-all duration-300 ${isSearchOpen
                  ? "w-48 opacity-100"
                  : "w-0 opacity-0 pointer-events-none"
                }`}
            />
          </div>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-sm font-medium"
            >
              {language}
            </button>
            {isLangOpen && (
              <div className="absolute top-6 left-0 bg-white border border-black/10 rounded-md shadow-md">
                {["En", "Fr", "Es"].map((lang) => (
                  <div
                    key={lang}
                    className="px-3 py-1 hover:bg-black/5 cursor-pointer"
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER NAV */}
        <nav
          className={`flex-col md:flex-row md:flex items-center gap-10 absolute md:static top-[88px] left-0 w-full md:w-auto bg-white md:bg-transparent z-40 ${isNavOpen ? "flex" : "hidden md:flex"
            }`}
        >
          <span className="text-sm cursor-pointer">HOTELS & RESORTS</span>
          <Link href="/residences">
          <span className="text-sm cursor-pointer">RESIDENCES</span>
          </Link>

          {/* ✅ LOGO → HOME */}
          <Link href="/" className="mx-6 my-2 md:my-0">
            <img
              src="/images/logo.svg"
              alt="butiq"
              className="h-14 object-contain cursor-pointer"
            />
          </Link>

          <span className="text-sm cursor-pointer">DESTINATIONS</span>
          <Link href="/experiences">
            <span className="text-sm cursor-pointer">EXPERIENCES</span>
          </Link>
        </nav>

        {/* RIGHT */}
        <button className="bg-black text-white h-[40px] w-[190px] hidden md:block">
          RESERVE
        </button>
      </div>
    </header>
  );
}
