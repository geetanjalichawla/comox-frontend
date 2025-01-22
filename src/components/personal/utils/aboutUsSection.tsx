"use client";
import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="flex items-center justify-between bg-black text-white rounded-[3.5rem]  overflow-hidden relative py-36 px-14 max-w-screen-base mx-auto">
      {/* Text Content */}
      <div className="max-w-lg space-y-6">
      <h1 className="text-4xl md:text-5xl font-normal tracking-tight  font-sans ">
      Why are we different?
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipiscing elit arcu mollis
          tortor velit facilisis diam vel posuere ullamcorper.
        </p>
        <button className="px-6 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all">
          About us
        </button>
      </div>

      {/* Single Image Section */}
      <div className="w-[54%] max-w-[700px] flex justify-end absolute top-0 right-0 bottom-0 items-end">
        <Image
          src="/assets/home/smart-speaker-with-earbuds.jpg" 
          alt="Smart Speaker and Earbuds"
          width={700}
          height={500}
            layout="responsive"
            sizes="(max-width: 479px) 99vw, (max-width: 767px) 84vw, (max-width: 1439px) 51vw, 700px"
          priority
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
