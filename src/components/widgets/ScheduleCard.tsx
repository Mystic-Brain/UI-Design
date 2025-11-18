import { Calendar, Clock } from 'lucide-react';
import { Card } from '../common/Card';

interface ScheduleItem {
  day: string;
  activity: string;
  time: string;
  duration: string;
}

interface ScheduleCardProps {
  items: ScheduleItem[];
}

export const ScheduleCard = ({ items }: ScheduleCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">My Schedule</h2>
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
            className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-primary-orange" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-text-primary mb-1">
                {item.activity}
              </h3>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
                <span>{item.duration}</span>
              </div>
            </div>
            <div className="text-sm font-medium text-text-secondary">
              {item.day}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

