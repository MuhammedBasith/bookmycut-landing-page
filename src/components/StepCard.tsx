
interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative flex gap-6 items-start group">
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
        <span className="text-purple-600 font-semibold text-lg group-hover:text-white">{step}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
