export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Tunisian Flag */}
          <div className="relative w-40 h-24 rounded-lg overflow-hidden shadow-lg">
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              {/* Red background */}
              <rect width="1200" height="800" fill="#E70013" />
              {/* White circle */}
              <circle cx="600" cy="400" r="180" fill="white" />
              {/* Red crescent */}
              <circle cx="615" cy="400" r="150" fill="#E70013" />
              {/* White star */}
              <polygon
                points="580,320 595,370 648,370 605,402 620,452 580,420 540,452 555,402 512,370 565,370"
                fill="#E70013"
              />
            </svg>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-serif font-bold mb-2">Made with love from Tunisia 🇹🇳</p>
            <p className="text-sm text-primary-foreground/80">Discover the beauty, culture, and warmth of Tunisia</p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-primary-foreground/60 text-center">
            <p>© {new Date().getFullYear()} Discover Tunisia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
