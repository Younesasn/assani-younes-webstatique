import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="m-4 rounded-md bg-[url(/images/hero.jpg)] flex justify-center items-center bg-cover bg-center h-80 lg:h-[600px] text-center">
      <h2 className={`${poppins.variable} text-4xl lg:text-7xl text-white font-bold`}>Travaillez intelligemment, collaborez partout</h2>
    </section>
  );
}
