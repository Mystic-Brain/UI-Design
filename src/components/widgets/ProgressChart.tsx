import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '../common/Card';

interface ChartDataPoint {
  day: string;
  workout: number;
  calories: number;
  steps: number;
}

interface ProgressChartProps {
  data?: ChartDataPoint[];
  period?: 'daily' | 'weekly' | 'monthly';
}

// Mock data - replace with real data from props or API
const defaultWeeklyData: ChartDataPoint[] = [
  { day: 'Mon', workout: 75, calories: 60, steps: 85 },
  { day: 'Tue', workout: 45, calories: 80, steps: 70 },
  { day: 'Wed', workout: 90, calories: 50, steps: 95 },
  { day: 'Thu', workout: 65, calories: 70, steps: 80 },
  { day: 'Fri', workout: 55, calories: 90, steps: 65 },
  { day: 'Sat', workout: 85, calories: 75, steps: 90 },
  { day: 'Sun', workout: 70, calories: 85, steps: 75 },
];

export const ProgressChart = ({
  data = defaultWeeklyData,
  period = 'weekly',
}: ProgressChartProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>(
    period
  );

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-neutral-200">
          <p className="font-semibold text-text-primary mb-2">{payload[0].payload.day}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Goal Progress</h2>
        <select
          value={selectedPeriod}
          onChange={(e) =>
            setSelectedPeriod(e.target.value as 'daily' | 'weekly' | 'monthly')
          }
          className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-orange cursor-pointer"
        >
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-full h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
              axisLine={{ stroke: '#E5E5E5' }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="workout"
              fill="#4A90E2"
              radius={[8, 8, 0, 0]}
              name="Workout"
            />
            <Bar
              dataKey="calories"
              fill="#FF6B35"
              radius={[8, 8, 0, 0]}
              name="Calories"
            />
            <Bar
              dataKey="steps"
              fill="#9B59B6"
              radius={[8, 8, 0, 0]}
              name="Steps"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-secondary-blue"></div>
          <span className="text-sm text-text-secondary font-medium">Workout</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary-orange"></div>
          <span className="text-sm text-text-secondary font-medium">Calories</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-secondary-purple"></div>
          <span className="text-sm text-text-secondary font-medium">Steps</span>
        </div>
      </div>
    </Card>
  );
};
