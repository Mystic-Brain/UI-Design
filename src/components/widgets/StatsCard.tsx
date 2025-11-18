import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: 'blue' | 'orange' | 'purple';
  className?: string;
}

export const StatsCard = ({
  title,
  value,
  icon: Icon,
  color,
  className,
}: StatsCardProps) => {
  const colorClasses = {
    blue: 'bg-secondary-blue/10 text-secondary-blue',
    orange: 'bg-primary-orange/10 text-primary-orange',
    purple: 'bg-secondary-purple/10 text-secondary-purple',
  };

  return (
    <div
      className={cn(
        'relative rounded-xl p-6 overflow-hidden',
        colorClasses[color],
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-sm font-medium mb-1 opacity-80">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

