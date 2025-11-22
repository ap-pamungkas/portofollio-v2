"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const sections = ["home", "about", "projects", "contact"];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => setOpen(!open);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },

      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  return (
    <header className="sticky top-0 bg-neutral-800 text-white px-11 py-4 z-50 h-10 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-widest">
          <a href="#home">AGPRA</a>
        </h1>

        <Nav activeSection={activeSection} />

        <button
          onClick={handleToggle}
          className="text-white text-2xl focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      <MobileNav
        open={open}
        onClose={handleToggle}
        activeSection={activeSection}
      />
    </header>
  );
}
