import CategoryCard from "@/components/personal/products/category-card";
import AboutUsSection from "@/components/personal/utils/aboutUsSection";
import { BlurEffectCard, BlurEffectContainer } from "@/components/ui/blur-effect";
import DescriptionCarousel from '@/components/personal/description-carousel';
import NewsletterSection from "@/components/personal/utils/newsletterSection";
import ArticlesSection from "@/components/personal/utils/articles";
import FAQSection from "@/components/personal/utils/faqSection";
import { ProductCardProps } from "@/interfaces/products";
import ProductGrid from "@/components/personal/products/product-grid";
import { Suspense } from "react";



export default async function Home() {
    let products: ProductCardProps[] = [];
  
    
    try {
      const res = await fetch(`https://fakestoreapi.com/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: { revalidate: 100},
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
  
      products = (await res.json())?.map(
        (product: { id: number; title: string; price: number; image: string; category: string }) => ({
          category: product.category,
          imageUrl: product.image,
          name: product.title,
          price: product.price,
          currency: "$",
          id: product.id,
        })
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  return (
   <div className="py-4 flex flex-col items-center gap-4">
        <div className="max-w-screen-base mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid initialProducts={products} />
        </Suspense>

    </div>

          <BlurEffectContainer className="grid grid-cols-2 gap-10 max-w-screen-base mx-auto px-16">
          <BlurEffectCard>
          <CategoryCard
              title="Audio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum nisl facilisis."
              imageUrl="/assets/categories/audio.png"
              linkText="Explore category"
              linkHref="/categories/audio"
            />
          </BlurEffectCard>

          <BlurEffectCard>
          <CategoryCard
              title="Audio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum nisl facilisis."
              imageUrl="/assets/categories/audio.png"
              linkText="Explore category"
              linkHref="/categories/audio"
            />
          </BlurEffectCard>
          <BlurEffectCard>
          <CategoryCard
              title="Audio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum nisl facilisis."
              imageUrl="/assets/categories/audio.png"
              linkText="Explore category"
              linkHref="/categories/audio"
            />
          </BlurEffectCard>
          <BlurEffectCard>
          <CategoryCard
              title="Audio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum nisl facilisis."
              imageUrl="/assets/categories/audio.png"
              linkText="Explore category"
              linkHref="/categories/audio"
            />
          </BlurEffectCard>
          <BlurEffectCard>
          <CategoryCard
              title="Audio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum nisl facilisis."
              imageUrl="/assets/categories/audio.png"
              linkText="Explore category"
              linkHref="/categories/audio"
            />
          </BlurEffectCard>
        </BlurEffectContainer>
        <AboutUsSection />
        <div className="max-w-screen-base mx-auto w-full">
          <DescriptionCarousel />
        </div>

        <div className="max-w-screen-base mx-auto">
          <NewsletterSection/>
        </div>

        <div className="max-w-screen-base mx-auto">
          <ArticlesSection/>
        </div>

        <div className="max-w-screen-base mx-auto">
          <FAQSection/>
        </div>
        </div>
  );
}
