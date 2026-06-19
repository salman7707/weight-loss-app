'use client';

import Image from 'next/image';
import { content } from '@/lib/content';

export function FocusOnYouSection() {
  const { focusOnYou } = content;

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid of 4 Cards - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusOnYou.cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Image Container */}
              <div className="relative h-60 md:h-72 mb-6 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold font-manrope mb-3 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-manrope mb-6 flex-grow">
                  {card.description}
                </p>

                {/* CTA Button */}
                <button className="self-start bg-teal-700 text-white px-6 py-3 rounded-full font-semibold font-manrope hover:bg-teal-800 transition-colors">
                  {card.cta.text}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
