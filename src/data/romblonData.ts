import {
  Destination,
  TourPackageExperience,
  ItineraryDaySchedule,
  CoreValue,
  LocalCraftItem
} from '../types';

import sandbarImg from '../assets/images/hero_romblon_sandbar_1791125416688.jpg';
import marbleArtisanImg from '../assets/images/romblon_marble_artisan_1791125431921.jpg';
import guitingMountainImg from '../assets/images/sibuyan_guiting_mountain_1791125451795.jpg';
import islandBoatImg from '../assets/images/romblon_island_boat_1791125463932.jpg';
import craftsDecorImg from '../assets/images/romblon_crafts_decor_1791130808540.jpg';
import coastalCaveImg from '../assets/images/romblon_coastal_cave_1791130821688.jpg';

export const ROMBLON_ASSETS = {
  sandbar: sandbarImg,
  marbleArtisan: marbleArtisanImg,
  guitingMountain: guitingMountainImg,
  islandBoat: islandBoatImg,
  craftsDecor: craftsDecorImg,
  coastalCave: coastalCaveImg,
};

export const DESTINATIONS: Destination[] = [
  {
    number: '01',
    id: 'bonbon-beach',
    name: 'Bonbon Beach',
    island: 'Romblon Island',
    category: 'Beach & Sandbar',
    highlight: 'Walk across a pristine white sandbar stretching into turquoise shallows.',
    shortDescription: 'Famed for its kilometer-long curving sandbar connecting mainland Romblon to uninhabited Bang-og Island at low tide.',
    fullDescription: 'Bonbon Beach is widely recognized as one of the premier beach landscapes in Romblon. Its signature white sandbar extends gracefully into calm turquoise waters of the Sibuyan Sea. Lined with leaning coconut palms and devoid of loud commercial noise, Bonbon provides serene swimming, sunset photography, and authentic island calm.',
    location: 'Barangay Lonos, Romblon Municipality',
    image: ROMBLON_ASSETS.sandbar,
    altText: 'Aerial view of Bonbon Beach white sandbar in Romblon',
    activities: [
      'Cross the natural sandbar to Bang-og Island during low tide',
      'Swim in bath-warm transparent turquoise shallows',
      'Capture cinematic golden hour sunset photography',
      'Relax under natural coastal palm shade'
    ],
    bestTime: 'November to May; cross during morning or late afternoon low tide.',
    travelTips: [
      'Check tide tables before crossing to ensure safe return.',
      'Wear reef shoes to protect against shell fragments.',
      'Pack out all trash and food containers.'
    ],
    mapCoords: { x: 55, y: 48 }
  },
  {
    number: '02',
    id: 'cobrador-island',
    name: 'Cobrador Island',
    island: 'Cobrador Island',
    category: 'Secluded Island',
    highlight: 'Crystal-clear waters, crushed-shell beaches, and coastal sea caves.',
    shortDescription: 'Also known as Naguso Island, boasting powdered shell shores, underwater caverns, and sea turtle reef corridors.',
    fullDescription: 'Located north of Romblon town, Cobrador Island offers an adventurous retreat with rugged limestone cliffs, rare crushed-coral sands, and natural sea caves carved by the waves. Its clear waters are home to nesting sea turtles and untouched fringing coral reefs.',
    location: 'Cobrador Island, Northern Romblon',
    image: ROMBLON_ASSETS.islandBoat,
    altText: 'Traditional bangka outrigger boat in turquoise water at Cobrador Island',
    activities: [
      'Snorkel above vibrant coral reef walls',
      'Explore coastal sea caves and rocky coves',
      'Spot wild sea turtles (pawikan) gliding in shallows',
      'Beachcomb along powdered shell shores'
    ],
    bestTime: 'February to June during calm sea conditions.',
    travelTips: [
      'Charter an accredited motorized bangka from Romblon Port.',
      'Bring your own mask and snorkel gear.',
      'Use certified reef-safe sunscreen.'
    ],
    mapCoords: { x: 58, y: 38 }
  },
  {
    number: '03',
    id: 'aglicay-beach',
    name: 'Aglicay Beach',
    island: 'Tablas Island',
    category: 'Scenic Coastal Cove',
    highlight: 'A scenic curved bay framed by rolling green hills and golden sands.',
    shortDescription: 'A picturesque resort cove on Tablas Island with panoramic hillside trails and gentle, swimmable coastal waters.',
    fullDescription: 'Nestled on the eastern coast of Tablas Island in Alcantara, Aglicay Beach combines white-sand shores with lush hillside terrain. A walking trail leads visitors up to a panoramic ridge overlooking the entire crescent cove and the Sibuyan Sea.',
    location: 'Alcantara, Tablas Island',
    image: ROMBLON_ASSETS.sandbar,
    altText: 'Picturesque curved cove and tropical hillside of Aglicay Beach',
    activities: [
      'Hike the hillside trail for panoramic bay views',
      'Swim in protected, calm coastal waters',
      'Relax under thatched seaside beach cabanas',
      'Enjoy fresh local seafood lunches'
    ],
    bestTime: 'October to June for calm seas and clear blue skies.',
    travelTips: [
      'Wear sturdy walking shoes if hiking the viewing hill.',
      'Accessible via tricycle or hired van from Odiongan.'
    ],
    mapCoords: { x: 32, y: 64 }
  },
  {
    number: '04',
    id: 'kuding-kuding-cave',
    name: 'Kuding-Kuding Cave',
    island: 'Tablas Island',
    category: 'Cave & Coastal Adventure',
    highlight: 'Cliff-side sea caves, natural tidal pools, and ocean plunge platforms.',
    shortDescription: 'A unique coastal geological formation in Ferrol where limestone caves meet crystalline swimming pools.',
    fullDescription: 'Located in Ferrol on Tablas Island, Kuding-Kuding Point features dramatic rock formations, a natural sea cave opening to the ocean, and bamboo pathways leading to cliff jumping platforms over transparent turquoise waters.',
    location: 'Ferrol, Tablas Island',
    image: ROMBLON_ASSETS.coastalCave,
    altText: 'Limestone sea caves and natural tidal swimming pools at Kuding-Kuding Point',
    activities: [
      'Jump from cliff diving platforms into clear sea water',
      'Explore natural cave chambers and tidal pools',
      'Walk along scenic bamboo bridge trails over coastal rocks',
      'Swim in natural enclosed sea caverns'
    ],
    bestTime: 'Mid-morning on sunny days when water clarity is highest.',
    travelTips: [
      'Wear water booties or rubber-soled aqua shoes for limestone rocks.',
      'Listen to local life guards before jumping.'
    ],
    mapCoords: { x: 23, y: 55 }
  },
  {
    number: '05',
    id: 'looc-marine-sanctuary',
    name: 'Looc Marine Sanctuary',
    island: 'Tablas Island',
    category: 'Marine Protected Area',
    highlight: 'A floating bamboo station in a protected bay surrounded by friendly fish.',
    shortDescription: 'A premier marine conservation success story where hundreds of colorful reef fish gather around a floating raft.',
    fullDescription: 'Situated inside the sheltered Looc Bay, this 48-hectare marine protected reserve is anchored by a floating bamboo platform. Visitors can feed, observe, and swim alongside hundreds of surgeonfish, snappers, and butterflyfish in clear waters.',
    location: 'Looc Bay, Looc, Tablas Island',
    image: ROMBLON_ASSETS.islandBoat,
    altText: 'Fish feeding and snorkeling at the Looc Marine Sanctuary floating platform',
    activities: [
      'Hand-feed fish from the floating wooden platform',
      'Snorkel through thriving coral restoration nurseries',
      'Ride a traditional non-motorized paddle boat to the raft',
      'Learn about municipal reef conservation efforts'
    ],
    bestTime: 'Year-round; mornings offer calmer waters inside the bay.',
    travelTips: [
      'Do not touch corals or step on shallow reef structures.',
      'Sanctuary fees support community fish warden patrols.'
    ],
    mapCoords: { x: 26, y: 68 }
  },
  {
    number: '06',
    id: 'cantingas-river',
    name: 'Cantingas River',
    island: 'Sibuyan Island',
    category: 'River & Eco-Wonder',
    highlight: 'One of the cleanest and clearest mountain rivers in the Philippines.',
    shortDescription: 'Sourced from the pristine slopes of Mt. Guiting-Guiting, featuring crystalline cold waters and river boulder pools.',
    fullDescription: 'Often awarded among the cleanest freshwater bodies in the nation, Cantingas River flows through the tropical rainforest of Sibuyan Island. With water so transparent you can see river gravel meters below, it features a diving platform and peaceful riverside picnic groves.',
    location: 'San Fernando, Sibuyan Island',
    image: ROMBLON_ASSETS.guitingMountain,
    altText: 'Clear emerald waters of Cantingas River on Sibuyan Island',
    activities: [
      'Swim in refreshingly cool, mountain-fed spring water',
      'Leap from wooden diving boards into deep boulder pools',
      'Picnic under riverside bamboo huts',
      'Learn about Sibuyan Island’s self-sustaining mini-hydro generator'
    ],
    bestTime: 'Midday when mountain water is delightfully refreshing.',
    travelTips: [
      'Bring snacks and drinks; remember to carry all trash back.',
      'Combine with tours of San Fernando or Cajidiocan.'
    ],
    mapCoords: { x: 76, y: 61 }
  },
  {
    number: '07',
    id: 'mt-guiting-guiting',
    name: 'Mt. Guiting-Guiting Area',
    island: 'Sibuyan Island',
    category: 'Mountain & Biodiversity',
    highlight: 'The dramatic sawtooth ridge of the “Galapagos of Asia”.',
    shortDescription: 'A globally renowned biodiversity sanctuary rising 2,058 meters above dense primary rainforest.',
    fullDescription: 'Mount Guiting-Guiting (often affectionately called G2) is the jagged crown of Sibuyan Island. Known for its knife-edge rocky ridges, it anchors one of the densest primary rainforest ecosystems on Earth with high endemism of birds, mammals, and plant species.',
    location: 'Magdiwang, Sibuyan Island',
    image: ROMBLON_ASSETS.guitingMountain,
    altText: 'Dramatic jagged sawtooth peaks of Mt. Guiting-Guiting rising over rainforest',
    activities: [
      'Trek lower biodiversity foothill trails with certified local guides',
      'Birdwatch for endemic Sibuyan wildlife',
      'Photograph the dramatic sawtooth ridges from valley viewpoints',
      'Visit the Mt. Guiting-Guiting Natural Park Protected Area Center'
    ],
    bestTime: 'January to May for clear mountain vistas and safer trails.',
    travelTips: [
      'Climbs to the summit strictly require PAMB permits and certified guides.',
      'Respect sacred conservation zones and local environmental bylaws.'
    ],
    mapCoords: { x: 74, y: 53 }
  },
  {
    number: '08',
    id: 'romblon-cathedral',
    name: 'Romblon Cathedral',
    island: 'Romblon Island',
    category: 'Historical Heritage',
    highlight: 'Centuries-old Spanish colonial church adorned with native marble craft.',
    shortDescription: 'St. Joseph Cathedral stands as Romblon’s historical and spiritual heart, built by Augustinian Recollects.',
    fullDescription: 'Constructed originally during the 17th century by Spanish Recollect missionaries, St. Joseph Cathedral features coral stone walls, antique wooden belfries, and intricately sculpted marble altars that showcase Romblon’s historic devotion and stonework.',
    location: 'Poblacion, Romblon Municipality',
    image: ROMBLON_ASSETS.marbleArtisan,
    altText: 'St. Joseph Cathedral and historic heritage stonework in Romblon Town',
    activities: [
      'Admire the Spanish-era coral stone facade and antique bell tower',
      'Inspect hand-carved Romblon marble altars and religious relics',
      'Stroll through the town plaza and historic town hall nearby',
      'Climb up to nearby Fort San Andres for harbor views'
    ],
    bestTime: 'Morning or late afternoon; particularly lively during town fiestas.',
    travelTips: [
      'Dress respectfully when entering the cathedral.',
      'Combine with a walking tour of Romblon Town Center.'
    ],
    mapCoords: { x: 53, y: 46 }
  },
  {
    number: '09',
    id: 'carabao-island',
    name: 'Carabao Island',
    island: 'Carabao Island (San Jose)',
    category: 'Island Escape',
    highlight: 'Powdery white sands, sea-cliff diving, and peaceful coastal horizons.',
    shortDescription: 'Located at the southernmost tip of Romblon, offering uncrowded beaches with powdery sand rivalling Boracay.',
    fullDescription: 'Carabao Island (Municipality of San Jose) is Romblon’s tranquil southern paradise. Boasting long stretches of powder-fine white sand, crystal-clear turquoise waters, and coastal cliff-jumping sites like Koding-Kuding and Said Beach, it offers secluded tropical bliss.',
    location: 'San Jose, Southern Romblon',
    image: ROMBLON_ASSETS.sandbar,
    altText: 'Powdery white sand beaches and turquoise sea at Carabao Island',
    activities: [
      'Lounge on uncrowded powdery white-sand beaches',
      'Cliff jump from dramatic coastal limestone ledges',
      'Motorbike around the gentle island roads',
      'Watch panoramic sunsets over the southern sea'
    ],
    bestTime: 'November to May for calm water crossings.',
    travelTips: [
      'Boats connect from Santa Fe on Tablas or Caticlan.',
      'Carry cash as ATM services are limited on the island.'
    ],
    mapCoords: { x: 25, y: 82 }
  }
];

export const TOUR_EXPERIENCES: TourPackageExperience[] = [
  {
    id: 'solo',
    number: '01',
    title: 'SOLO',
    tagline: 'Find your own rhythm.',
    targetTravelers: 'Solo explorers, photographers, digital nomads, and mindful backpackers seeking independent discovery.',
    description: 'Designed for independent travelers who cherish freedom, authentic local conversations, and peaceful spaces. Wander at your own pace from quiet sandbar shores to generational stone carvers’ workshops.',
    mainActivities: [
      'Self-paced morning walks along Bonbon Beach sandbar at low tide',
      'Hands-on marble chiseling trial with master artisans in Romblon Town',
      'Meditative river swim and photography at Cantingas River',
      'Town café hopping and quiet sunset journaling along Odiongan baywalk'
    ],
    featuredDestinations: ['Romblon Town', 'Bonbon Beach', 'Cantingas River', 'Odiongan'],
    duration: '3 Days / 2 Nights',
    vibe: 'Reflective, Flexible & Immersive'
  },
  {
    id: 'couple',
    number: '02',
    title: 'COUPLE',
    tagline: 'Make memories together.',
    targetTravelers: 'Couples, honeymooners, and partners looking for romance, intimacy, and unhurried coastal escapes.',
    description: 'A curated journey blending romantic seaside sunsets, private outrigger boat rides, candlelit coastal dining, and customized twin marble keepsakes made by local craftsmen.',
    mainActivities: [
      'Private sunset viewing from the scenic hillside deck of Aglicay Beach',
      'Secluded outrigger boat charter to Cobrador Island’s quiet coves',
      'Romantic waterfront dinners with fresh grilled seafood catch',
      'Personalized engraved marble souvenir crafted with your names'
    ],
    featuredDestinations: ['Aglicay Beach', 'Cobrador Island', 'Bonbon Beach', 'Romblon Harbor'],
    duration: '3 Days / 2 Nights',
    vibe: 'Romantic, Peaceful & Scenic'
  },
  {
    id: 'family',
    number: '03',
    title: 'FAMILY',
    tagline: 'Adventure for everyone.',
    targetTravelers: 'Multi-generational families, parents with young children, and elders seeking comfort and safety.',
    description: 'Safety-centered pacing featuring calm waters, educational marine encounters, comfortable transportation, and accessible heritage sites suitable for all ages.',
    mainActivities: [
      'Safe fish feeding from the floating bamboo platform at Looc Marine Sanctuary',
      'Gentle heritage walk through St. Joseph Cathedral and Fort San Andres',
      'Family beach picnic under shaded coconut groves at Bonbon Beach',
      'Interactive marble crafts viewing with kid-friendly demonstrations'
    ],
    featuredDestinations: ['Looc Marine Sanctuary', 'Romblon Town', 'Bonbon Beach', 'Odiongan'],
    duration: '3 Days / 2 Nights',
    vibe: 'Safe, Wholesome & Educational'
  },
  {
    id: 'barkada',
    number: '04',
    title: 'BARKADA',
    tagline: 'Bring your favorite people.',
    targetTravelers: 'Groups of friends, student travel squads, and adventure seekers seeking shared thrills.',
    description: 'High-energy island hopping, cliff jumping into sea caves, group boodle fights on banana leaves, and unforgettable nights discovering town culture together.',
    mainActivities: [
      'Thrilling cliff jumps and cave swimming at Kuding-Kuding Point',
      'Snorkeling races and beach sports at Cobrador Island',
      'Cold spring boulder plunges at Cantingas River on Sibuyan',
      'Night walks in Romblon town with street food and halo-halo feasts'
    ],
    featuredDestinations: ['Kuding-Kuding Cave', 'Cobrador Island', 'Cantingas River', 'Romblon Night Walk'],
    duration: '3 Days / 2 Nights',
    vibe: 'High-Energy, Adventurous & Social'
  }
];

export const ITINERARY_DAYS: ItineraryDaySchedule[] = [
  {
    day: 'DAY 01',
    dayNumber: 1,
    title: 'Arrival, Odiongan Welcome & Aglicay Sunset',
    subtitle: 'Begin your journey across the largest island of the province.',
    islandFocus: 'Tablas Island',
    mealNote: 'Welcome Lunch in Odiongan • Coastal Sunset Dinner',
    stayNote: 'Comfortable accredited overnight accommodation on Tablas Island',
    activities: [
      'Pickup at the rombloNatin main branch / arrival terminal',
      'Travel to Odiongan and meet your dedicated local tour coordinator',
      'Enjoy an authentic welcome lunch showcasing local island recipes',
      'Odiongan town tour, visiting municipal landmarks and heritage streetscapes',
      'Afternoon scenic transfer to the curved shores of Aglicay Beach',
      'Hilltop viewpoint walk and sunset photo session overlooking the Sibuyan Sea',
      'Seaside dinner featuring fresh catch-of-the-day',
      'Check-in and overnight accommodation'
    ]
  },
  {
    day: 'DAY 02',
    dayNumber: 2,
    title: 'Caves, Marine Sanctuary & the Pure Waters of Sibuyan',
    subtitle: 'From underwater marine reserves to mountain-fed mountain rivers.',
    islandFocus: 'Tablas Island → Sibuyan Island → Romblon Island',
    mealNote: 'Island Breakfast • Traditional Picnic Lunch • Town Dinner',
    stayNote: 'Heritage town accommodation in Romblon Municipality',
    activities: [
      'Hearty island breakfast and morning briefing',
      'Travel southward to Looc and visit Kuding-Kuding Cave for tidal exploration',
      'Board the paddle bangka to Looc Marine Sanctuary floating station for fish feeding & snorkeling',
      'Scenic maritime crossing toward Sibuyan Island, the “Galapagos of Asia”',
      'Swim in the crystal-clear waters of Cantingas River surrounded by rainforest',
      'Gaze upon the majestic sawtooth peaks of the Mt. Guiting-Guiting area',
      'Late afternoon boat transfer toward Romblon Island',
      'Check-in at Romblon Island accommodation',
      'Dinner and guided Romblon Town night walk along the harbor boulevard'
    ]
  },
  {
    day: 'DAY 03',
    dayNumber: 3,
    title: 'Historic Forts, Sandbar Crossing & Souvenir Trail',
    subtitle: 'Immerse in the marble capital, iconic sandbars, and homeward memories.',
    islandFocus: 'Romblon Island & Southern Sea',
    mealNote: 'Breakfast • Seafood Beach Lunch • Farewell Snacks',
    stayNote: 'Homeward departure assistance',
    activities: [
      'Morning Romblon town cultural heritage tour',
      'Visit the Spanish-era St. Joseph Cathedral with antique marble altars',
      'Climb the historic stone steps of Fuerza de San Andres fortress for panoramic bay views',
      'Excursion to Bonbon Beach to walk the iconic kilometer-long sandbar at low tide',
      'Island hop toward Cobrador Island and view southern Carabao Island coastal horizons',
      'Visit local marble artisan workshops for authentic souvenir shopping',
      'Coordinator debriefing, departure transfer assistance, and return journey'
    ]
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    number: '01',
    title: 'Sustainable Tourism',
    description: 'We prioritize environmental preservation, low-impact travel, and Leave No Trace principles to protect Romblon’s pristine ecosystems for future generations.',
    iconName: 'Leaf'
  },
  {
    number: '02',
    title: 'Community Empowerment',
    description: 'We collaborate directly with local boatmen, guides, homestay owners, and family enterprises to keep economic benefits within the island communities.',
    iconName: 'Users'
  },
  {
    number: '03',
    title: 'Cultural Pride',
    description: 'We celebrate and safeguard Romblon’s rich heritage—from ancient weaving traditions and centuries-old fortresses to world-famous marble artistry.',
    iconName: 'Award'
  },
  {
    number: '04',
    title: 'Authentic Experiences',
    description: 'We guide travelers toward genuine, unhurried encounters with nature, island folk, and traditional living rather than staged commercial attractions.',
    iconName: 'Compass'
  },
  {
    number: '05',
    title: 'Hospitality & Inclusivity',
    description: 'We welcome every visitor with genuine warmth, respectful care, and thoughtful pacing tailored for solo explorers, couples, families, and friend groups.',
    iconName: 'Heart'
  },
  {
    number: '06',
    title: 'Innovation & Creativity',
    description: 'We combine youth-driven digital accessibility with creative storytelling to promote Romblon’s islands responsibly on modern platforms.',
    iconName: 'Sparkles'
  }
];

export const LOCAL_CRAFTS: LocalCraftItem[] = [
  {
    number: '01',
    title: 'Marble Jewelry',
    category: 'Wearable Art & Accessories',
    description: 'Delicately cut, hand-shaped, and polished earrings, pendants, signet rings, and bracelets crafted from authentic Romblon marble. Each piece showcases natural veins and colors ranging from pearl white to Romblon rose pink.',
    material: 'Natural Native Romblon Marble',
    artisanStory: 'Sculpted by small-scale jewelers and lapidary artisans in Romblon Town who transform fine off-cuts from quarry blocks into wearable cultural treasures.',
    image: ROMBLON_ASSETS.craftsDecor
  },
  {
    number: '02',
    title: 'Marble Vases & Home Decorations',
    category: 'Architectural & Living Decor',
    description: 'Classic and minimalist home items including heavy mortar & pestles, turned bud vases, geometric bookends, decorative coasters, and commemorative tabletop sculptures.',
    material: 'Italian-grade solid Romblon Marble',
    artisanStory: 'Turned on traditional lathes and hand-buffed with volcanic pumice by generational craftsmen whose family workshops line the streets of Romblon municipality.',
    image: ROMBLON_ASSETS.marbleArtisan
  },
  {
    number: '03',
    title: 'Handwoven Products',
    category: 'Fiber & Heritage Weaving',
    description: 'Functional and stylish everyday accessories including buri totes, palm-leaf market baskets, woven beach mats, and pouches made using traditional weaving patterns.',
    material: 'Indigenous Buri, Pandan & Rattan Fibers',
    artisanStory: 'Handwoven by rural women artisans across Tablas and Banton islands, preserving age-old botanical weaving techniques that require zero synthetic plastics.',
    image: ROMBLON_ASSETS.craftsDecor
  }
];

export const TERMS_AND_CONDITIONS = {
  paymentPolicy: [
    'A 50% initial down payment of the total tour package cost is required to confirm and secure your reservation.',
    'The remaining 50% balance must be settled at least seven (7) days prior to the scheduled departure date.',
    'Failure to settle the full balance within the designated period may result in forfeiture of the reservation.'
  ],
  cancellationPolicy: [
    'Cancellations made more than fourteen (14) days prior to departure are eligible for a partial refund, subject to administrative fees and non-refundable deposits made to partner boatmen/accommodations.',
    'Cancellations made within 7 to 13 days of departure are subject to a 50% cancellation fee.',
    'Cancellations made less than 7 days prior to departure are non-refundable.',
    'In case of Coast Guard travel bans due to typhoons, storms, or severe weather conditions, bookings may be rescheduled without penalty to any mutually agreed future date.'
  ],
  travelRequirements: [
    'Guests must present a valid government-issued identification card (or passport for foreign guests) during registration.',
    'Mandatory municipal tourism registration and environmental fee compliance are enforced at designated ports of entry.',
    'Guests participating in water sports or cave adventures must sign the standard safety acknowledgment form.'
  ],
  responsibilityAndLiability: [
    'rombloNatin exercises due diligence in selecting accredited transport operators, boat charters, and accommodations.',
    'rombloNatin shall not be held liable for personal property loss, injuries resulting from guest negligence, or delays triggered by natural force majeure (typhoons, tidal closures, flight cancellations).',
    'Travelers are encouraged to secure personal travel and health insurance prior to travel.'
  ],
  itineraryChanges: [
    'Sea conditions in the Sibuyan Sea and Tablas Strait dictate outrigger boat navigation. rombloNatin and licensed boat captains reserve the right to alter route sequences or substitute destinations if weather poses a safety hazard.'
  ],
  guestConduct: [
    'Guests are required to uphold the Leave No Trace environmental code at all times: zero littering, no removing corals, shells, or cultural artifacts, and respectful behavior toward local communities and wildlife.'
  ]
};

export const CONTACT_INFO = {
  email: 'hellorombloNatin@gmail.com',
  telephone: '(042) 458-2619',
  facebook: 'facebook.com/rombloNatin',
  facebookUrl: 'https://facebook.com/rombloNatin',
  mainOffice: 'GD Plaza Novaliches',
  satelliteOffice: 'Odiongan Commercial Center, Tablas Island, Romblon',
  tagline: 'Romblon mo, Romblon niya, Romblon nating lahat.',
  mission: 'To connect conscious travelers with authentic Romblon experiences while safeguarding the environment, celebrating local heritage, and generating sustainable economic opportunities for local communities.',
  vision: 'To be the leading platform and champion of sustainable, community-centered tourism in Romblon, empowering local islanders and inspiring travelers to cherish the province’s natural and cultural wonders.'
};
