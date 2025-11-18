import { Home, Dumbbell, FileText, Target, Calendar, BarChart3, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  hasArrow?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Overview', icon: Home, active: true },
  { label: 'Workout', icon: Dumbbell },
  { label: 'Diet Plan', icon: FileText },
  { label: 'Goals', icon: Target },
  { label: 'My Schedule', icon: Calendar },
  { label: 'Progress', icon: BarChart3, hasArrow: true },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen = false }: SidebarProps) => {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        {/* Logo - Fixed Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-neutral-200">
          <div className="flex items-center gap-2 p-6">
            <div className="flex items-center gap-1">
              <Dumbbell className="w-6 h-6 text-primary-orange" />
              <Dumbbell className="w-6 h-6 text-primary-orange" />
            </div>
            <span className="text-xl font-bold text-text-primary">Fitness</span>
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-lg transition-colors',
                  item.active
                    ? 'bg-primary-orange text-white'
                    : 'text-text-secondary hover:bg-neutral-100 hover:text-text-primary'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.hasArrow && (
                  <span className="text-text-secondary">→</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Footer Actions - Fixed at bottom */}
        <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-4 py-6 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Help</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-neutral-100 hover:text-text-primary transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

