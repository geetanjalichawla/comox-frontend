import React from "react";
import ProductCard from "@components/personal/products/product-card";
import { ProductCardProps } from "@/interfaces/products";
import { ProductNavigation } from "./searchComponent";

function ProductGrid({ initialProducts }: { initialProducts: ProductCardProps[] }) {

  return (
    <div>
      {/* Search Input */}
      <div className="mb-4">
        <ProductNavigation />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         
{          initialProducts.map((product) => (
            <div key={product.id} className="max-w-xs">
              <ProductCard {...product} />
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default ProductGrid;
