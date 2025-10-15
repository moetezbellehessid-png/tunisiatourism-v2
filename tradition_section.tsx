"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, Shirt, Music } from "lucide-react"

export function TraditionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const traditions = [
    {
      icon: UtensilsCrossed,
      title: "Tunisian Cuisine",
      items: ["Couscous", "Brik", "Harissa", "Mint Tea", "Tajine", "Lablabi"],
      description:
        "Tunisian cuisine is a delicious fusion of Mediterranean, Arab, and Berber influences. The national dish, couscous, is traditionally served on Fridays with tender lamb and vegetables. Brik, a crispy pastry filled with egg and tuna, is a beloved street food. Harissa, the fiery chili paste, adds heat to countless dishes. No meal is complete without sweet mint tea, a symbol of hospitality. Other favorites include tajine (a hearty egg-based dish), lablabi (chickpea soup), and makroud (date-filled semolina cookies).",
      imageQuery: "traditional Tunisian food couscous brik harissa mint tea",
      additionalImages: [
        "Tunisian couscous with lamb and vegetables on traditional plate",
        "crispy brik pastry with egg and tuna Tunisian street food",
      ],
    },
    {
      icon: Shirt,
      title: "Traditional Dress",
      items: ["Jebba", "Safsari", "Chechia", "Fouta", "Barnous", "Kaftan"],
      description:
        "Traditional Tunisian clothing reflects centuries of cultural heritage. The jebba is an elegant long tunic worn by men on special occasions, often paired with a chechia (red felt hat). Women wear the safsari, a graceful white silk garment that drapes over the body. The fouta is a versatile striped cloth used as a towel or wrap. The barnous, a hooded wool cloak, keeps people warm in winter. Modern Tunisians blend these traditional pieces with contemporary fashion, especially during weddings and religious celebrations.",
      imageQuery: "traditional Tunisian clothing jebba safsari",
      additionalImages: [
        "Tunisian man wearing white jebba and red chechia traditional dress",
        "Tunisian woman in elegant safsari white silk garment",
      ],
    },
    {
      icon: Music,
      title: "Culture & Arts",
      items: ["Malouf Music", "Festivals", "Hospitality", "Calligraphy", "Pottery", "Storytelling"],
      description:
        "Tunisian culture is rich with artistic expression and warm hospitality. Malouf, the classical Andalusian music, fills cafes and celebrations with its haunting melodies. The country hosts vibrant festivals year-round, from the Carthage International Festival to local olive harvest celebrations. Tunisian hospitality is legendary—guests are treated like family and offered the best the house has to offer. Traditional crafts like pottery from Nabeul, intricate calligraphy, and colorful tilework showcase centuries of artistic mastery. Storytelling in cafes keeps ancient tales alive for new generations.",
      imageQuery: "Tunisian music festival culture celebration",
      additionalImages: [
        "traditional Tunisian malouf musicians playing oud and percussion",
        "colorful Tunisian pottery and ceramic crafts from Nabeul",
      ],
    },
  ]

  return (
    <section id="traditions" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Tunisian Traditions
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Immerse yourself in the rich tapestry of Tunisian culture, where ancient traditions blend seamlessly with
            modern life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => {
            const Icon = tradition.icon
            return (
              <Card
                key={tradition.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=400&query=${tradition.imageQuery}`}
                      alt={tradition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-4">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">{tradition.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tradition.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{tradition.description}</p>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {tradition.additionalImages.map((imageQuery, imgIndex) => (
                      <div key={imgIndex} className="relative h-32 rounded-lg overflow-hidden">
                        <img
                          src={`/.jpg?height=200&width=200&query=${imageQuery}`}
                          alt={`${tradition.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
