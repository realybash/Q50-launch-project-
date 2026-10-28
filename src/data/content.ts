import { Testimonial, FAQItem, AdScript, LiveNotification } from '../types';

export const WHATSAPP_LINK = "https://chat.whatsapp.com/H4xcdHacrNVCCg3EHM72md?s=cl&p=a&mlu=4&ilr=4&iam=2";

export const IMAGES = {
  hero: "/src/assets/images/hero_q50_minna_1793207284705.jpg",
  testimonialIbrahim: "/src/assets/images/testimonial_ibrahim_1793207284367.jpg",
  testimonialBlessing: "/src/assets/images/testimonial_blessing_1793207285674.jpg",
  testimonialAbubakar: "/src/assets/images/testimonial_abubakar_1793207285310.jpg",
  venue: "/src/assets/images/minna_event_venue_1793207285676.jpg",
};

export const LAUNCH_DETAILS = {
  title: "Q50 PROJECT IS FINALLY IN MINNA!",
  subtitle: "The Financial Opportunity Everyone in Minna is Talking About - Be Among The First 50 To Join.",
  location: "Minna, Niger State",
  venue: "Online VIP WhatsApp Lounge + Live Hybrid Briefing in Minna",
  dateText: "Launching This Week",
  entryFee: "FREE (Limited to First 50 Registered Members)",
  claimedSlots: 36,
  totalSlots: 50,
};

export const BENEFITS = [
  {
    title: "Proven Wealth & Income Creation",
    description: "Learn actionable, high-yielding financial strategies designed specifically for young adults, workers, and entrepreneurs living in Minna.",
    icon: "TrendingUp",
    stat: "High Growth Potential"
  },
  {
    title: "1-on-1 Mentorship & Acceleration",
    description: "Get direct guidance from seasoned Nigerian leaders who have built sustainable financial assets and community networks.",
    icon: "ShieldCheck",
    stat: "Direct Mentorship"
  },
  {
    title: "Elite Niger State Network",
    description: "Join an exclusive circle of 50 ambitious individuals in Minna collaborating to build personal and collective wealth.",
    icon: "Users",
    stat: "Top 50 Members Only"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ibrahim Abubakar",
    role: "Tech Entrepreneur & Resident",
    location: "Bosso, Minna",
    avatar: IMAGES.testimonialIbrahim,
    quote: "When I first heard about Q50 Project in Minna, I thought it was like every other hype group. Joining the WhatsApp group changed my mindset entirely. The clarity and strategic roadmap provided in week 1 helped me scale my revenue exponentially!",
    verified: true,
    stars: 5,
    joinedDaysAgo: 3
  },
  {
    id: "2",
    name: "Blessing Okoro",
    role: "E-Commerce Merchant",
    location: "Tunga, Minna",
    avatar: IMAGES.testimonialBlessing,
    quote: "Being among the first 50 members in Minna gave me direct access to top mentors. The energy in the WhatsApp group is unbelievable. If you get a chance to claim one of the few remaining slots, do not hesitate for a second!",
    verified: true,
    stars: 5,
    joinedDaysAgo: 5
  },
  {
    id: "3",
    name: "Abubakar Usman",
    role: "Civil Servant & Investor",
    location: "Chanchaga, Minna",
    avatar: IMAGES.testimonialAbubakar,
    quote: "Minna has been waiting for an initiative like Q50. The financial education and strategic networking opportunities inside the group are priceless. It's 100% free but worth millions.",
    verified: true,
    stars: 5,
    joinedDaysAgo: 2
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is it really 100% Free to join?",
    answer: "Yes, joining the Q50 Project Minna WhatsApp Group and attending the launch session is completely free. However, access is strictly limited to the first 50 residents of Minna, Niger State."
  },
  {
    id: "faq-2",
    question: "Why only 50 people for Minna?",
    answer: "We focus on high-quality mentorship and active participation. Keeping the initial Minna batch to 50 members ensures everyone receives maximum attention, direct resources, and dedicated guidance."
  },
  {
    id: "faq-3",
    question: "What happens after I click 'JOIN WHATSAPP GROUP NOW'?",
    answer: "You will immediately be redirected to our official Q50 Minna VIP WhatsApp Group. Once inside, you will receive welcoming instructions, launch session schedules, and instant onboarding materials."
  },
  {
    id: "faq-4",
    question: "I live in Bosso / Tunga / FUTMinna area. Can I participate?",
    answer: "Absolutely! The Q50 Project is specifically designed for all residents across Minna and Niger State, including Bosso, Tunga, Mobil, Chanchaga, FUTMinna campus, Maitumbi, and surrounding areas."
  }
];

export const AD_SCRIPTS: AdScript[] = [
  {
    id: "script-1",
    platform: "Facebook / Instagram",
    title: "High-Converting Minna Target Ad",
    script: `🚨 MINNA RESIDENTS ATTENTION! 🚨

Something BIG is happening in Minna right now, and only 50 people will get early access!

The Q50 Project is officially launching in Minna, Niger State this week! 

If you live in Bosso, Tunga, Chanchaga, Maitumbi, or FUTMinna area and you want to build a secondary stream of income, grow your wealth, and connect with top visionaries... THIS IS FOR YOU.

Entry is 100% FREE, but strictly limited to the FIRST 50 PEOPLE to join our official WhatsApp group.

👉 Click the link below to claim your spot before the 50 slots fill up:
${WHATSAPP_LINK}

See you on the inside! 🔥`,
    targetAudience: "Location: Minna, Niger State (Radius 25km) | Age: 20-45 | Interests: Entrepreneurship, Business, Personal Growth, Investments"
  },
  {
    id: "script-2",
    platform: "WhatsApp Broadcast",
    title: "Urgent Direct Message Script",
    script: `Hello! Quick update for Minna residents 📌

The long-awaited Q50 Project is finally launching in Minna, Niger State!

It's a financial opportunity designed to mentor and empower 50 ambitious individuals with proven wealth blueprints and networking.

We currently have less than 15 slots left for the Minna batch. Entry is 100% FREE!

Join the official group here now:
${WHATSAPP_LINK}

Note: Once we hit 50 members, the group link will close automatically. Don't miss out! 🚀`,
    targetAudience: "WhatsApp Contacts, Local Niger State Status Viewers & Community Groups"
  },
  {
    id: "script-3",
    platform: "TikTok / Short Video",
    title: "Engaging 30-Second Video Script",
    script: `[VISUAL: Fast-paced text overlay over glowing black & gold graphics]

[HOOK - First 3 Seconds]: 
"If you live in Minna, Niger State, pause this video right now!"

[BODY]: 
"The Q50 Project is finally in Minna! People in Bosso and Tunga are already joining. It's a free initiative focused on financial growth, business mentorship, and building generational wealth."

[CALL TO ACTION]: 
"We are taking ONLY 50 people for the first Minna batch. Tap the link in bio or click below to join the WhatsApp group now before slots run out!"`,
    targetAudience: "TikTok & Reels video ad targeted to Minna, Bida, and Suleja audience"
  }
];

export const LIVE_NOTIFICATIONS: LiveNotification[] = [
  { id: "n1", name: "Usman S.", area: "Bosso, Minna", timeAgo: "1 min ago", slotNumber: 37 },
  { id: "n2", name: "Aisha M.", area: "Tunga, Minna", timeAgo: "3 mins ago", slotNumber: 38 },
  { id: "n3", name: "Kabu J.", area: "Chanchaga, Minna", timeAgo: "6 mins ago", slotNumber: 39 },
  { id: "n4", name: "Grace O.", area: "Mobil Area, Minna", timeAgo: "10 mins ago", slotNumber: 40 },
  { id: "n5", name: "Emmanuel K.", area: "FUTMinna, Minna", timeAgo: "14 mins ago", slotNumber: 41 },
];
