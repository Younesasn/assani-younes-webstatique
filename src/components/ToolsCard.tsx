import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const ToolsCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-3 bg-white group hover:bg-teal-600 cursor-pointer py-10 px-6 rounded-xl">
      <p className="text-6xl font-bold text-teal-600 group-hover:text-white transition-all">
        {number}
      </p>
      <h3 className={`${poppins.variable} text-3xl font-semibold text-gray-500 group-hover:text-white transition-all`}>
        {title}
      </h3>
      <p className="text-gray-500 group-hover:text-white transition-all">{description}</p>
    </div>
  );
};
