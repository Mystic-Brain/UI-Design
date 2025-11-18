import { Target, Clock } from 'lucide-react';
import { Card } from '../common/Card';

interface GoalItem {
  title: string;
  date: string;
  time: string;
  target: string;
}

interface GoalCardProps {
  items: GoalItem[];
}

export const GoalCard = ({ items }: GoalCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Goals</h2>
        <a
          href="#"
          className="text-sm text-primary-orange hover:text-primary-orange-dark font-medium"
        >
          View All &gt;
        </a>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-orange" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                <Clock className="w-4 h-4" />
                <span>
                  {item.date} | {item.time}
                </span>
              </div>
              <p className="text-sm font-medium text-primary-orange">
                {item.target}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

