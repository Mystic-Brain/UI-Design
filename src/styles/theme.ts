/**
 * Design Tokens - Extracted from Figma Design
 * 
 * This file contains all design tokens including colors, spacing, typography,
 * shadows, and other design system values used across the application.
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  // Primary Colors - Orange accent
  primary: {
    orange: '#FF6B35',
    orangeLight: '#FF8C5A',
    orangeDark: '#E55A2B',
  },

  // Secondary Colors
  secondary: {
    blue: '#4A90E2',      // Light blue for workout cards
    purple: '#9B59B6',    // Purple for steps cards
  },

  // Neutral/Gray Palette
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
    card: '#FFFFFF',
  },

  // Text Colors
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    muted: '#9CA3AF',
    white: '#FFFFFF',
  },

  // Border Colors
  border: {
    light: '#E5E5E5',
    medium: '#D4D4D4',
    dark: '#A3A3A3',
  },
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  },

  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
} as const;

// ============================================================================
// BREAKPOINTS (for reference, use Tailwind's responsive utilities)
// ============================================================================

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export default {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  breakpoints,
  zIndex,
};

