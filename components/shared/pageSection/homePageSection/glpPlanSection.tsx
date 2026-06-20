'use client';

import Image from 'next/image';
import { constants } from '@/lib/constants';

export default function GLPPlanSection() {
    const { glp1Solution } = constants;

    return (
        <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className='lg:w-[60%] w-full'>
                    <h2 className="text-[26px] leading-[100%] font-extrabold lg:text-[76.8px] lg:leading-[76.8px] lg:font-normal font-manrope lg:mb-8 mb-4 text-primary">
                        {glp1Solution.title}
                    </h2>
                    <p className="text-sm lg:text-[19.2px] font-medium lg:font-normal leading-[100%] lg:leading-[26.88px] text-primary font-manrope lg:w-[65%] w-full">
                        {glp1Solution.subtitle}
                    </p>
                    {glp1Solution.benefits.map((benefit, idx) => (
                        <div key={idx} className='flex lg:hidden items-center justify-start pt-[16px] gap-2 '>
                            <div className='flex items-center justify-center rounded-full w-[16px] h-[16px] bg-[var(--primary)]'>
                                <Image src={benefit.icon} width={14} height={14} alt={benefit.title} className='pl-[1.7px]' />
                            </div>
                            <p className="text-primary font-manrope text-[14px] leading-[100%] font-medium">{benefit.title}</p>
                        </div>
                    ))}
                    <p className="block lg:hidden text-primary font-manrope text-[14px] leading-[100%] font-medium pt-[16px]">{glp1Solution.description}</p>
                    <p className="block lg:hidden text-primary font-manrope text-[20px] leading-[23.52px] font-extrabold pt-[16px]">
                        {glp1Solution.semiBEnefitsText1}
                    </p>
                    <p className="block lg:hidden text-[#516B68] font-manrope text-[14px] leading-[100%] font-medium pt-[16px]">
                        {glp1Solution.semiBEnefitsText2}
                    </p>
                    <button className="flex items-center justify-center mt-6 bg-teal-700 text-white px-8 py-3 rounded-full font-semibold font-manrope hover:bg-teal-800 transition-colors lg:hidden block">
                        Get started
                    </button>
                </div>
                <div className="bg-gradient-to-b from-white via-[#16200A]/15 via-[#a9e462]/10 to-[#134E4A] rounded-b-2xl lg:flex justify-between h-[600px] hidden">

                    <div className='flex flex-col items-start justify-end gap-3 w-[35%] p-8 h-full'>
                        <p className="text-sm md:text-base text-white/95 font-manrope">
                            {glp1Solution.description}
                        </p>
                        <button className="mt-6 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold font-manrope hover:bg-teal-800 transition-colors">
                            {glp1Solution.cta.text}
                        </button>
                    </div>
                    <div className=' h-[700px] !-translate-y-28 translate-x-6'>
                        <Image
                            src={glp1Solution.phoneImage}
                            alt="GLP-1 solution phone"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover rounded-2xl lg:block hidden"
                            loading="lazy"
                        />
                    </div>
                    <div className='w-[35%] flex flex-col justify-end gap-3 p-8 h-full'>
                        {glp1Solution.benefits.map((benefit, idx) => (
                            <div key={idx} className='bg-[#21867F5C] h-[96px] rounded-2xl flex items-center justify-start p-[19.2px] gap-2'>
                                <div className='w-[55.2px] h-[55.2px] bg-white/40 flex items-center justify-center rounded-full'>
                                    <Image src={benefit.icon} width={20} height={20} alt={benefit.title} />
                                </div>
                                <p className="text-white font-manrope text-[19.2px] leading-[28.8px] font-medium">{benefit.title}</p>
                            </div>
                        ))}
                        <div className='mt-6'>
                            <p className="text-white/60 font-manrope text-[16.8px] leading-[23.52px] font-medium">
                                {glp1Solution.semiBEnefitsText1}
                            </p>
                            <p className="text-white/60 font-manrope text-[16.8px] leading-[23.52px] font-medium">
                                {glp1Solution.semiBEnefitsText2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
