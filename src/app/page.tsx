import CategoryCard from "@/components/personal/products/category-card";
import AboutUsSection from "@/components/personal/utils/aboutUsSection";
import { BlurEffectCard, BlurEffectContainer } from "@/components/ui/blur-effect";
import DescriptionCarousel from '@/components/personal/description-carousel';
import NewsletterSection from "@/components/personal/utils/newsletterSection";
import ArticlesSection from "@/components/personal/utils/articles";
import FAQSection from "@/components/personal/utils/faqSection";
import Products from "./product/page";

export default function Home({searchParams}: Readonly<{searchParams: {query: string}}>) {
  return (
   <div className="py-4 flex flex-col items-center gap-4">
   <Products searchParams={searchParams}/>
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
