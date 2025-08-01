import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";
import ProjectCard from "./cards";
import AchievementCard from "./AchievementCard";
import bgImage from "../assets/bg.jpg";

function Deliverable() {
  return (
    <section className="my-40 overflow-hidden lg:px-24 ">
      <div className="bg-[#0b0f1b] text-white py-12 md:px-12 relative overflow-hidden max-w-[1440px] mx-auto">
        <div className=" absolute top-[-70px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#2374AB] via-transparent to-transparent rounded-full opacity-60 blur-xl pointer-events-none z-10" />
        {/* <div>
          <img
            src={bgImage}
            alt="glow light image "
            className="absolute top-0 left-0 w-[200px] h-[500px] opacity-25 pointer-events-none select-none z-0 "
          />
        </div> */}

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start my-6 px-10 py-8 lg:py-4">
          <div className="mt-5">
            <h2 className=" text-2xl lg:text-5xl  font-bold mb-5">
              Successful Deliveries
            </h2>
            <p className="text-white/85 text-lg">
              How we truned ideas into impact .See what we have delivered
            </p>
          </div>
          <div>
            <Button title="Explore Portfolio " Icon={IoIosArrowRoundForward} />
          </div>
        </div>
        {/* Cards Section */}
        <div>
          <ProjectCard />
        </div>
        {/* Achievement Section */}
        <div>
          <AchievementCard />
        </div>
      </div>
    </section>
  );
}

export default Deliverable;
