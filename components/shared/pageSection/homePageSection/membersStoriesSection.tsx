'use client';

import Image from 'next/image';
import { content } from '@/lib/content';
import { IMAGES } from '@/public/assests';
import clsx from 'clsx';

export default function MembersStoriesSection() {
    const { memberSections } = content;

    return (
        <section className="w-full lg:bg-white bg-gray-50 py-0 lg:py-20 pt-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className='text-[26px] font-bold lg:text-[76.8px] leading-[100%] lg:leading-[76.8px] lg:font-normal text-center'>{memberSections.title}</h2>
                <div className='flex items-center justify-center mt-8'>
                    <Image src={IMAGES.TRUST_PILOT_ICON} alt="trust pilot" width={400} height={300} className='w-[134px] h-[33px]' />
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12'>
                    {memberSections.items.map((member, index) => (
                        <div className='flex flex-col items-center border border-[#F1F1F1] p-6 rounded-3xl'>
                            <div className='bg-[#D9E8E4] rounded-3xl py-[12.48px] px-[21.84px] flex items-center justify-center gap-[9.36px] w-auto'>
                                <div className='text-[24.96px] leading-[148%]'>{member.timeStart}</div>
                                <Image src={IMAGES.ARROW_ICON} alt="Member One" width={28} height={28} />
                                <div className='text-[24.96px] leading-[148%]'>{member.timeEnd}</div>
                            </div>
                            <Image src={member.image} alt="Member One" width={400} height={400} className='w-[400px] h-[300px] mt-4 rounded-3xl' />
                            <p className='text-[24.96px] leading-[152%] mt-4 text-center'>{member.text}</p>
                            <div className='flex items-center justify-center gap-2 mt-4'>
                                <Image src={IMAGES.SHIELD_TICK_ICON} alt="Shield Tick" width={24} height={24} />
                                <p className='text-[20px] font-bold text-[#646464]'>{member.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
