'use client';

import Image from 'next/image';
import { content } from '@/lib/content';

export function HeroSection() {
  const { hero } = content;

  return (
    <section className="w-full bg-teal-700 text-white py-12 md:py-20 px-4 md:px-8 rounded-3xl mx-auto md:mx-4 my-8 md:my-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-manrope mb-4 leading-tight">
            {hero.title}
          </h1>
          <p className="text-base md:text-lg text-white/90 font-manrope mb-6">
            {hero.subtitle}
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {hero.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-lg">{feature.icon}</span>
                <span className="text-sm md:text-base font-manrope">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content - Flex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-96 lg:h-auto">
            <Image
              src={hero.image}
              alt="Weight loss goals"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-manrope mb-4">
                {hero.subHeading}
              </h2>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {hero.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-teal-700 font-bold">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold font-manrope text-lg">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-white/80 font-manrope">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-6 bg-white text-teal-700 px-8 py-3 rounded-full font-bold font-manrope hover:bg-gray-100 transition-colors">
              {hero.cta.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
