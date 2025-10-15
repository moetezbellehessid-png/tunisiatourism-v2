import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/tunis-medina-with-white-buildings-and-blue-doors--.jpg" alt="Tunis Medina" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance animate-fade-in-up">
          Discover Tunisia
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto text-balance animate-fade-in-up animation-delay-200">
          Where Ancient History Meets Mediterranean Beauty
        </p>
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          <h2 className="font-serif text-3xl md:text-4xl text-accent mb-4">Tunis</h2>
          <p className="text-lg text-white/80 text-pretty leading-relaxed">
            Begin your journey in Tunis, the vibrant capital where the ancient Medina's winding alleys reveal centuries
            of history. Explore world-class museums, experience the lively café culture, and immerse yourself in the
            authentic heart of Tunisia.
          </p>
        </div>

        <a
          href="#carthage"
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors animate-fade-in-up animation-delay-600"
        >
          <span className="text-lg">Explore More</span>
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
