'use client';

import Image from 'next/image';
import { constants } from '@/lib/constants';

export default function GoalSection() {
    const { goals } = constants;

    return (
        <section className="w-full text-white  mx-auto overflow-hidden mb-4">
            <div className="max-w-7xl mx-auto bg-teal-700 lg:rounded-3xl pt-12 pb-8 lg:py-20 px-4 lg:px-8 relative">
                {/* Header Section */}
                <div className=" lg:mb-12">
                    <h1 className="text-[27px] lg:text-[76.8px] leading-[100%] lg:leading-[76.8px] font-extrabold lg:font-normal font-manrope mb-4 test-start lg:text-center">
                        {goals.title}
                    </h1>
                    <p className="text-[14px] md:text-[21.6px] leading-[100%] lg:leading-[30.24px] font-normal text-white/90 font-manrope mb-6 text-start lg:text-center">
                        {goals.subtitle}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-3 mb-8 items-center justify-center mt-10">
                        {goals.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm">
                                <Image src={feature.icon} alt={feature.text} width={24} height={24} />
                                <span className="text-sm md:text-base font-manrope">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className='self-center lg:hidden flex items-center justify-center my-6 '>
                        <button className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold font-manrope hover:bg-gray-100 transition-colors">
                            {goals.cta.text}
                        </button>
                    </div>


                    <p className="text-base md:text-[16.8px] leading-[23.52px] font-normal text-white/60 font-manrope mb-6 text-center">
                        {goals.featuresDescription}
                    </p>
                </div>

                {/* goals constants - Flex Layout */}
                <div className="hidden lg:flex items-center justify-end">
                    {/* Image */}
                    <div className="absolute bottom-0 h-auto xl:-left-40 lg:-left-72 lg:block hidden">
                        <Image
                            src={goals.image}
                            alt="Weight loss goals"
                            width={950}
                            height={950}
                            className=""
                            priority
                        />
                    </div>

                    {/* Right constants */}
                    <div className="space-y-6 w-[50%] relative z-10">
                        <div>
                            <h2 className="text-2xl lg:text-[84.48px] leading-[84.48px] font-normal font-manrope mb-4">
                                {goals.subHeading}
                            </h2>
                            <h2 className="text-2xl lg:text-[23.76px] leading-[33.26px] font-normal font-manrope mb-4">
                                {goals.subDescription}
                            </h2>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-6">
                            {goals.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex  gap-4 items-start">
                                    <div className='w-[10%]'>
                                        <div className="w-[63px] h-[63px] rounded-full bg-[#F6FDFC] flex items-center justify-center text-black font-bold">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <div className='mt-4 w-[90%]'>
                                        <h3 className="font-semibold font-manrope text-[23.76px] leading-[33.26px]">{benefit.title}</h3>
                                        <p className="text-[18.48px] leading-[25.87px] text-white/80 font-manrope">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="mt-6 bg-white text-teal-700 px-8 py-3 rounded-full font-bold font-manrope hover:bg-gray-100 transition-colors">
                            {goals.cta.text}
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-center mt-6 px-4">
                {/* Right constants */}
                <div className="space-y-6 relative z-10">
                    <div>
                        <h2 className="text-[26px] text-primary leading-[100%] font-extrabold font-manrope mb-4">
                            {goals.subHeading}
                        </h2>
                        <h2 className="text-sm leading-[100%] text-[#516B68] font-medium font-manrope mb-4">
                            {goals.subDescription}
                        </h2>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-6">
                        {goals.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex bg-[#F3F8F7] gap-4 items-center p-4 rounded-2xl">
                                <div className='md:w-[10%] w-[20%]'>
                                    <div className="w-[63px] h-[63px] rounded-full bg-[#134E4A] flex items-center justify-center text-white font-bold">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <div className=' md:w-[90%] w-[80%]'>
                                    <h3 className="font-bold font-manrope text-[17px] text-primary leading-[100%]">{benefit.title}</h3>
                                    <p className="text-[13.5px] leading-[120%] text-[#516B68] font-manrope mt-1">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
