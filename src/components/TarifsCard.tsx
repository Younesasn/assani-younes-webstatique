import React from "react";
import { clsx } from "clsx";
import { Button } from "./Button";
import { CircleCheckBig, MoveUpRight } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const TarifsCard = ({
  badge,
  price,
  description,
  list,
  isColored,
}: {
  badge: string;
  price: number;
  description: string;
  list: string[];
  isColored?: boolean;
}) => {
  return (
    <div
      className={clsx(
        isColored
          ? "bg-teal-600 rounded-lg"
          : "bg-white rounded-lg border border-teal-600",
        "flex flex-col p-10 gap-4 text-gray-500"
      )}
    >
      <p
        className={clsx(
          isColored ? "bg-white text-teal-600" : "bg-teal-600 text-white",
          "px-3 py-2 rounded-full text-xs w-min"
        )}
      >
        {badge}
      </p>
      <h3 className={clsx(isColored ? "text-white" : "text-black", `text-5xl font-bold ${poppins.variable}`)}>
        ${price}/mo
      </h3>
      <p className={clsx(isColored ? "text-white" : "text-gray-500")}>{description}</p>
      <ul
        className={clsx(
          isColored ? "text-white" : "text-gray-500",
          "flex flex-col gap-4"
        )}
      >
        {list.map((item, index) => (
          <li key={index} className="flex gap-2">
            <CircleCheckBig />
            {item}
          </li>
        ))}
      </ul>
      <Button href="/tarifs" text="Démarrer" icon={<MoveUpRight size={18} />} />
    </div>
  );
};
