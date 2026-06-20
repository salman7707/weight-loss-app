'use client';

import Image from 'next/image';
import { constants } from '@/lib/constants';
import { IMAGES } from '@/public/assests';
import clsx from 'clsx';

export default function PersonalizedPlanSection() {
    const { personalizedPlan } = constants;

    return (
        <section className="w-full lg:bg-white bg-gray-50 py-0 lg:py-20 pt-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full relative">
                    {/* Left constants */}
                    <div className="space-y-6 lg:w-[80%]">
                        <div>
                            <h2 className="text-[26px] md:text-3xl lg:text-[76.8px] font-extrabold lg:font-normal leading-[100%] lg:leading-[76.8px] font-manrope mb-4 text-primary">
                                {personalizedPlan.title}
                            </h2>
                            <p className="text-[14px] md:text-lg lg:text-[21.6px] leading-[100%] lg:leading-[30.4px] text-secondary font-manrope">
                                {personalizedPlan.subtitle}
                            </p>
                        </div>


                        <div className='relative h-full'>
                            <Image
                                src={personalizedPlan.bgImage}
                                alt="Personalized plan body"
                                width={342}
                                height={300}
                                className="w-full h-full object-cover rounded-2xl lg:hidden block"
                                loading="lazy"
                            />
                        </div>

                        <div className='bg-white rounded-lg p-6 space-y-4 border border-[#E2ECEB] lg:hidden block'>
                            {personalizedPlan.details.map((detail, index) => (
                                <div key={index} className={clsx(
                                    'flex items-center justify-between h-[43px]',
                                    index !== personalizedPlan.details.length - 1 && 'border-b border-[#EEF3F2]'
                                )}>
                                    <p className='text-[#7C918F] font-medium text-[13px] leading-[100%]'>{detail.label}</p>
                                    <p className='text-secondary font-bold text-sm leading-[100%]'>{detail.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quote Section */}
                        <div className="py-4 lg:bg-transparent bg-[var(--primary)] rounded-lg lg:px-0 px-6">
                            <Image
                                src={IMAGES.QUOT_ICON}
                                alt="Personalized plan body"
                                width={12}
                                height={12}
                                className="w-[15px] h-auto lg:block hidden"
                                loading="lazy"
                            />
                            <p className="text-base lg:text-[28.8px] lg:text-secondary lg:font-bold font-medium text-white font-manrope mb-3 ">
                                {personalizedPlan.quote}
                            </p>
                            <p className="text-sm lg:text-[19.2px] leading-[21.12px] text-[#9FC7C2] lg:text-secondary font-manrope font-normal">
                                {personalizedPlan.author}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-6 bg-teal-700 text-white px-8 py-3 rounded-full font-semibold font-manrope hover:bg-teal-800 transition-colors lg:block hidden">
                            {personalizedPlan.cta.text}
                        </button>
                    </div>

                    <div className="relative h-full rounded-2xl bg-gray-200">
                        <div className="absolute -left-36 top-[15%] w-[321px] h-[643px] z-10 lg:block hidden">
                            <Image
                                src={personalizedPlan.overlayImage}
                                alt="Personalized plan body"
                                fill
                                className="w-auto h-auto"
                                loading="lazy"
                            />
                        </div>
                        <Image
                            src={personalizedPlan.bgImage}
                            alt="Personalized plan body"
                            fill
                            className="w-full h-full object-cover rounded-2xl lg:block hidden"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
