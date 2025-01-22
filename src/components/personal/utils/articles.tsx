
import { BlurEffectCard, BlurEffectContainer } from "@/components/ui/blur-effect";
import Image from "next/image";
import React from "react";

const articles = [
  {
    id: 1,
    title: "How to create the perfect work from home setup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.",
    image: "/images/work-setup.jpg", // Replace with actual image URL
    category: "Ideas",
    date: "August 31, 2022",
  },
  {
    id: 2,
    title: "Alexa vs Siri vs Google Home: Which smart assistant is the best?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.",
    image: "/images/smart-assistant.jpg", // Replace with actual image URL
    category: "Tutorials",
    date: "August 31, 2022",
  },
];

const ArticlesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our articles and news</h2>
          <button className="px-6 py-2 border-2 border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Browse all articles
          </button>
        </div>

        {/* Articles */}
        <BlurEffectContainer className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <BlurEffectCard
              key={article.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
                width={224}
                height={224}
              />
              <div className="">
                <h3 className="text-lg font-bold text-gray-800 px-6">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2 px-6">
                  {article.description}
                </p>
                <hr className="border-t border-neutral-600 mt-4 h-1 "/>
                <div className="flex justify-between items-center mt-6 text-sm text-gray-500 p-6">
                  <span className="px-3 py-1 bg-gray-200 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </BlurEffectCard>
          ))}
        </BlurEffectContainer>
    </section>
  );
};

export default ArticlesSection;
