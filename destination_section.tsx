"use client"

import { useEffect, useRef, useState } from "react"

interface DestinationSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  imageQuery: string
  reverse?: boolean
}

export function DestinationSection({
  id,
  title,
  subtitle,
  description,
  imageQuery,
  reverse = false,
}: DestinationSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
          {/* Image */}
          <div className={`${reverse ? "md:order-2" : ""} ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
              <img
                src={`/.jpg?height=600&width=800&query=${imageQuery}`}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className={`${reverse ? "md:order-1" : ""} ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl text-accent font-medium mb-6">{subtitle}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
