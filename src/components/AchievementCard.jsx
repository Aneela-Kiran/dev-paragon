import React from "react";
import { BackgroundBeams } from "./ui/background-beams"; 

const card = [
  { value: "48+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
];

const AchievementCard = () => {
  return (
    <div className="pt-10 lg:pt-20 md:px-8 px-4">
      <div className="max-w-5xl mx-auto grid md:gap-5 gap-3 grid-cols-2 md:grid-cols-3 justify-center">
        {card.map((item, index) => (
          <div
            key={index}
            className="relative w-full px-5 py-10 bg-[#02273f] rounded-[14px] border border-white/10 shadow-md text-center overflow-hidden"
          >
            
            <div className="absolute inset-0 z-0">
              <BackgroundBeams />
            </div>

            <div className="relative z-10">
              <div className="absolute top-[-30px] right-[-20px] w-[150px] h-[150px] bg-gradient-to-b from-[#2377af] rounded opacity-60 blur-xl pointer-events-none z-10" />
              <h3 className=" text-2xl lg:text-5xl font-bold text-white">{item.value}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCard;
