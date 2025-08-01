import React from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";

const cardData = [
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
  {
    title: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Bibendum ipsum at cras maecenas. Eget amet.",
  },
];

const ProjectCardCarousel = () => {
  return (
    <div className="z-10 pl-4 md:pl-10">
      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView="auto"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="py-4"
      >
        {cardData.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "300px" }}
            className="!w-[300px] flex-shrink-0"
          >
            <div className="bg-[#111827] border border-slate-50 rounded-xl p-5 w-full">
              <div className="h-45 bg-gradient-to-br from-slate-100 to-blue-200 rounded-xl mb-4" />
              <a
                href="#"
                className="text-xs text-white border-white border font-semibold rounded-lg bg-gray-800 p-1"
              >
                Project Tag
              </a>
              <h3 className="text-lg font-semibold my-2">{card.title}</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {card.desc}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Button title="Learn more" Icon={MdArrowOutward} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom section with text + arrows */}
      <div className=" flex  flex-col-reverse lg:flex-row justify-between items-start lg:items-end gap-4 mt-12">
        <div>
          <p className="text-lg bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-2">
            Every project tells a story of transformation.
          </p>
          <p className="text-lg bg-gradient-to-b from-white to-[#3896d4] bg-clip-text text-transparent">
            See what’s possible when software actually solves problems.
          </p>
        </div>

        <div className="flex space-x-2 self-start pr-12">
          <button className="custom-prev text-[#2374AB] hover:text-blue-500 transition">
            <IoMdArrowBack className="text-3xl" />
          </button>
          <button className="custom-next text-[#2374AB] hover:text-blue-500 transition">
            <IoMdArrowForward className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardCarousel;
