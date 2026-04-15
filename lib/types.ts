export type BusinessType =
  | "restaurant"
  | "gym"
  | "salon"
  | "cafe"
  | "clinic"
  | "studio"
  | "shop"
  | "agency";

export interface BusinessData {
  name: string;
  tagline: string;
  description: string;
  services: string[];
  location: string;
  email: string;
  phone: string;
  type: BusinessType;
  heroImage?: string;
}

export const DEFAULT_BUSINESS: BusinessData = {
  name: "Lumière Bistro",
  tagline: "Where every plate tells a story",
  description:
    "A cozy neighborhood bistro serving seasonal French cuisine crafted from locally-sourced ingredients. Reservations recommended.",
  services: [
    "Seasonal Tasting Menu",
    "Private Dining",
    "Wine Pairings",
    "Weekend Brunch",
  ],
  location: "142 Rose Street, Brooklyn, NY",
  email: "reservations@lumierebistro.com",
  phone: "(555) 214-8832",
  type: "restaurant",
};
