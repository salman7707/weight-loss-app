import GLPPlanSection from '@/components/shared/pageSection/homePageSection/glpPlanSection';
import MembersStoriesSection from '@/components/shared/pageSection/homePageSection/membersStoriesSection';
import PersonalizedPlanSection from '@/components/shared/pageSection/homePageSection/personalizedPlanSection';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(() => import('@/components/sections/hero').then(mod => ({ default: mod.HeroSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const FocusOnYouSection = dynamic(() => import('@/components/sections/focus-on-you').then(mod => ({ default: mod.FocusOnYouSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

export default function Page() {
  return (
    <main className="bg-white overflow-hidden">
      {/* <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <HeroSection />
      </Suspense> */}

      {/* <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <FocusOnYouSection />
      </Suspense> */}

      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <PersonalizedPlanSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <GLPPlanSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <MembersStoriesSection />
      </Suspense>

      {/* <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <TestimonialsSection />
      </Suspense> */}
    </main>
  );
}
