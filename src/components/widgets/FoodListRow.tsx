import { Card } from '../common/Card';

interface FoodItem {
  name: string;
  meal: string;
  calories: string;
  time: string;
  carbs: string;
  icon?: string;
}

interface FoodListRowProps {
  items: FoodItem[];
}

export const FoodListRow = ({ items }: FoodListRowProps) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-text-primary mb-6">Food</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">
                Food
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">
                Meal
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">
                Calories
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">
                Priorities
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">
                Carbs
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
                      {item.icon ? (
                        <span className="text-lg">{item.icon}</span>
                      ) : (
                        <span className="text-xs">🍔</span>
                      )}
                    </div>
                    <span className="font-medium text-text-primary">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-text-secondary">{item.meal}</td>
                <td className="py-3 px-4 text-text-secondary">{item.calories}</td>
                <td className="py-3 px-4 text-text-secondary">{item.time}</td>
                <td className="py-3 px-4 text-text-secondary">{item.carbs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

