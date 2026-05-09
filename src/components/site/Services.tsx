import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "AI Video Ads",
    description:
      "High-quality AI-generated videos for brands, reels, ads, and storytelling.",
  },
  {
    title: "Reels & Shorts",
    description:
      "Short-form motion with cinematic polish, optimized for social engagement.",
  },
  {
    title: "Digital Marketing",
    description:
      "Creative campaigns, content strategy, and performance-focused marketing for businesses.",
  },
  {
    title: "Brand Campaigns",
    description:
      "Story-led launches and brand campaigns designed to capture attention.",
  },
  {
    title: "Product Promo Videos",
    description:
      "Product promos with cinematic motion and sharp narrative for maximum engagement.",
  },
  {
    title: "Hotel / School / Store Content",
    description:
      "Premium content for stores, hotels, schools, and local brands to grow online.",
  },
  {
    title: "Social Media Content",
    description:
      "Social-first content designed to convert, retain, and build brand buzz.",
  },
  {
    title: "Creative Strategy",
    description:
      "Strategy-led creative systems built for scalable launch, retainer, and growth campaigns.",
  },
];

const SHOWCASE_IMAGES = [
  {
    id: 1,
    title: "AI Genesis",
    image:
      "https://images.unsplash.com/photo-1532619187600-91f7a618da23?auto=format&fit=crop&w=1400&q=80",
    tag: "Futuristic",
  },
  {
    id: 2,
    title: "Consciousness Rising",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    tag: "AI Visuals",
  },
  {
    id: 3,
    title: "Neon Future",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
    tag: "Cyberpunk",
  },
  {
    id: 4,
    title: "Sacred Tech",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    tag: "Digital Art",
  },
  {
    id: 5,
    title: "Digital Apocalypse",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
    tag: "Sci-Fi",
  },
  {
    id: 6,
    title: "Genesis Awakening",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    tag: "Future",
  },
];

export default function Services() {
  const root = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!isMobile) {
        gsap.from(".svc-card", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });

        gsap.from(".showcase-img", {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".showcase-section", start: "top 70%" },
        });
      } else {
        // Keep all cards visible on phones (no animation-dependent visibility).
        gsap.set(".svc-card, .showcase-img", {
          opacity: 1,
          y: 0,
          clearProps: "transform,opacity",
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">
            / Services
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-[#F6F1E8] sm:text-6xl">
            Content Systems For <br />
            Brands That Want <span className="text-[#F6E84A]">Attention</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base text-[#F6F1E8] sm:text-lg">
            We build fully managed content systems that combine AI video, social,
            and digital marketing so your brand can grow with consistent creative
            momentum.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              tabIndex={0}
              className="svc-card relative rounded-3xl border border-[#3B1C63] bg-[#12051F] p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-mono text-[#F6E84A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#8B5CFF]" />
              </div>
              <h3 className="text-xl font-medium text-[#F6F1E8]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#F6F1E8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Showcase Section */}
        <div className="showcase-section mt-12">
          <div className="mb-6">
            <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">
              / Visual Showcase
            </p>
            <h3 className="text-3xl font-semibold text-[#F6F1E8] sm:text-4xl">
              Cutting-Edge <span className="text-[#F6E84A]">AI Content</span> Delivered
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE_IMAGES.map((item, index) => (
              <div
                key={item.id}
                className="showcase-img group relative overflow-hidden rounded-2xl border border-[#3B1C63] bg-[#12051F] min-h-[220px] sm:min-h-0 sm:aspect-video cursor-pointer transition-all duration-500 hover:border-[#F6E84A]"
                onMouseEnter={() => setHoveredImage(item.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />

                {/* Keep mobile images fully visible without dimming */}
                <div className="absolute inset-0 z-10 hidden sm:block bg-gradient-to-t from-[#12051F] via-[#12051F] to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-start justify-between p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#12051F] px-3 py-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#F6E84A] font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-[#F6F1E8] group-hover:text-[#F6E84A] transition">
                      {item.title}
                    </h4>
                    <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#F6F1E8] group-hover:text-[#F6E84A] transition">
                      <Play className="h-3 w-3" />
                      View Project
                    </div>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 z-30 rounded-2xl border border-transparent group-hover:border-[#F6E84A] transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#3B1C63] bg-[#12051F] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.25)] sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#F6E84A]">Need a custom plan?</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#F6F1E8] sm:text-lg">
              If you want a content system that moves fast, converts, and keeps your
              brand front of mind, we can build your launch, campaign, or ongoing
              social strategy with premium AI & motion production.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F6E84A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#12051F] transition hover:bg-[#E8DC45] sm:mt-0"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
