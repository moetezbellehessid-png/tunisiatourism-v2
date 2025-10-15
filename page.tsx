import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { DestinationSection } from "@/components/destination-section"
import { TraditionsSection } from "@/components/traditions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      <DestinationSection
        id="carthage"
        title="Carthage"
        subtitle="Ancient Ruins by the Sea"
        description="Step back in time at the legendary ruins of Carthage, where ancient history meets the sparkling Mediterranean. Explore the remnants of a once-mighty civilization, from the Antonine Baths to the Byrsa Hill, all overlooking breathtaking coastal views."
        imageQuery="ancient Carthage ruins overlooking Mediterranean sea, Tunisia"
        reverse={false}
      />

      <DestinationSection
        id="sousse"
        title="Sousse"
        subtitle="Beautiful Beaches & Vibrant Medina"
        description="Discover the perfect blend of relaxation and culture in Sousse. Bask on golden beaches, wander through the UNESCO-listed Medina with its bustling souks, and explore the impressive Ribat fortress that has stood guard over the city for centuries."
        imageQuery="Sousse beach and medina, Tunisia coastal city"
        reverse={true}
      />

      <DestinationSection
        id="nabeul"
        title="Nabeul"
        subtitle="City of Pottery & Crafts"
        description="Experience the artistic heart of Tunisia in Nabeul, renowned for its exquisite pottery and traditional crafts. Watch skilled artisans at work, browse colorful ceramics in the Friday market, and take home a piece of Tunisian heritage."
        imageQuery="traditional Tunisian pottery and ceramics in Nabeul"
        reverse={false}
      />

      <DestinationSection
        id="tozeur"
        title="Tozeur"
        subtitle="Gateway to the Sahara"
        description="Enter a world of golden dunes and lush oases in Tozeur. Marvel at the distinctive brick architecture, explore palm-filled oases, and venture into the vast Sahara Desert for an unforgettable adventure under endless skies."
        imageQuery="Tozeur oasis with traditional brick architecture and Sahara desert, Tunisia"
        reverse={true}
      />

      <TraditionsSection />

      <Footer />
    </main>
  )
}
