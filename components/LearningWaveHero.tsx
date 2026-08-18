"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export default function LearningWaveHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id "${id}" was not found.`);
      return;
    }

    const navbarOffset = 96;

    const targetPosition =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f2ff] text-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(126,34,206,0.16),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.12),transparent_28%)]" />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-purple-100/70 bg-[#f7f2ff]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <Image
              src="/images/learningwave-logoo.png"
              alt="LearningWave logo"
              width={80}
              height={80}
              priority
              className="h-12 w-12 object-contain transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-16 sm:w-16"
            />

            <span className="text-lg font-extrabold tracking-tight transition duration-300 group-hover:text-purple-700 sm:text-2xl">
              Learning<span className="text-purple-700">Wave</span>
            </span>
          </button>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="relative transition duration-300 hover:text-purple-700 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-purple-800 hover:shadow-2xl hover:shadow-purple-300 lg:inline-flex"
          >
            Book Now
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white/75 text-purple-700 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white lg:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-purple-100 bg-white/95 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-purple-50 hover:text-purple-700"
                    >
                      {link.label}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="mt-2 rounded-2xl bg-purple-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-purple-200 bg-white/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-700 shadow-sm backdrop-blur sm:text-xs">
            <span className="h-2 w-2 shrink-0 rounded-full bg-purple-700" />
            <span className="truncate">
              Learning & Performance Consultancy
            </span>
          </div>

          <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[64px]">
            Learning That Drives{" "}
            <span className="text-purple-700">Performance.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            We design evidence-based learning experiences that improve
            performance through strategy, technology, and learning analytics.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-purple-700 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-purple-800 hover:shadow-2xl hover:shadow-purple-300"
            >
              Get Started
              <ArrowRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-purple-200 bg-white/80 px-7 py-4 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white hover:shadow-lg hover:shadow-purple-100"
            >
              Book a Consultation
              <CalendarDays size={18} />
            </button>
          </div>

          <div className="mx-auto mt-9 flex max-w-lg items-start gap-4 rounded-2xl border border-white/80 bg-white/70 p-4 text-left shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100 lg:mx-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
              <ShieldCheck size={24} />
            </div>

            <p className="text-sm leading-6 text-slate-600">
              Trusted by organizations transforming how their teams learn and
              perform.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -right-6 top-8 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-200/70 blur-3xl" />

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/35 p-2 shadow-2xl shadow-purple-200/50 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(147,51,234,0.25)] sm:p-3">
            <Image
              src="/images/learningwave-hero-visual.png"
              alt="LearningWave professional learning consultation"
              width={760}
              height={640}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </main>
    </section>
  );
}