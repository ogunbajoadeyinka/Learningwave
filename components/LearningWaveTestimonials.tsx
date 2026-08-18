import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Learning Wave completely transformed our onboarding process. The custom eLearning modules were clear, engaging, and cut our training time in half.",
    name: "HR Manager",
    company: "FinTech Startup",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "Their strategic approach and attention to detail helped us increase learner engagement by 60% and improve performance across multiple teams.",
    name: "L&D Director",
    company: "Healthcare Company",
    avatar: "/images/avatar-2.png",
  },
  {
    quote:
      "The workshops were practical, engaging, and immediately applicable. Our team left with tools they still use every day.",
    name: "Training Lead",
    company: "Global Retail Brand",
    avatar: "/images/avatar-3.png",
  },
];

export default function LearningWaveTestimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#faf7ff] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple-700">
            Our Clients
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What Our Clients Are Saying
          </h2>
        </div>

        <div className="relative mt-12">
          <button className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple-700 shadow-lg transition hover:scale-105 hover:bg-purple-700 hover:text-white lg:flex">
            <ChevronLeft size={24} />
          </button>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[1.75rem] border border-purple-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100"
              >
                <Quote className="text-purple-700" size={34} />

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {item.quote}
                </p>

                <div className="mt-8 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={52}
                      height={52}
                      className="h-13 w-13 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500">{item.company}</p>
                    </div>
                  </div>

                  <div className="hidden gap-1 text-purple-700 sm:flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 hidden h-12 w-12 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple-700 shadow-lg transition hover:scale-105 hover:bg-purple-700 hover:text-white lg:flex">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-purple-700" />
          <span className="h-3 w-3 rounded-full bg-purple-200" />
          <span className="h-3 w-3 rounded-full bg-purple-200" />
        </div>
      </div>
    </section>
  );
}