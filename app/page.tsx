import LandingMainPage from '@/components/shared/pageSection/homePageSection/landingMain';
import { Suspense } from 'react';


export default function Page() {
  return (
    <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
      <LandingMainPage />
    </Suspense>
  );
}
