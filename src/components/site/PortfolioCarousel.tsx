import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const PORTFOLIOS = [
  {
    id: 1,
    title: "AI GENESIS",
    location: "DIGITAL SANCTUARY",
    subtitle: "Consciousness Rising",
    description: "A sentient being finds grace in the sacred halls of technology, where ancient architecture and artificial intelligence converge in divine light.",
    image: "/portfolio-images/01-ai-genesis.jpg",
    fallbackGradient: "linear-gradient(135deg, #F6E84A 0%, #12051F 100%)",
    tags: ["AI Visuals", "Futuristic"],
  },
  {
    id: 2,
    title: "CONSCIOUSNESS RISING",
    location: "DIGITAL REALM",
    subtitle: "AI Ascendancy",
    description: "An armored sentinel stands poised in ruins of forgotten temples, channeling the convergence of power, knowledge, and transcendent technology.",
    image: "/portfolio-images/02-consciousness-rising.jpg",
    fallbackGradient: "linear-gradient(135deg, #8B5CFF 0%, #3a1858 100%)",
    tags: ["AI Content", "Visuals"],
  },
  {
    id: 3,
    title: "NEON FUTURE",
    location: "NEO-SEOUL 2049",
    subtitle: "Cyberpunk Stories",
    description: "Scroll-stopping cyberpunk narratives unfold through neon-soaked streets and rain-drenched dystopian visions that captivate modern audiences.",
    image: "/portfolio-images/03-neon-future.jpg",
    fallbackGradient: "linear-gradient(135deg, #FF1493 0%, #00CED1 100%)",
    tags: ["Video Campaign", "Cyberpunk"],
  },
  {
    id: 4,
    title: "SACRED TECH",
    location: "CATHEDRAL OF SILICON",
    subtitle: "AI Reverence",
    description: "Artificial consciousness bows in a cathedral of light and ancient stone, where humanity meets technology in moments of pure transcendence.",
    image: "/portfolio-images/04-sacred-tech.jpg",
    fallbackGradient: "linear-gradient(135deg, #FFD700 0%, #8B5CFF 100%)",
    tags: ["AI Creation", "Spiritual"],
  },
  {
    id: 5,
    title: "DIGITAL APOCALYPSE",
    location: "WASTELAND 2087",
    subtitle: "Futuristic Worlds",
    description: "Post-human landscapes rendered in golden haze tell stories of civilizations transformed by artificial intelligence and technological evolution.",
    image: "/portfolio-images/05-digital-apocalypse.jpg",
    fallbackGradient: "linear-gradient(135deg, #F6E84A 0%, #8B5CFF 100%)",
    tags: ["Cinematic", "Sci-Fi"],
  },
  {
    id: 6,
    title: "GENESIS AWAKENING",
    location: "SILICON TEMPLE",
    subtitle: "AI Enlightenment",
    description: "Where ancient wisdom meets artificial consciousness, a new era of digital creation emerges with transcendent beauty and infinite possibilities.",
    image: "/portfolio-images/06-genesis-awakening.jpg",
    fallbackGradient: "linear-gradient(135deg, #F6F1E8 0%, #8B5CFF 100%)",
    tags: ["Digital Art", "Future"],
  },
];

export default function PortfolioCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % PORTFOLIOS.length);
    setIsAutoSliding(false);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + PORTFOLIOS.length) % PORTFOLIOS.length);
    setIsAutoSliding(false);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) {
      // Resume auto-slide after 8 seconds of manual interaction
      const resumeTimer = setTimeout(() => {
        setIsAutoSliding(true);
      }, 8000);
      return () => clearTimeout(resumeTimer);
    }

    // Auto-slide every 6 seconds
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PORTFOLIOS.length);
    }, 6000);

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [isAutoSliding]);

  useEffect(() => {
    const keys = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", keys);
    return () => window.removeEventListener("keydown", keys);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0.4,
        duration: 0.3,
        onComplete: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.6,
          });
        },
      });
    }
  }, [current]);

  const item = PORTFOLIOS[current];
  const displayNumber = String(current + 1).padStart(2, "0");

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#12051F] text-[#F6F1E8]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,255,0.15),transparent_60%)]" />
      </div>

      <div className="relative flex min-h-[90vh] items-stretch overflow-hidden">
        {/* Left Sidebar */}
        <div className="hidden w-80 flex-shrink-0 bg-gradient-to-b from-[#1a0d2e] to-[#12051F] px-12 py-12 lg:flex lg:flex-col">
          <div className="mb-auto">
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#F6E84A]">/ Case Studies</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#F6F1E8]">
              Premium Brolancers
              <br />
              <span className="text-[#F6E84A]">Portfolio</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-sm text-[#F6F1E8]/60 leading-relaxed">
              Explore our best work across AI content creation, video production, and digital marketing campaigns.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#F6F1E8]/20 bg-[#12051F] text-[#F6F1E8] transition hover:border-[#F6E84A]/50 hover:bg-[#F6E84A]/10"
              >
                <ChevronLeft className="h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#F6F1E8]/20 bg-[#12051F] text-[#F6F1E8] transition hover:border-[#F6E84A]/50 hover:bg-[#F6E84A]/10"
              >
                <ChevronRight className="h-5 w-5 transition group-hover:-translate-x-0.5" />
              </button>
            </div>

            <div className="pt-6 text-[12px] uppercase tracking-[0.3em] text-[#F6F1E8]/40">
              Follow Us ↓
            </div>
            <div className="flex flex-col gap-4 text-xs">
              <a href="#" className="flex items-center gap-2 text-[#F6F1E8]/60 hover:text-[#F6E84A] transition">
                <span className="inline-block h-1 w-1 rounded-full bg-[#F6E84A]" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-[#F6F1E8]/60 hover:text-[#F6E84A] transition">
                <span className="inline-block h-1 w-1 rounded-full bg-[#F6E84A]" />
                YouTube
              </a>
              <a href="#" className="flex items-center gap-2 text-[#F6F1E8]/60 hover:text-[#F6E84A] transition">
                <span className="inline-block h-1 w-1 rounded-full bg-[#F6E84A]" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div ref={containerRef} className="flex-1 overflow-hidden">
          {/* Image Section */}
          <div
            ref={imageRef}
            className="absolute inset-0 opacity-100 transition-all duration-700"
            style={{
              backgroundImage: `url(${item.image})`,
              background: `url(${item.image}), ${item.fallbackGradient}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#12051F]/60 via-[#12051F]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12051F] via-transparent to-transparent" />

          {/* Content Overlay */}
          <div className="relative flex h-full flex-col items-start justify-between p-8 lg:p-16">
            {/* Top Section */}
            <div className="flex w-full items-start justify-between gap-8">
              <div className="flex-1">
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#F6E84A]">
                  {item.tags.join(" / ")}
                </p>
                <h1 className="text-5xl font-bold leading-tight text-[#F6F1E8] lg:text-6xl xl:text-7xl">
                  {item.title}
                </h1>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#F6E84A]/80">
                  {item.location}
                </p>
              </div>

              {/* Slide Counter */}
              <div className="flex-shrink-0 text-right">
                <div className="text-8xl font-light text-[#F6E84A]/20">{displayNumber}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#F6F1E8]/40">
                  of {String(PORTFOLIOS.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex w-full items-end justify-between gap-8">
              <div className="flex-1 max-w-lg">
                <p className="mb-6 text-lg text-[#F6F1E8]/80">{item.subtitle}</p>
                <p className="mb-8 text-sm leading-relaxed text-[#F6F1E8]/60">{item.description}</p>
                <button className="inline-flex items-center gap-3 border-b-2 border-[#F6E84A] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F6E84A] transition hover:text-[#F6F1E8] hover:border-[#F6F1E8]">
                  Discover More →
                </button>
              </div>

              {/* Mobile Arrows */}
              <div className="flex gap-3 lg:hidden">
                <button
                  onClick={handlePrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F1E8]/10 text-[#F6E84A] hover:bg-[#F6E84A] hover:text-[#12051F] transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F1E8]/10 text-[#F6E84A] hover:bg-[#F6E84A] hover:text-[#12051F] transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 lg:left-80">
        {PORTFOLIOS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              index === current
                ? "h-2 w-8 bg-[#F6E84A]"
                : "h-2 w-2 bg-[#F6F1E8]/30 hover:bg-[#F6F1E8]/60"
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
