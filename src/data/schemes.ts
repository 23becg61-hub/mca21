import { Scheme, CarouselSlide } from '@/types';

// Import all scheme images
import digitalIndiaImg from '@/assets/digital-india.jpg';
import makeInIndiaImg from '@/assets/make-in-india.jpg';
import swachhBharatImg from '@/assets/swachh-bharat.jpg';
import janDhanImg from '@/assets/jan-dhan.jpg';
import skillIndiaImg from '@/assets/skill-india.jpg';
import ayushmanBharatImg from '@/assets/ayushman-bharat.jpg';

// Import banner images
import banner1 from '@/assets/banner-1.jpg';
import banner2 from '@/assets/banner-2.jpg';
import banner3 from '@/assets/banner-3.jpg';

// Enhanced static comments for realistic feedback simulation
// Comments are balanced but slightly more negative to reflect real-world feedback patterns
export const schemesData: Scheme[] = [
  {
    id: 1,
    title: 'Digital India',
    image: digitalIndiaImg,
    description: 'The Digital India programme is a flagship programme of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy. It aims to provide government services electronically by improving online infrastructure and by increasing Internet connectivity.',
    comments: [
      { name: 'Ramesh Kumar', text: 'The online portal has made document verification much faster for my business registration.', time: '2024-09-20T10:30:00Z', sentiment: 'positive' },
      { name: 'Priya Sharma', text: 'Internet connectivity has improved, but the digital literacy programs need more reach in rural areas.', time: '2024-09-21T14:15:00Z', sentiment: 'negative' },
      { name: 'Amit Singh', text: 'Digital payments have become easier, though some elderly people still struggle with the technology.', time: '2024-09-19T16:20:00Z', sentiment: 'positive' },
      { name: 'Kavita Rao', text: 'The JAM trinity concept is revolutionary for financial inclusion.', time: '2024-09-18T12:45:00Z', sentiment: 'positive' },
      { name: 'Rohit Gupta', text: 'Server downtime during peak hours is still a major issue for government websites.', time: '2024-09-22T09:15:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 2,
    title: 'Make In India',
    image: makeInIndiaImg,
    description: 'Make in India is an initiative by the Government of India to make and encourage companies to develop, manufacture and assemble products made in India and incentivize dedicated investments into manufacturing.',
    comments: [
      { name: 'Ankit Jain', text: 'Local manufacturing has increased, but quality standards need consistent monitoring across sectors.', time: '2024-09-19T16:45:00Z', sentiment: 'negative' },
      { name: 'Neeta Patel', text: 'My textile unit received good support through this initiative, employment has increased locally.', time: '2024-09-20T11:30:00Z', sentiment: 'positive' },
      { name: 'Vishal Mehta', text: 'Foreign companies are setting up plants, but technology transfer is limited in many cases.', time: '2024-09-21T14:20:00Z', sentiment: 'negative' },
      { name: 'Sanjay Kumar', text: 'The single-window clearance system has reduced bureaucratic delays significantly.', time: '2024-09-18T10:15:00Z', sentiment: 'positive' }
    ]
  },
  {
    id: 3,
    title: 'Swachh Bharat Mission',
    image: swachhBharatImg,
    description: 'Swachh Bharat Mission (SBM) or Clean India Mission is a country-wide campaign initiated by the Government of India in 2014 to eliminate open defecation and improve solid waste management. It is a restructured version of the Nirmal Bharat Abhiyan launched in 2009.',
    comments: [
      { name: 'Sunita Devi', text: 'Public toilets have been built in our area, but maintenance is inconsistent.', time: '2024-09-18T09:20:00Z', sentiment: 'negative' },
      { name: 'Vijay Singh', text: 'Waste segregation awareness has increased, though implementation varies by locality.', time: '2024-09-20T11:30:00Z', sentiment: 'positive' },
      { name: 'Madhuri Sharma', text: 'The cleanliness drive during festivals has made a visible difference in our neighborhood.', time: '2024-09-19T15:45:00Z', sentiment: 'positive' },
      { name: 'Rajesh Pandey', text: 'Waste collection trucks often miss scheduled pickups, causing accumulation problems.', time: '2024-09-21T08:30:00Z', sentiment: 'negative' },
      { name: 'Geeta Nair', text: 'School children are more aware about cleanliness now, which is encouraging.', time: '2024-09-17T13:20:00Z', sentiment: 'positive' },
      { name: 'Mukesh Jha', text: 'Open defecation has reduced dramatically in rural areas, but urban slums still face challenges.', time: '2024-09-22T16:10:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 4,
    title: 'Pradhan Mantri Jan Dhan Yojana',
    image: janDhanImg,
    description: 'Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission on financial inclusion to ensure access to financial services, namely, banking/ savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.',
    comments: [
      { name: 'Lakshmi Devi', text: 'Bank account opening became much easier, no minimum balance requirement helps.', time: '2024-09-20T14:30:00Z', sentiment: 'positive' },
      { name: 'Ravi Shankar', text: 'Direct benefit transfers reach faster now, but ATM availability in villages is still limited.', time: '2024-09-19T10:15:00Z', sentiment: 'negative' },
      { name: 'Meera Singh', text: 'The RuPay card provides good cashless transaction options.', time: '2024-09-21T12:45:00Z', sentiment: 'positive' },
      { name: 'Kiran Yadav', text: 'Financial literacy programs helped me understand banking better.', time: '2024-09-18T16:20:00Z', sentiment: 'positive' },
      { name: 'Prakash Tiwari', text: 'Account maintenance fees are waived, but transaction charges at some ATMs discourage usage.', time: '2024-09-22T11:10:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 5,
    title: 'Skill India Mission',
    image: skillIndiaImg,
    description: 'The Skill India Mission aims to train over 40 crore people in India in different skills by 2022. It includes various initiatives of the government like "National Skill Development Mission", "National Policy for Skill Development and Entrepreneurship, 2015".',
    comments: [
      { name: 'Aarav Patel', text: 'Completed electrician course and got placement assistance, now earning well.', time: '2024-09-17T13:45:00Z', sentiment: 'positive' },
      { name: 'Sneha Reddy', text: 'Training quality varies significantly between different centers and instructors.', time: '2024-09-19T15:30:00Z', sentiment: 'negative' },
      { name: 'Manish Kumar', text: 'The certification is recognized by many employers, which helps in job interviews.', time: '2024-09-20T09:20:00Z', sentiment: 'positive' },
      { name: 'Pooja Agarwal', text: 'Digital marketing course was comprehensive, but more practical projects would be helpful.', time: '2024-09-21T14:10:00Z', sentiment: 'negative' },
      { name: 'Rahul Verma', text: 'Skill development centers need better infrastructure and updated equipment.', time: '2024-09-18T11:45:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 6,
    title: 'Ayushman Bharat',
    image: ayushmanBharatImg,
    description: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is a national public health insurance fund of the Government of India that aims to provide free access to health insurance coverage for low income earners in the country.',
    comments: [
      { name: 'Savita Kumari', text: 'Health and wellness centers in our village provide basic healthcare closer to home.', time: '2024-09-20T10:45:00Z', sentiment: 'positive' },
      { name: 'Deepak Sharma', text: 'Insurance claim process is complex and many hospitals are not aware of the procedures.', time: '2024-09-19T16:30:00Z', sentiment: 'negative' },
      { name: 'Anita Joshi', text: 'Free medicines availability has improved in government hospitals.', time: '2024-09-21T13:15:00Z', sentiment: 'positive' },
      { name: 'Manoj Singh', text: 'Coverage amount is helpful for major surgeries, saved significant money for my family.', time: '2024-09-18T14:20:00Z', sentiment: 'positive' },
      { name: 'Rekha Patel', text: 'Card verification at hospitals takes too long, causing delays in emergency treatments.', time: '2024-09-22T08:50:00Z', sentiment: 'negative' },
      { name: 'Suresh Gupta', text: 'Health checkup camps organized regularly help in early disease detection.', time: '2024-09-17T15:30:00Z', sentiment: 'positive' }
    ]
  }
];

export const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    image: banner1,
    title: 'Digital Transformation for Every Citizen',
    description: 'Empowering India through technology and digital governance initiatives'
  },
  {
    id: 2,
    image: banner2,
    title: 'Building Modern Infrastructure',
    description: 'Creating sustainable development across rural and urban areas'
  },
  {
    id: 3,
    image: banner3,
    title: 'Inclusive Growth for All',
    description: 'Government schemes ensuring no one is left behind in India\'s progress'
  }
];