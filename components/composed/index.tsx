/**
 * Composed Components - Built from base components with specific use cases
 * These are reusable patterns used throughout the application
 */

import { Card, Heading, Paragraph, Badge, Button } from '@/components/ui/base';
import { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Feature Card - Used for highlighting features
interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  badge?: string;
  variant?: 'default' | 'elevated' | 'primary';
  interactive?: boolean;
}

export function FeatureCard({ icon, title, description, badge, variant = 'default', interactive = false }: FeatureCardProps) {
  return (
    <Card variant={variant} padding="lg" interactive={interactive} className="h-full">
      <div className="flex flex-col gap-4">
        {icon && (
          <div className="text-4xl">
            {icon}
          </div>
        )}
        {badge && <Badge variant="primary">{badge}</Badge>}
        <Heading as="h3" size="h4" color="primary">
          {title}
        </Heading>
        <Paragraph size="base" color="light" leading="relaxed">
          {description}
        </Paragraph>
      </div>
    </Card>
  );
}

// Testimonial Card - For before/after and testimonials
interface TestimonialCardProps {
  title: string;
  beforeImage?: string;
  afterImage?: string;
  text: string;
  weight?: string;
  dot?: ReactNode;
  color?: string;
}

export function TestimonialCard({ title, beforeImage, afterImage, text, weight, dot, color }: TestimonialCardProps) {
  return (
    <Card variant="elevated" padding="lg" className={cn('h-full', color)}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {dot && <span className="text-2xl">{dot}</span>}
          <Heading as="h4" size="h5" color="primary">
            {title}
          </Heading>
        </div>
        
        {(beforeImage || afterImage) && (
          <div className="flex gap-3 w-full">
            {beforeImage && (
              <div className="flex-1">
                <div className="relative w-full h-32 md:h-40 bg-gray-200 rounded-md overflow-hidden">
                  <Image
                    src={beforeImage}
                    alt={`${title} before`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            {afterImage && (
              <div className="flex-1">
                <div className="relative w-full h-32 md:h-40 bg-gray-200 rounded-md overflow-hidden">
                  <Image
                    src={afterImage}
                    alt={`${title} after`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <Paragraph size="sm" color="light" leading="relaxed" className="line-clamp-3">
          {text}
        </Paragraph>

        {weight && (
          <div className="pt-2 border-t border-gray-200">
            <Badge variant="accent">{weight}</Badge>
          </div>
        )}
      </div>
    </Card>
  );
}

// Stats Highlight - For key metrics and benefits
interface StatsHighlightProps {
  number?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: 'default' | 'primary' | 'accent';
}

export function StatsHighlight({ number, title, description, icon, variant = 'default' }: StatsHighlightProps) {
  const bgColor = {
    default: 'bg-gray-50',
    primary: 'bg-teal-50',
    accent: 'bg-orange-50',
  }[variant];

  const titleColor = {
    default: 'primary',
    primary: 'primary',
    accent: 'accent',
  }[variant] as any;

  return (
    <div className={cn('rounded-lg p-6 md:p-8', bgColor)}>
      <div className="flex gap-4">
        {icon && <div className="text-3xl flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          {number && (
            <Heading as="h3" size="h3" color={titleColor} weight="extrabold">
              {number}
            </Heading>
          )}
          <Heading as="h4" size="h5" color="primary" className="mt-2">
            {title}
          </Heading>
          <Paragraph size="sm" color="light" className="mt-2">
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

// CTA Block - For call-to-action sections
interface CTABlockProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  onButtonClick?: () => void;
  buttonHref?: string;
  background?: 'white' | 'teal' | 'light';
  textAlignment?: 'left' | 'center' | 'right';
}

export function CTABlock({
  heading,
  description,
  buttonText,
  buttonVariant = 'primary',
  onButtonClick,
  buttonHref,
  background = 'teal',
  textAlignment = 'center',
}: CTABlockProps) {
  const bgClass = {
    white: 'bg-white border border-gray-200',
    teal: 'bg-teal-700 text-white',
    light: 'bg-gray-50',
  }[background];

  const textClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[textAlignment];

  return (
    <Card
      variant={background === 'teal' ? 'dark' : background === 'light' ? 'filled' : 'default'}
      padding="lg"
      className={cn('rounded-2xl', background === 'white' && 'border-2 border-gray-200')}
    >
      <div className={cn('flex flex-col gap-4', textClass)}>
        <Heading
          as="h3"
          size="h3"
          color={background === 'teal' ? 'white' : 'primary'}
        >
          {heading}
        </Heading>
        {description && (
          <Paragraph
            size="base"
            color={background === 'teal' ? 'white' : 'light'}
            leading="relaxed"
          >
            {description}
          </Paragraph>
        )}
        <div className={cn('pt-4', textAlignment === 'center' ? 'flex justify-center' : textAlignment === 'right' ? 'flex justify-end' : '')}>
          <Button
            variant={buttonVariant}
            size="lg"
            onClick={onButtonClick}
            href={buttonHref}
            asLink={!!buttonHref}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Benefits List - For showing list of benefits
interface BenefitListProps {
  items: string[];
  columns?: 1 | 2 | 3;
  icon?: ReactNode;
}

export function BenefitsList({ items, columns = 2, icon = '✓' }: BenefitListProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={cn('grid gap-4', gridClass)}>
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-3">
          <div className="text-teal-700 font-bold flex-shrink-0">{icon}</div>
          <Paragraph size="base" color="light">
            {item}
          </Paragraph>
        </div>
      ))}
    </div>
  );
}

// Image with caption
interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export function ImageWithCaption({ src, alt, caption, rounded = 'lg' }: ImageWithCaptionProps) {
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }[rounded];

  return (
    <div className="flex flex-col gap-3">
      <div className={cn('relative w-full h-64 md:h-96 bg-gray-200', roundedClass, 'overflow-hidden')}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <Paragraph size="sm" color="light" className="text-center">
          {caption}
        </Paragraph>
      )}
    </div>
  );
}
