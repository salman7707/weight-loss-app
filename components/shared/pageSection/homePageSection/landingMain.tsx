import { FocusOnYouSection } from '@/components/shared/pageSection/homePageSection/focusOnYouSection';
import GLPPlanSection from '@/components/shared/pageSection/homePageSection/glpPlanSection';
import GoalSection from '@/components/shared/pageSection/homePageSection/goalSection';
import MembersStoriesSection from '@/components/shared/pageSection/homePageSection/membersStoriesSection';
import PersonalizedPlanSection from '@/components/shared/pageSection/homePageSection/personalizedPlanSection';


export default function LandingMainPage() {
    return (
        <main className="bg-white h-auto overflow-hidden">
            <PersonalizedPlanSection />
            <GLPPlanSection />
            <MembersStoriesSection />
            <FocusOnYouSection />
            <GoalSection />
        </main>
    );
}
