"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkText: string;
    linkHref: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    description,
    imageUrl,
    linkText,
    linkHref,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateX = (y / height) * 12;
        const rotateY = (x / width) * -12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (card) {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
        }
    };

    return (
        <Link href={linkHref}>
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group/card relative flex items-center gap-8 bg-neutral-100 rounded-[6rem] shadow-md hover:shadow-lg transition-transform overflow-hidden cursor-pointer aspect-w-4 aspect-h-3 group-hover:scale-105 "
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    transition: "box-shadow .25s, color .25s",
                    padding: "64px 64px 304px",
                }}
            >
                {/* Left Text Section */}
                <div className="flex-1 space-y-4 max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <button
                        className="relative inline-flex items-center font-medium transition-colors 
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
    after:bg-black group-hover/card:after:w-full after:transition-all after:duration-300 
    pb-3 before:absolute before:left-0 before:bottom-0 before:h-0.5 
    before:bg-neutral-300 before:w-full"
                    >
                        {linkText}
                        <span className="ml-2"><ArrowRightIcon /></span>
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="absolute bottom-0 right-0 flex-1 w-2/3 h-2/3 flex flex-col justify-end items-end">
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout="responsive"
                        sizes="(max-width: 991px) 100vw, 50vw"
                        className="mt-auto ml-auto"
                        width={300}
                        height={400}
                    />
                </div>
            </div>
        </Link>

    );
};

export default CategoryCard;
