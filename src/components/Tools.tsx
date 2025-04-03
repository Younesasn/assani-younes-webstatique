import React from "react";
import { Container } from "./Container";
import { ToolsCard } from "./ToolsCard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const Tools = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Container className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10">
          <div className="space-y-6 flex flex-col justify-end">
            <h2 className={`text-6xl font-semibold w-36 ${poppins.variable}`}>Outils essentiels</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              possimus a non repellendus sequi eum eligendi earum in,
              repudiandae ducimus ea obcaecati dicta est, rem similique illum
              magni, excepturi perferendis.
            </p>
          </div>
          <ToolsCard
            number="01"
            title="Agenda intelligent"
            description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
          />
          <ToolsCard
            number="01"
            title="Agenda intelligent"
            description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
          />
          <ToolsCard
            number="01"
            title="Agenda intelligent"
            description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
          />
          <ToolsCard
            number="01"
            title="Agenda intelligent"
            description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
          />
          <ToolsCard
            number="01"
            title="Agenda intelligent"
            description="Planifiez vos tâches, réunions et rappels en quelques secondes grâce à une interface claire et intuitive"
          />
        </div>
      </Container>
    </div>
  );
};
