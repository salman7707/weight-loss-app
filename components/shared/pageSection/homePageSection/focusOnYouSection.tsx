'use client';

import Image from 'next/image';
import { constants } from '@/lib/constants';

export function FocusOnYouSection() {
    const { focusOnYou } = constants;

    return (
        <section className="w-full bg-[#14B8A60A] py-8 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid of 4 Cards - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-[1100px] mx-auto">
                    {focusOnYou.cards.map((card, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center justify-center border border-[#F1F1F1] lg:p-6  bg-white rounded-3xl">
                            <h3 className="lg:flex hidden text-xl lg:text-[43.2px] text-center text-primary font-medium font-manrope leading-5">
                                {card.title}
                            </h3>
                            <h3 className="lg:flex hidden text-xl lg:text-[43.2px] text-center font-medium font-manrope text-gray-900 mb-3">
                                {card.secondTitle}
                            </h3>
                            <p className="lg:flex hidden text-sm lg:text-[25.2px] text-center text-[#404040] font-manrope mb-6">
                                {card.description}
                            </p>
                            <div className='bg-gray-50 w-full rounded-t-3xl mb-4 lg:hidden'>
                                <div className="relative w-[300px] h-[300px] lg:bg-transparent mb-6 rounded-2xl overflow-hidden flex items-center justify-center mx-auto">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={600}
                                        height={600}
                                        className={"w-full h-full mx-auto rounded-2xl object-contain"}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <h3 className="lg:hidden font-extrabold text-[21px] text-start text-primary font-manrope w-full px-2">
                                {card.title} {card.secondTitle}
                            </h3>
                            <p className="lg:hidden text-sm lg:text-[25.2px] text-left px-2 w-full text-[#404040] font-manrope mb-6">
                                {card.description}
                            </p>
                            <div className=" hidden relative w-[300px] h-[300px] lg:bg-transparent mb-6 rounded-2xl overflow-hidden lg:flex items-center justify-center mx-auto">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={600}
                                    height={600}
                                    className={"w-full h-full mx-auto rounded-2xl object-contain"}
                                    loading="lazy"
                                />
                            </div>

                            {/* CTA Button */}
                            <button className="lg:self-center lg:w-auto w-[98%] bg-teal-700 text-white px-6 py-3 rounded-full font-semibold font-manrope hover:bg-teal-800 transition-colors lg:mx-0 mb-2">
                                {card.cta.text}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='max-w-[978px] mx-auto text-center mt-12 text-[16.8px] leading-[23.52px] text-[#1C191780] lg:block hidden'>
                    <p>{focusOnYou.bottomText1}</p>
                    <p>{focusOnYou.bottomText2}</p>
                </div>
            </div>
        </section>
    );
}
