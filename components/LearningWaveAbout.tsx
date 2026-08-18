import Image from "next/image";
import {
  BarChart3,
  BookOpen,
  Eye,
  MonitorPlay,
  Target,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Evidence-Based Design",
    text: "Research-backed methods to create effective learning experiences.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Learning Systems",
    text: "Scalable digital solutions that deliver learning anytime, anywhere.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    text: "Measuring impact and providing insights that drive continuous improvement.",
  },
];

export default function LearningWaveAbout() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* About Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-purple-100">
            <Image
              src="/images/about-team-meeting.png"
              alt="LearningWave learning strategy workshop"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] h-auto w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* About Content */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-purple-700 sm:text-sm">
              About Us
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              At Learning Wave
            </h2>

            <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                We design transformative learning experiences using
                evidence-based strategies and digital innovation.
              </p>

              <p>
                We help organizations build scalable training programs,
                digital courses, and performance systems.
              </p>

              <p>
                Our focus is to improve engagement, learning retention,
                and workplace performance.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg shadow-purple-200 transition duration-300 group-hover:scale-110 group-hover:bg-purple-800">
                    <item.icon size={24} />
                  </div>

                  <h3 className="text-base font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <InfoCard
            icon={<Target size={38} />}
            title="Our Mission"
            text="To empower organizations through innovative, evidence-based learning solutions that improve performance, inclusivity, and measurable growth."
          />

          <InfoCard
            icon={<Eye size={38} />}
            title="Our Vision"
            text="To create a world where learning is intuitive, immersive, and directly linked to human performance and potential."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-purple-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}