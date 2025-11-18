# Fitness Dashboard

A modern, responsive fitness dashboard web application built with React, Vite, TypeScript, and TailwindCSS.

## 🎨 Design Tokens

All design tokens (colors, spacing, typography, shadows) are extracted from the Figma design and centralized in `src/styles/theme.ts`.

### Color Palette
- **Primary Orange**: `#FF6B35` (main accent color)
- **Secondary Blue**: `#4A90E2` (workout cards)
- **Secondary Purple**: `#9B59B6` (steps cards)
- **Neutral Grays**: Full scale from 50-900

## 📁 Project Structure

```
src/
  components/
    common/          # Reusable UI components (Card, Container)
    layout/          # Layout components (Sidebar, Navbar)
    widgets/         # Feature-specific widgets
  features/
    dashboard/       # Dashboard feature page
  styles/
    theme.ts         # Design tokens
  utils/
    cn.ts            # Class name utility
  hooks/             # Custom React hooks (if needed)
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: 375px+
- **Tablet**: 768px+
- **Laptop**: 1024px+
- **Desktop**: 1440px+

### Responsive Features
- Sidebar collapses to hamburger menu on mobile/tablet
- Cards wrap naturally on smaller screens
- Typography scales down gracefully
- Grid layouts adapt to screen size

## 📊 Chart Library

**⚠️ IMPORTANT**: The ProgressChart component is currently a placeholder. 

Before implementing the chart, please specify which chart library you'd like to use:
- **Recharts** (React-friendly, declarative)
- **Chart.js** (Popular, feature-rich)
- **Nivo** (Beautiful, responsive)
- **Victory** (Flexible, composable)
- **Other** (specify your preference)

## 🧩 Components

### Layout Components
- `Sidebar`: Navigation sidebar with menu items
- `Navbar`: Top navigation bar with search and user actions

### Widget Components
- `StatsCard`: Activity summary cards (Workout, Calories, Steps)
- `ProgressChart`: Goal progress visualization (placeholder)
- `ScheduleCard`: Daily schedule display
- `GoalCard`: Fitness goals list
- `FoodListRow`: Food tracking table
- `BannerCard`: Hero banner section
- `PremiumCard`: Premium membership promotion

### Common Components
- `Card`: Reusable card container
- `Container`: Responsive container wrapper

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Zustand** - State management (if needed)

## 📝 Next Steps

1. **Choose Chart Library**: Specify your preferred chart library for the ProgressChart component
2. **Add State Management**: Implement Zustand stores if needed for data management
3. **Connect to API**: Replace mock data with real API calls
4. **Add Animations**: Enhance UX with smooth transitions
5. **Testing**: Add unit and integration tests

## 🎯 Features Implemented

✅ Design token extraction and theming
✅ Responsive layout with mobile menu
✅ All UI components from design
✅ Clean, modular architecture
✅ TypeScript type safety
✅ TailwindCSS styling

## 📋 Pending

⏳ Chart library selection and implementation
⏳ API integration
⏳ State management (if needed)
⏳ Authentication (if needed)
