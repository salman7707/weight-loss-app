'use client';

import Image from 'next/image';
import { content } from '@/lib/content';

export function TestimonialsSection() {
  const { testimonials } = content;

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-manrope mb-4 text-gray-900">
            {testimonials.title}
          </h2>
          <div className="flex justify-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-sm text-gray-600 font-manrope">Trusted</span>
          </div>
        </div>

        {/* Testimonials Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              {/* Time Badge */}
              <div className="mb-4 flex gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold font-manrope">
                  {testimonial.monthLabel}
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold font-manrope">
                  {testimonial.monthEnd}
                </span>
              </div>

              {/* Before/After Images */}
              <div className="flex gap-3 mb-6">
                <div className="relative w-24 h-32 md:w-28 md:h-36 rounded-lg overflow-hidden bg-gray-300">
                  <Image
                    src={testimonial.before}
                    alt="Before"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative w-24 h-32 md:w-28 md:h-36 rounded-lg overflow-hidden bg-gray-300">
                  <Image
                    src={testimonial.after}
                    alt="After"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-gray-700 font-manrope mb-6 flex-grow leading-relaxed">
                {testimonial.text}
              </p>

              {/* Name and Age Footer */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <span className="text-lg">{testimonial.dot}</span>
                <div>
                  <p className="font-semibold font-manrope text-sm text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
