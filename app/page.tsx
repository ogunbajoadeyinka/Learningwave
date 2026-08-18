import LearningWaveHero from "../components/LearningWaveHero";
import LearningWaveAbout from "../components/LearningWaveAbout";
import LearningWaveServices from "../components/LearningWaveServices";
import LearningWaveTestimonials from "../components/LearningWaveTestimonials";
import LearningWaveContact from "../components/LearningWaveContact";
import LearningWaveFooter from "../components/LearningWaveFooter";

export default function Home() {
  return (
    <main>
      <LearningWaveHero />
      <LearningWaveAbout />
      <LearningWaveServices />
      <LearningWaveTestimonials />
      <LearningWaveContact />
      <LearningWaveFooter />
    </main>
  );
}