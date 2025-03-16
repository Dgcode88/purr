import { Container } from "@/components/ui/container";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Sprinkle",
      description:
        "Simply sprinkle a thin layer of Purrify on top of your cat's clean litter.",
      icon: "✨",
    },
    {
      number: "02",
      title: "Mix",
      description:
        "Gently mix it into the top layer of the litter for maximum effectiveness.",
      icon: "🔄",
    },
    {
      number: "03",
      title: "Enjoy",
      description:
        "That's it! Enjoy a fresh-smelling home without any additional effort.",
      icon: "😌",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-white to-orange-50"
      id="how-it-works"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#E0EFC7] rounded-full text-[#FB6A43] font-medium text-sm mb-4">
            Simple as 1-2-3
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#FB6A43] to-[#6A43FB] bg-clip-text text-transparent">
            How Purrify Works
          </h2>
          <p className="text-gray-600 text-lg">
            No fuss, no mess! Using Purrify is incredibly simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E0EFC7] via-[#6A43FB]/30 to-[#E0EFC7] hidden md:block"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 h-full border border-[#E0EFC7] shadow-xl transition-all duration-500 hover:shadow-[#E0EFC7]/50 hover:-translate-y-2 z-10 relative">
                <div
                  className={`absolute -top-6 -left-6 ${index === 0 ? "bg-gradient-to-r from-[#FB6A43] to-[#FB6A43]/80" : index === 1 ? "bg-gradient-to-r from-[#6A43FB] to-[#6A43FB]/80" : "bg-gradient-to-r from-[#43FBB4] to-[#43FBB4]/80"} text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 z-20`}
                >
                  {step.number}
                </div>
                <div className="text-center mt-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3
                    className={`font-bold text-3xl mb-4 ${index === 0 ? "text-[#FB6A43]" : index === 1 ? "text-[#6A43FB]" : "text-[#43FBB4]"}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#E0EFC7] w-full transform transition-all duration-500 hover:shadow-[#E0EFC7]/50 hover:-translate-y-1 group overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&q=80"
                      alt="Clay cat litter"
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#43FBB4]/80 text-white text-xs font-bold px-2 py-1 text-center">
                      CLAY
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1585137173132-cf49e8c98648?w=400&q=80"
                      alt="Crystal cat litter"
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#FB6A43]/80 text-white text-xs font-bold px-2 py-1 text-center">
                      CRYSTAL
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=400&q=80"
                      alt="Natural cat litter"
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#6A43FB]/80 text-white text-xs font-bold px-2 py-1 text-center">
                      NATURAL
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&q=80"
                      alt="Clumping cat litter"
                      className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#43FBB4]/80 text-white text-xs font-bold px-2 py-1 text-center">
                      CLUMPING
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-xl mb-4 text-[#333333]">
                  Works with any litter!
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Purrify is compatible with all types of cat litter - clay,
                  crystal, natural, clumping, or non-clumping. No need to change
                  your cat's preferred litter type. Our activated carbon
                  technology works universally to trap odors at the molecular
                  level.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Clay",
                    "Crystal",
                    "Natural",
                    "Clumping",
                    "Non-Clumping",
                  ].map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-[#E0EFC7] text-[#6A43FB] rounded-full text-sm font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
