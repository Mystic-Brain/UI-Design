import { Search, Bell, Settings, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuToggle?: () => void;
}

export const Navbar = ({ onMenuToggle }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-neutral-200">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Left: Menu Button (Mobile) + Greeting */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg sm:text-xl font-semibold text-text-primary">
            <span className="hidden sm:inline">Good Morning, Welcome Back!</span>
            <span className="sm:hidden">Welcome Back!</span>
          </h1>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-neutral-100 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* User Initial Circle - Hidden on mobile */}
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary-orange items-center justify-center text-white font-semibold">
            S
          </div>

          {/* Icons */}
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-neutral-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hidden sm:block p-2 text-text-secondary hover:text-text-primary hover:bg-neutral-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

