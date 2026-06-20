'use client';

import Image from 'next/image';
import { constants } from '@/lib/constants';
import { IMAGES } from '@/public/assests';

export default function MembersStoriesSection() {
    const { memberSections } = constants;

    return (
        <section className="w-full lg:bg-white bg-gray-50 py-0 lg:py-20 pt-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className='text-[26px] font-bold lg:text-[76.8px] leading-[100%] lg:leading-[76.8px] lg:font-normal text-center'>{memberSections.title}</h2>
                <div className='flex items-center justify-center mt-8'>
                    <Image src={IMAGES.TRUST_PILOT_ICON} alt="trust pilot" width={400} height={300} className='w-[134px] h-[33px]' />
                </div>

                {/* Desktop Grid - 3 columns */}
                <div className='hidden lg:grid lg:grid-cols-3 gap-8 mt-12'>
                    {memberSections.items.map((member, index) => (
                        <div key={index} className='flex flex-col items-center border border-[#F1F1F1] p-6 rounded-3xl'>
                            <div className='bg-[#D9E8E4] rounded-3xl py-[12.48px] px-[21.84px] flex items-center justify-center gap-[9.36px] w-auto'>
                                <div className='text-[14.98px] lg:text-[24.96px] leading-[148%]'>{member.timeStart}</div>
                                <Image src={IMAGES.ARROW_ICON} alt="Arrow" width={28} height={28} />
                                <div className='text-[14.98px] lg:text-[24.96px] leading-[148%]'>{member.timeEnd}</div>
                            </div>
                            <Image src={member.image} alt={`Member ${index + 1}`} width={400} height={400} className='w-[400px] h-[300px] mt-4 rounded-3xl' />
                            <p className='text-[14.98px] lg:text-[24.96px] leading-[152%] mt-4 text-center'>{member.text}</p>
                            <div className='flex items-center justify-center gap-2 mt-4'>
                                <Image src={IMAGES.SHIELD_TICK_ICON} alt="Shield Tick" width={24} height={24} />
                                <p className='text-[20px] font-bold text-[#646464]'>{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tablet & Mobile: Horizontal scroll */}
                <div className='lg:hidden mt-12 overflow-x-auto scrollbar-hide -mx-4 px-4'>
                    <div className='flex gap-4 md:gap-6 pb-4' style={{ scrollSnapType: 'x mandatory' }}>
                        {memberSections.items.map((member, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center border border-[#F1F1F1] p-6 rounded-3xl flex-shrink-0 
                                           w-[calc(100vw-32px)] 
                                           md:w-[calc((100vw-48px-24px)/2)]'
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                <div className='bg-[#D9E8E4] rounded-3xl py-[12.48px] px-[21.84px] flex items-center justify-center gap-[9.36px] w-auto'>
                                    <div className='text-[14.98px] leading-[148%]'>{member.timeStart}</div>
                                    <Image src={IMAGES.ARROW_ICON} alt="Arrow" width={28} height={28} />
                                    <div className='text-[14.98px] leading-[148%]'>{member.timeEnd}</div>
                                </div>
                                <Image src={member.image} alt={`Member ${index + 1}`} width={400} height={400} className='w-full h-[250px] mt-4 rounded-3xl object-cover' />
                                <p className='text-[14.98px] leading-[152%] mt-4 text-center px-2'>{member.text}</p>
                                <div className='flex items-center justify-center gap-2 mt-4'>
                                    <Image src={IMAGES.SHIELD_TICK_ICON} alt="Shield Tick" width={24} height={24} />
                                    <p className='text-[18px] font-bold text-[#646464]'>{member.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator dots */}
                <div className='hidden lg:flex items-center justify-center gap-2 mt-6 text-[16.8px] leading-[23.52px] text-[#1C191780]'>
                    <p>.Product images are illustrative and the actual product received may differ in appearance.</p>
                </div>
            </div>
        </section>
    );
}