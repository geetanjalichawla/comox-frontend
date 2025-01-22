import ProductGrid from "@/components/personal/products/product-grid";
import { ProductCardProps } from "@/interfaces/products";



export default async function Products({searchParams}: Readonly<{searchParams: {query: string}}>) {
    let products: ProductCardProps[] = [];

    const {query} =  await searchParams;


  
    try {
      const res = await fetch("https://fakestoreapi.com/products?query=" + query, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      products = (await res.json())?.map((product: { id: number; title: string; price: number; image: string; category: string;}) => ({
        category: product.category,
        imageUrl: product.image,
        name: product.title,
        price: product.price,
        currency: "$",
        id: product.id,
    }));

    } catch (error) {
      console.error("Error fetching products:", error);
    }
  
    return (
     <div className="max-w-screen-base mx-auto">
       <ProductGrid  initialProducts={products} />
     </div>
    );
  }
  