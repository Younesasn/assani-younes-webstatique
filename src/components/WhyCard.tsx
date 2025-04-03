import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const WhyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="h-[500px] bg-[url(/images/why-1.jpg)] group bg-cover bg-center rounded-lg text-white hover:transition-all">
      <div className="px-4 py-6 space-y-4 bg-gradient-to-b from-black/40 to-transparent group-hover:from-black/60 rounded-lg">
        <h3 className={`text-3xl font-bold w-20 ${poppins.variable}`}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
