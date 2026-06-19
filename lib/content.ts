/**
 * Centralized content for the entire application
 * Single source of truth for all text, headings, and copy
 */

import { IMAGES } from "@/public/assests";

export const content = {
  meta: {
    title: "Sleek - Weight Loss & Metabolic Health",
    description: "Science-backed weight loss and metabolic health management",
  },

  // Hero Section - It's time to reach your weight loss goals
  hero: {
    title: "It's time to reach your weight loss goals",
    subtitle:
      "We use proven behavioral science and medication options to help you succeed",
    features: [
      { text: "GLP-1 prescriptions", icon: "💊" },
      { text: "24/7 doctor support", icon: "👨‍⚕️" },
      { text: "In-app coaching", icon: "📱" },
      { text: "1-on-1 doctor visits", icon: "🏥" },
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8T2EGZb7EeC8OyX1FmhZLaTJcpHG6y.png",
    subHeading: "It's not willpower, it's metabolic science",
    benefits: [
      {
        icon: "1",
        title: "Sign up",
        description: "Take our health assessment in minutes",
      },
      {
        icon: "2",
        title: "Get prescribed",
        description: "Board-certified doctors review your case",
      },
      {
        icon: "3",
        title: "Get your GLP-1",
        description: "Medications shipped directly to you",
      },
    ],
    cta: { text: "get started", href: "#" },
  },

  // Focus on You - 4 Feature Cards (2x2 Grid)
  focusOnYou: {
    cards: [
      {
        id: "focus",
        title: "Focus on all of you",
        description:
          "We only prescribe treatments that have been approved by the FDA",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbF1PPFaMPdWkBvqgfbGLnmbam8nPl.png",
        cta: { text: "get started", href: "#" },
      },
      {
        id: "manage",
        title: "Easily manage treatments",
        description:
          "Our team is available to support our members every step of the way",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbF1PPFaMPdWkBvqgfbGLnmbam8nPl.png",
        cta: { text: "get started", href: "#" },
      },
      {
        id: "doctor",
        title: "Doctor-trusted medications",
        description:
          "We only prescribe treatments that have been approved by the FDA",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbF1PPFaMPdWkBvqgfbGLnmbam8nPl.png",
        cta: { text: "get started", href: "#" },
      },
      {
        id: "experts",
        title: "Access to the experts always",
        description:
          "Every plan comes with 24/7 access to our medical team to answer questions or concerns",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbF1PPFaMPdWkBvqgfbGLnmbam8nPl.png",
        cta: { text: "get started", href: "#" },
      },
    ],
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

export type Content = typeof content;
