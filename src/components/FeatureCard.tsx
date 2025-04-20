
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "relative rounded-2xl p-8 bg-white shadow-lg transition-all duration-300 hover:shadow-xl",
      "border border-slate-100 group",
      className
    )}>
      <div className="mb-6">
        <div className="inline-block p-3 rounded-xl bg-purple-100 group-hover:bg-purple-600 transition-colors">
          <Icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
