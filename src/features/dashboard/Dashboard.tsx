import { Dumbbell, Flame, Footprints } from 'lucide-react';
import { BannerCard } from '../../components/widgets/BannerCard';
import { StatsCard } from '../../components/widgets/StatsCard';
import { ProgressChart } from '../../components/widgets/ProgressChart';
import { ScheduleCard } from '../../components/widgets/ScheduleCard';
import { GoalCard } from '../../components/widgets/GoalCard';
import { FoodListRow } from '../../components/widgets/FoodListRow';
import { PremiumCard } from '../../components/widgets/PremiumCard';

export const Dashboard = () => {
  // Mock data - replace with real data later
  const scheduleItems = [
    {
      day: 'Monday',
      activity: 'Stretch',
      time: '08:00',
      duration: '20 Sets',
    },
    {
      day: 'Tuesday',
      activity: 'Back Stretch',
      time: '08:00',
      duration: '10 Round',
    },
    {
      day: 'Wednesday',
      activity: 'Yoga',
      time: '08:00',
      duration: '20 min',
    },
  ];

  const goalItems = [
    {
      title: 'ABS & Stretch',
      date: 'Saturday, April 14',
      time: '08:00 AM',
      target: '30 Min/day',
    },
    {
      title: 'Push Up',
      date: 'Sunday, April 15',
      time: '08:00 AM',
      target: '50 Sets/day',
    },
  ];

  const foodItems = [
    {
      name: 'Burrito',
      meal: 'Pizza Burger',
      calories: 'Receiving',
      time: '01:00 AM',
      carbs: '20 gm',
      icon: '🌯',
    },
    {
      name: 'Burger',
      meal: 'Pizza Burger',
      calories: 'Receiving',
      time: '01:00 AM',
      carbs: '20 gm',
      icon: '🍔',
    },
  ];

  return (
    <div className="bg-background-secondary">
      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <main className="flex-1">
          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {/* Banner */}
            <BannerCard
              title="Track Your Daily Activities"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <StatsCard
                title="Workout"
                value="4 hrs"
                icon={Dumbbell}
                color="blue"
              />
              <StatsCard
                title="Calories"
                value="1800 kcl"
                icon={Flame}
                color="orange"
              />
              <StatsCard
                title="Steps"
                value="2200 steps"
                icon={Footprints}
                color="purple"
              />
            </div>

            {/* Progress Chart */}
            <ProgressChart />

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Schedule */}
              <ScheduleCard items={scheduleItems} />

              {/* Goals */}
              <GoalCard items={goalItems} />

              {/* Premium Card */}
              <PremiumCard
                discount="50% off on Premium Membership"
                title="Upgrade Now"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>

            {/* Food Table */}
            <FoodListRow items={foodItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

