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
      { name: 'Anonymous', text: 'The digital divide is still huge. Rural areas are being left behind.', time: '2024-09-22T09:15:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Amazing progress in e-governance! Government services are now at fingertips.', time: '2024-09-23T11:20:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Still struggling with poor internet connectivity in tribal areas.', time: '2024-09-24T14:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Digital literacy programs have empowered many women in my community.', time: '2024-09-25T16:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Slow implementation and lack of proper infrastructure in remote villages.', time: '2024-09-26T09:10:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Excellent initiative for cashless economy and digital payments.', time: '2024-09-27T12:30:00Z', sentiment: 'positive' }
    ]
  },
  {
    id: 2,
    title: 'Make In India',
    image: makeInIndiaImg,
    description: 'Make in India is an initiative by the Government of India to make and encourage companies to develop, manufacture and assemble products made in India and incentivize dedicated investments into manufacturing.',
    comments: [
      { name: 'Anonymous', text: 'This has boosted local manufacturing. We need more focus on quality control.', time: '2024-09-19T16:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Implementation is poor. Too much bureaucracy and red tape.', time: '2024-09-20T12:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Fantastic growth in manufacturing sector! More jobs for local youth.', time: '2024-09-21T10:15:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Foreign companies are still preferred over Indian manufacturers.', time: '2024-09-22T13:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Great boost to MSMEs and startup ecosystem in manufacturing.', time: '2024-09-23T15:20:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Quality standards are still not matching international levels.', time: '2024-09-24T11:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Wonderful improvement in ease of doing business rankings.', time: '2024-09-25T14:10:00Z', sentiment: 'positive' }
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
      { name: 'Anonymous', text: 'Just a publicity stunt. Ground reality is different.', time: '2024-09-21T15:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Amazing transformation! Streets are cleaner and more toilets available.', time: '2024-09-22T08:30:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Still see garbage dumping in many areas. Enforcement is weak.', time: '2024-09-23T12:15:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Great initiative for women safety with more public toilets.', time: '2024-09-24T16:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Lack of maintenance of newly built toilets in rural areas.', time: '2024-09-25T10:20:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Excellent awareness campaigns changing people mindset about cleanliness.', time: '2024-09-26T14:35:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Corruption in toilet construction contracts is still rampant.', time: '2024-09-27T11:50:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 4,
    title: 'Pradhan Mantri Jan Dhan Yojana',
    image: janDhanImg,
    description: 'Pradhan Mantri Jan Dhan Yojana (PMJDY) is a national mission on financial inclusion to ensure access to financial services, namely, banking/ savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner.',
    comments: [
      { name: 'Anonymous', text: 'Opened my first bank account through this scheme. Very helpful!', time: '2024-09-19T10:15:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Banking services are still inaccessible in remote areas. Promises not kept.', time: '2024-09-20T14:20:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Perfect financial inclusion program! Now everyone has bank access.', time: '2024-09-21T09:30:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'ATMs are frequently out of cash in rural areas.', time: '2024-09-22T13:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Great success in bringing unbanked population into formal banking.', time: '2024-09-23T11:20:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Bank staff behavior is still poor towards Jan Dhan account holders.', time: '2024-09-24T15:10:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Wonderful initiative for direct benefit transfers and subsidy payments.', time: '2024-09-25T12:40:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Zero balance accounts have hidden charges that poor people face.', time: '2024-09-26T14:25:00Z', sentiment: 'negative' }
    ]
  },
  {
    id: 5,
    title: 'Skill India Mission',
    image: skillIndiaImg,
    description: 'The Skill India Mission aims to train over 40 crore people in India in different skills by 2022. It includes various initiatives of the government like "National Skill Development Mission", "National Policy for Skill Development and Entrepreneurship, 2015".',
    comments: [
      { name: 'Anonymous', text: 'Got a job after completing a course under this mission!', time: '2024-09-17T13:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Training quality is poor. Outdated curriculum and no job guarantee.', time: '2024-09-18T16:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Most training centers are just money-making scams.', time: '2024-09-19T11:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Excellent skill development programs helping youth become employable.', time: '2024-09-20T10:30:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Certificates issued are not recognized by many employers.', time: '2024-09-21T14:15:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Amazing practical training facilities and modern equipment available.', time: '2024-09-22T16:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'High dropout rates due to poor teaching quality and facilities.', time: '2024-09-23T09:20:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Great initiative linking skill training with industry requirements.', time: '2024-09-24T12:35:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Placement assistance is just on paper, no real job opportunities.', time: '2024-09-25T15:50:00Z', sentiment: 'negative' }
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
      { name: 'Anonymous', text: 'Long waiting times and poor service quality in empaneled hospitals.', time: '2024-09-18T14:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Fantastic healthcare coverage! Best scheme for poor families.', time: '2024-09-19T11:20:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Many procedures not covered, have to pay from pocket.', time: '2024-09-20T13:45:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Great relief for families who cannot afford private healthcare.', time: '2024-09-21T10:15:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Card verification process is complicated and time consuming.', time: '2024-09-22T15:30:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Wonderful initiative reducing medical bankruptcy of families.', time: '2024-09-23T12:45:00Z', sentiment: 'positive' },
      { name: 'Anonymous', text: 'Quality of treatment in government hospitals is still poor.', time: '2024-09-24T14:20:00Z', sentiment: 'negative' },
      { name: 'Anonymous', text: 'Excellent program providing dignity and healthcare access to all.', time: '2024-09-25T16:10:00Z', sentiment: 'positive' }
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