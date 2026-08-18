"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const companyLinks = [
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact Us", id: "contact" },
];

const resourceLinks = ["Blog", "Case Studies", "Guides", "FAQ"];

const quickLinks = [
  { label: "Book Now", id: "contact" },
  { label: "Learning Workshops", id: "services" },
  { label: "Instructional Design", id: "services" },
  { label: "Learning Strategy", id: "services" },
];

export default function LearningWaveFooter() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 96;
    const position =
      section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#080821] text-white shadow-2xl shadow-purple-300/20">
        <div className="relative px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.8fr_1fr_1.35fr]">
            <div className="md:col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="group inline-flex items-center gap-4"
              >
                <Image
                  src="/images/learningwave-logoo.png"
                  alt="LearningWave Logo"
                  width={72}
                  height={72}
                  priority
                  className="h-14 w-14 object-contain transition duration-500 group-hover:rotate-3 group-hover:scale-105 sm:h-16 sm:w-16"
                />

                <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Learning<span className="text-purple-400">Wave</span>
                </span>
              </button>

              <p className="mt-6 max-w-md text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Transforming learning into measurable performance impact.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <SocialIcon
                  href="https://linkedin.com"
                  icon={<FaLinkedinIn />}
                  label="LinkedIn"
                />
                <SocialIcon
                  href="https://instagram.com"
                  icon={<FaInstagram />}
                  label="Instagram"
                />
                <SocialIcon
                  href="https://x.com"
                  icon={<FaXTwitter />}
                  label="Twitter"
                />
                <SocialIcon
                  href="https://facebook.com"
                  icon={<FaFacebookF />}
                  label="Facebook"
                />
              </div>
            </div>

            <ClickableFooterColumn
              title="Company"
              links={companyLinks}
              onNavigate={scrollToSection}
            />

            <StaticFooterColumn title="Resources" links={resourceLinks} />

            <ClickableFooterColumn
              title="Quick Links"
              links={quickLinks}
              onNavigate={scrollToSection}
            />

            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-purple-400 sm:text-xl">
                Stay Updated
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-white/65">
                Subscribe to our newsletter for insights and updates.
              </p>

              <form className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:overflow-hidden sm:rounded-2xl sm:border sm:border-white/10 sm:bg-white/5 sm:p-1 sm:backdrop-blur">
                <div className="relative flex-1">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35 sm:hidden"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 pl-11 text-sm text-white outline-none placeholder:text-white/40 transition focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 sm:h-full sm:rounded-none sm:border-0 sm:bg-transparent sm:pl-5"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-purple-400 hover:shadow-lg hover:shadow-purple-500/25 sm:h-14 sm:w-14 sm:px-0"
                  aria-label="Subscribe"
                >
                  <span className="sm:hidden">Subscribe</span>
                  <ArrowRight
                    size={22}
                    className="transition duration-300 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            </div>
          </div>

          <div className="relative mt-12 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
              <p>© 2025 LearningWave. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="transition hover:text-white">
                  Terms & Conditions
                </span>
                <span className="hidden text-white/25 sm:inline">|</span>
                <span className="transition hover:text-white">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ClickableFooterColumn({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: { label: string; id: string }[];
  onNavigate: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-purple-400 sm:text-xl">{title}</h3>

      <ul className="mt-5 space-y-3 sm:space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <button
              type="button"
              onClick={() => onNavigate(link.id)}
              className="inline-block text-left text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-base"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StaticFooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-purple-400 sm:text-xl">{title}</h3>

      <ul className="mt-5 space-y-3 sm:space-y-4">
        {links.map((link) => (
          <li
            key={link}
            className="text-sm text-white/45 sm:text-base"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[18px] text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
    >
      {icon}
    </a>
  );
}