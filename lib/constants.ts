import { IMAGES } from "@/public/assests";

export const constants = {
  meta: {
    title: "Sleek - Weight Loss & Metabolic Health",
    description: "Science-backed weight loss and metabolic health management",
  },

  // Goals Section data
  goals: {
    title: "It’s time to reach your weight loss goals",
    subtitle:
      "We are your partner in lasting weight loss, with clinician-guided GLP-1 care that keeps real results within reach.",
    features: [
      { text: "GLP-1 medication access", icon: IMAGES.INSIGHT_ICON },
      { text: "Round-the-clock support", icon: IMAGES.LOCK_ICON },
      { text: "Online provider visits", icon: IMAGES.PACKAGE_ICON },
      { text: "Free overnight delivery", icon: IMAGES.TROPHY_ICON },
    ],
    featuresDescription:
      "After 68 weeks, participants administering once-weekly semaglutide treatment experienced an average of 15% reduction in body weight.The mean change in body weight from baseline to week 68 was −14.9% in the semaglutide group as compared with −2.4% with placebo.Source",
    image: IMAGES.GOALS_BG_IMG,
    subHeading: "It’s not willpower, it’smetabolic science",
    subDescription:
      "Lose up to 14.9% of your body weight in three simple steps",
    benefits: [
      {
        icon: "01",
        title: "Sign up",
        description:
          "Answer a few quick health questions. It takes about five minutes.",
      },
      {
        icon: "02",
        title: "Get prescribed",
        description:
          "A licensed provider reviews your intake after checkout to confirm you’re a good fit.",
      },
      {
        icon: "03",
        title: "Get your GLP-1",
        description:
          "Once you’re approved, your medication ships straight to your door overnight.",
      },
    ],
    cta: { text: "see if you qualify", href: "#" },
  },

  focusOnYou: {
    cards: [
      {
        title: "Focus on",
        secondTitle: "all of you",
        description:
          "We only prescribes trusted medication that has been rigorously tested for quality and safety. ",
        image: IMAGES.FOCUS_ON_YOU_ONE,
        cta: { text: "get started", href: "#" },
      },
      {
        title: "Easily manage",
        secondTitle: "treatments",
        description:
          "Our team is always available to support our members, day and night.",
        image: IMAGES.FOCUS_ON_YOU_TWO,
        cta: { text: "get started", href: "#" },
      },
      {
        title: "Doctor-trusted",
        secondTitle: "medications",
        description:
          "We only prescribes trusted medication that has been rigorously tested for quality and safety.",
        image: IMAGES.FOCUS_ON_YOU_THREE,
        cta: { text: "get started", href: "#" },
      },
      {
        title: "Access to ",
        secondTitle: "the experts always",
        description:
          "Every plan comes with 24/7 access to our medical team, to answer any questions or concerns you may have.",
        image: IMAGES.FOCUS_ON_YOU_FOUR,
        cta: { text: "get started", href: "#" },
      },
    ],
    bottomText1: `Compounded drugs are not FDA-approved or evaluated for safety, effectiveness, or quality by the FDA. \n Product images are illustrative and the actual product received may differ in appearance.`,
    bottomText2:
      "Paid testimonials. Before and after images shared by customers. Customers' results have not been independently verified. Individual results may vary. Weight Loss is a holistic program that includes nutrition support, technological tools, and compounded medication based on what your provider determines is best for you, along with a reduced calorie diet and exercise. Stopping treatment has been shown to result in weight regain.",
  },

  // A Plan Made Around Your Body
  personalizedPlan: {
    title: "A plan made around your body",
    subtitle:
      "No two bodies are the same, so we created personalized health plans that are unique to you and also backed by our world-class team of experts",
    quote:
      "I had so many health concerns that I thought were unrelated, but after losing weight with, they improved dramatically. The process was simple and the results have been life-changing.",
    author: "Jessica, Member",
    bgImage: IMAGES.PERSONALIZED_PLAN_BG,
    overlayImage: IMAGES.PERSONALIZED_PLAN_OVERLAY,
    cta: { text: "get started", href: "#" },
    details: [
      { label: "Name", value: "Jessica" },
      { label: "Age", value: "42" },
      { label: "Weight", value: "248 lbs" },
      { label: "Goal", value: "180 lbs" },
      { label: "History", value: "Sleep Apnea" },
      { label: "Compounded Semaglutide", value: "1.5 mg" },
      { label: "Protein", value: "120-160 g / day" },
      { label: "Blood Pressure", value: "Elevated" },
      { label: "Daily Calories", value: "1,400 / 1,800" },
    ],
  },

  // Weight Loss Without Guesswork
  glp1Solution: {
    title: "Weight loss without the guesswork",
    subtitle:
      "Our GLP-1 plans are built for real, lasting change, helping members lose an average of 15-20% of their body weight.",
    description:
      "Real clinicians are here around the clock to support you at every step. Whenever a question or concern comes up, someone who knows your plan is ready to help.",
    phoneImage: IMAGES.MOBILE_DEMO,
    benefits: [
      { icon: IMAGES.CLOCK_ICON, title: "FREE overnight shipping" },
      { icon: IMAGES.TROPHY_ICON, title: "GLP programming" },
      {
        icon: IMAGES.PRESCRIPTION_ICON,
        title: "Thousands of prescriptions written",
      },
      {
        icon: IMAGES.HEART_ICON,
        title: "1: 20x average body weight reduction",
      },
    ],
    semiBEnefitsText1: "Real results, finally within reach.",
    semiBEnefitsText2:
      "We pair you with clinician-guided GLP-1 care, so the weight comes off and stays off.",
    cta: { text: "get started", href: "#" },
  },

  memberSections: {
    title: "Members victory stories",
    items: [
      {
        timeStart: "Month 1",
        timeEnd: "Month 5",
        text: "“Nervous to even begin, but it made the process feel doable from day one. I'm driven and my confidence has never been higher.”",
        image: IMAGES.MEMBER_ONE,
        name: "Jasmine, 29",
      },
      {
        timeStart: "Month 1",
        timeEnd: "Month 12",
        text: "“At my last checkup my doctor was genuinely worried about me. One year with it later, I’ve lost 95 lbs and my bloodwork is finally back in a healthy range.”",
        image: IMAGES.MEMBER_TWO,
        name: "Carla, 52",
      },
      {
        timeStart: "Month 1",
        timeEnd: "Month 7",
        text: "“Between a full-time job and three kids, I never made time for myself. it fit into my life instead of taking it over, and seven months later I’m 63 lbs lighter.”",
        image: IMAGES.MEMBER_THREE,
        name: "Tanya, 38",
      },
    ],
  },

  // Members Victory Stories
  testimonials: {
    title: "Members victory stories",
    items: [
      {
        id: "month1",
        timeFrame: "Month 1",
        monthLabel: "Month 1",
        monthEnd: "Month 5",
        before: "/testimonial-1-before.png",
        after: "/testimonial-1-before.png",
        text: "Nervous to even begin, but it made the process feel doable from day one. I'm driven and my confidence has never been higher.",
        name: "Jasmine",
        age: 29,
        dot: "🟡",
      },
      {
        id: "month5",
        timeFrame: "Month 5",
        monthLabel: "Month 1",
        monthEnd: "Month 12",
        before: "/testimonial-2-before.png",
        after: "/testimonial-2-before.png",
        text: "At my last checkup my doctor was genuinely worried about me. One year with it later, I've lost 35 lbs and my bloodwork is finally back in a healthy range!",
        name: "Carla",
        age: 52,
        dot: "🟡",
      },
      {
        id: "month7",
        timeFrame: "Month 7",
        monthLabel: "Month 1",
        monthEnd: "Month 7",
        before: "/testimonial-3-before.png",
        after: "/testimonial-3-before.png",
        text: "Between a full-time job and three kids I made time for myself. It fit into my life I taking it over, and seven months later I'm taking it over and talking about it being I being I taking it over.",
        name: "Tanya",
        age: 38,
        dot: "🔵",
      },
    ],
  },
};

export type constants = typeof constants;
