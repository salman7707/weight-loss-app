/**
 * Base UI Components - Reusable foundational elements with CVA styling
 * These components form the building blocks for all other components
 */

import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Heading Component with multiple variants
const headingVariants = cva('font-sans font-bold text-balance', {
  variants: {
    size: {
      h1: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
      h3: 'text-2xl md:text-3xl lg:text-4xl leading-tight',
      h4: 'text-xl md:text-2xl lg:text-3xl',
      h5: 'text-lg md:text-xl',
      h6: 'text-base md:text-lg',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-teal-700',
      secondary: 'text-gray-700',
      light: 'text-gray-600',
      white: 'text-white',
      accent: 'text-orange-500',
    },
    weight: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    size: 'h2',
    color: 'default',
    weight: 'bold',
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ children, size, color, weight, className, as: Component = 'h2' }: HeadingProps) {
  return (
    <Component className={cn(headingVariants({ size, color, weight }), className)}>
      {children}
    </Component>
  );
}

// Paragraph Component with multiple variants
const paragraphVariants = cva('font-sans text-balance', {
  variants: {
    size: {
      xs: 'text-xs md:text-sm',
      sm: 'text-sm md:text-base',
      base: 'text-base md:text-lg',
      lg: 'text-lg md:text-xl',
      xl: 'text-xl md:text-2xl',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-gray-600',
      light: 'text-gray-500',
      white: 'text-white',
      accent: 'text-orange-500',
      primary: 'text-teal-700',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
    leading: {
      tight: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'default',
    weight: 'normal',
    leading: 'relaxed',
  },
});

interface ParagraphProps extends VariantProps<typeof paragraphVariants> {
  children: ReactNode;
  className?: string;
}

export function Paragraph({ children, size, color, weight, leading, className }: ParagraphProps) {
  return (
    <p className={cn(paragraphVariants({ size, color, weight, leading }), className)}>
      {children}
    </p>
  );
}

// Badge Component
const badgeVariants = cva('inline-flex items-center px-3 py-1 rounded-full font-medium text-sm', {
  variants: {
    variant: {
      default: 'bg-gray-200 text-gray-800',
      primary: 'bg-teal-100 text-teal-700',
      secondary: 'bg-orange-100 text-orange-700',
      success: 'bg-green-100 text-green-700',
      accent: 'bg-blue-100 text-blue-700',
    },
    size: {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-3 py-1',
      lg: 'text-base px-4 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, variant, size, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)}>{children}</span>;
}

// Card Component
const cardVariants = cva('rounded-xl transition-all duration-300', {
  variants: {
    variant: {
      default: 'bg-white border border-gray-200 hover:border-gray-300',
      elevated: 'bg-white shadow-sm hover:shadow-md border border-gray-100',
      filled: 'bg-gray-50 border border-gray-100 hover:bg-gray-100',
      primary: 'bg-teal-700 border border-teal-700 text-white',
      dark: 'bg-teal-700 text-white shadow-lg',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
    interactive: {
      true: 'cursor-pointer hover:shadow-md hover:-translate-y-1 duration-300',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    interactive: false,
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, variant, padding, interactive, className }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, padding, interactive }), className)}>
      {children}
    </div>
  );
}

// Button Component
const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        outline: 'border-2 border-teal-700 text-teal-700 hover:bg-teal-50 focus:ring-teal-500',
        accent: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400',
        ghost: 'text-teal-700 hover:bg-teal-50 focus:ring-teal-500',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  asLink?: boolean;
  href?: string;
}

export function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  disabled,
  onClick,
  type = 'button',
  asLink,
  href,
}: ButtonProps) {
  const buttonClass = cn(buttonVariants({ variant, size, fullWidth }), className);

  if (asLink && href) {
    return (
      <a href={href} className={cn(buttonClass, 'inline-flex')}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

// Section Wrapper Component
const sectionVariants = cva('w-full py-12 md:py-16 lg:py-20', {
  variants: {
    background: {
      white: 'bg-white',
      light: 'bg-gray-50',
      teal: 'bg-teal-700',
      accent: 'bg-teal-600',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4 md:px-6',
      md: 'px-6 md:px-8',
      lg: 'px-6 md:px-8 lg:px-10',
    },
  },
  defaultVariants: {
    background: 'white',
    padding: 'md',
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  centered?: boolean;
}

export function Section({
  children,
  background,
  padding,
  className,
  maxWidth = 'xl',
  centered,
}: SectionProps) {
  const maxWidthClass = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
  }[maxWidth];

  return (
    <section className={cn(sectionVariants({ background, padding }), className)}>
      <div className={cn('mx-auto', maxWidthClass, centered && 'text-center')}>
        {children}
      </div>
    </section>
  );
}
