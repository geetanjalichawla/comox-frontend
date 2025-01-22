"use client";
import { ProductCardProps } from "@/interfaces/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const ProductCard: React.FC<ProductCardProps> = ({ category, imageUrl, name, price, currency }) => {
  return (
    <div className="rounded-lg border border-gray-200  shadow-md hover:shadow-lg white-overlay">
      {/* Category Label */}
      <div className="mb-2 inline-block rounded-full bg-white shadow-lg px-3 py-1 text-xs font-medium text-gray-600 absolute top-4 left-4 z-30">
        {category}
      </div>

      {/* Product Image */}
      <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Product Name */}
        <div className="flex px-4 py-2 justify-between items-center">
        <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>

{/* Product Price */}
<p className="text-sm text-gray-500">
  {currency} {price}
</p>

        </div>
{/* Action Icon */}
<div className="mt-4 flex items-center justify-end">
  <button className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 text-gray-700">
    <ArrowRight size={24} />
  </button>
</div>
        </div>
    </div>
  );
};

export default ProductCard;
