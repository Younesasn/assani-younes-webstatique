import { Poppins } from "next/font/google";
import { Container } from "./Container";
import { WhyCard } from "./WhyCard";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export default function Why() {
  return (
    <Container>
      <h2 className={`text-4xl lg:text-5xl font-bold ${poppins.variable}`}>
        Pourquoi choisir WorkSphere ?
      </h2>
      <div className="py-10 lg:px-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <WhyCard
          title="Productivité maximale"
          description="Un espace de travail optimisé sans distractions."
        />
        <WhyCard
          title="Productivité maximale"
          description="Un espace de travail optimisé sans distractions."
        />
        <WhyCard
          title="Productivité maximale"
          description="Un espace de travail optimisé sans distractions."
        />
        <WhyCard
          title="Productivité maximale"
          description="Un espace de travail optimisé sans distractions."
        />
      </div>
    </Container>
  );
}
