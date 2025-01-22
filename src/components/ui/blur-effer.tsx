import { cn } from "@/lib/utils";

const BlurEffectCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={cn("w-full h-full group-hover:blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105", className)}>
        {children}
      </div>
    );
  };
  


  const BlurEffectContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
      <div className={cn("group", className)}>
        {children}
      </div>
    );
  };

  export { BlurEffectCard, BlurEffectContainer };
  