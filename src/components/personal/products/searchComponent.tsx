
"use client";

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { name: "All", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Gear", href: "#" },
  { name: "Audio", href: "#" },
]

export const dynamic = "force-dynamic";

export function ProductNavigation() {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams);

  const [search, setSearch] = React.useState(query.search || "");
  const router = useRouter();

  const activeCategory = query.category || "";

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if(search === "" && query.search === undefined) return;
      if (search !== query.search ) {
        const newQuery = new URLSearchParams({
          ...query,
          category: activeCategory || 'All',
          search,
        }).toString();
    
        router.push(`/product?${newQuery}`);

      }
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const setActiveCategory = (category: string) => {
    const newQuery = new URLSearchParams({
      ...query,
      category,
      search,
    }).toString();
  
    router.push(`/product?${newQuery}`);
  };
  



  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          <nav className="flex items-center space-x-1" aria-label="Categories">
            {categories.map((category, index) => (
              <React.Fragment key={category.name}>
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    "px-3 py-2 text-sm transition-colors hover:text-black",
                    activeCategory === category.name ? "text-black" : "text-gray-500",
                  )}
                  aria-current={activeCategory === category.name ? "page" : undefined}
                >
                  {category.name}
                </button>
                {index < categories.length - 1 && <span className="text-gray-300">/</span>}
              </React.Fragment>
            ))}
          </nav>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search for products"
              className="w-full sm:w-[300px] pl-9 bg-transparent [&::-webkit-search-cancel-button]:hidden"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              
              
            />
          </div>
        </div>
      </div>
    </div>
  )
}

