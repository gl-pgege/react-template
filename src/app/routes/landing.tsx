import type { Route } from "./+types/landing";
import { HeroSection } from "~/features/landing/components/hero-section";

export function loader() {
  return null;
}

export default function LandingPage() {
  return <HeroSection />;
}