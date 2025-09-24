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

export const schemesData = [
  {
    id: 1,
    title: 'Digital India',
    image: digitalIndiaImg,
    description: 'The Digital India programme is a flagship programme of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy. It aims to provide government services electronically by improving online infrastructure and by increasing Internet connectivity.',
    comments: [
      { name: 'Anonymous', text: 'Great initiative! Making services accessible is key.', time: '2024-09-20T10:30:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'The internet speed in my village has improved a lot.', time: '2024-09-21T14:15:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'The digital divide is still huge. Rural areas are being left behind.', time: '2024-09-22T09:15:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 2,
    title: 'Make In India',
    image: makeInIndiaImg,
    description: 'Make in India is an initiative by the Government of India to make and encourage companies to develop, manufacture and assemble products made in India and incentivize dedicated investments into manufacturing.',
    comments: [
      { name: 'Anonymous', text: 'This has boosted local manufacturing. We need more focus on quality control.', time: '2024-09-19T16:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Implementation is poor. Too much bureaucracy and red tape.', time: '2024-09-20T12:30:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 3,
    title: 'Swachh Bharat Mission',
    image: swachhBharatImg,
    description: 'Swachh Bharat Mission (SBM) or Clean India Mission is a country-wide campaign initiated by the Government of India in 2014 to eliminate open defecation and improve solid waste management. It is a restructured version of the Nirmal Bharat Abhiyan launched in 2009.',
    comments: [
      { name: 'Anonymous', text: 'My city is much cleaner now. Public participation is very important.', time: '2024-09-18T09:20:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Waste segregation needs to be implemented more strictly.', time: '2024-09-20T11:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Just a publicity stunt. Ground reality is different.', time: '2024-09-21T15:45:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 4,
    title: 'Pradhan Mantri Jan Dhan Yojana',
    image: janDhanImg,
    description: 'Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission on financial inclusion to ensure access to financial services, namely, banking/ savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.',
    comments: [
      { name: 'Anonymous', text: 'Opened my first bank account through this scheme. Very helpful!', time: '2024-09-19T10:15:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Banking services are still inaccessible in remote areas. Promises not kept.', time: '2024-09-20T14:20:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 5,
    title: 'Skill India Mission',
    image: skillIndiaImg,
    description: 'The Skill India Mission aims to train over 40 crore people in India in different skills by 2022. It includes various initiatives of the government like "National Skill Development Mission", "National Policy for Skill Development and Entrepreneurship, 2015".',
    comments: [
      { name: 'Anonymous', text: 'I got a job after completing a course under this mission!', time: '2024-09-17T13:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Training quality is poor. Outdated curriculum and no job guarantee.', time: '2024-09-18T16:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Most training centers are just money-making scams.', time: '2024-09-19T11:45:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 6,
    title: 'Ayushman Bharat',
    image: ayushmanBharatImg,
    description: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is a national public health insurance fund of the Government of India that aims to provide free access to health insurance coverage for low income earners in the country.',
    comments: [
      { name: 'Anonymous', text: 'Saved my family thousands in medical expenses. Thank you!', time: '2024-09-16T08:30:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Hospitals refuse to accept Ayushman cards. System is broken.', time: '2024-09-17T12:15:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Long waiting times and poor service quality in empaneled hospitals.', time: '2024-09-18T14:45:00Z', sentiment: 'negative' }
    ]
  }
];

export const carouselSlides = [
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