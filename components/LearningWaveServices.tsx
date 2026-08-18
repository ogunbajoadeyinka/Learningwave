import {
  ChevronRight,
  Laptop,
  Presentation,
  BookOpen,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Technology Consulting",
    description:
      "LMS/LXP consulting, learning platforms, authoring tools, and digital learning infrastructure.",
  },
  {
    icon: Presentation,
    title: "Learning Strategy",
    description:
      "Needs analysis, performance analysis, learning measurement, and program evaluation.",
  },
  {
    icon: BookOpen,
    title: "Instructional Design",
    description:
      "E-learning development, curriculum design, and scenario-based learning experiences.",
  },
  {
    icon: UsersRound,
    title: "Learning Workshops",
    description:
      "Train-the-trainer programs, leadership development, DEI training, and learning analytics workshops.",
  },
];

export default function LearningWaveServices() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple-700 sm:text-sm">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We design data-driven learning experiences that improve performance
            through strategy, design, and technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.75rem] border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-purple-700 text-white shadow-lg shadow-purple-200 transition-all duration-300 group-hover:scale-105 group-hover:bg-purple-800 sm:h-24 sm:w-24">
                  <service.icon size={42} strokeWidth={1.8} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    {service.description}
                  </p>
                </div>

                <button
                  aria-label={`View ${service.title}`}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-purple-700 shadow-lg shadow-purple-100 ring-1 ring-purple-100 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-purple-700 group-hover:text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}