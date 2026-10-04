export interface Destination {
  number: string;
  id: string;
  name: string;
  island: string;
  category: string;
  highlight: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  image: string;
  altText: string;
  activities: string[];
  bestTime: string;
  travelTips: string[];
  mapCoords: { x: number; y: number };
}

export interface TourPackageExperience {
  id: string;
  number: string;
  title: string;
  tagline: string;
  targetTravelers: string;
  description: string;
  mainActivities: string[];
  featuredDestinations: string[];
  duration: string;
  vibe: string;
}

export interface ItineraryDaySchedule {
  day: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  activities: string[];
  islandFocus: string;
  mealNote: string;
  stayNote: string;
}

export interface CoreValue {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LocalCraftItem {
  number: string;
  title: string;
  category: string;
  description: string;
  material: string;
  artisanStory: string;
  image: string;
}

export interface TravelInquiry {
  fullName: string;
  email: string;
  contactNumber: string;
  travelType: string;
  preferredPackage: string;
  preferredDate: string;
  travelersCount: number;
  message: string;
}
