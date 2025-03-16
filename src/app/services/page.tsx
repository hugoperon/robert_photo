import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function Services() {
  const services = [
    {
      title: "Shooting Automobile",
      description: "Mise en valeur professionnelle de votre véhicule dans des lieux soigneusement sélectionnés. Photos en mouvement, en studio ou en extérieur.",
      image: getImagePath("/images/auto1.jpg"),
      features: [
        "Photos en mouvement",
        "Shooting en studio",
        "Mise en scène extérieure",
        "Retouches professionnelles",
      ]
    },
    {
      title: "Shooting Moto",
      description: "Sublimez votre deux-roues avec des photos qui capturent son caractère unique. Idéal pour les customs, café racers et motos de collection.",
      image: getImagePath("/images/moto2.jpg"),
      features: [
        "Photos dynamiques",
        "Shooting statique",
        "Détails mécaniques",
        "Ambiance personnalisée",
      ]
    },
    {
      title: "Événements",
      description: "Couverture complète de vos événements automobiles : courses, rassemblements, salons, concours d'élégance.",
      image: getImagePath("/images/auto3.jpg"),
      features: [
        "Reportage complet",
        "Photos d'action",
        "Ambiance générale",
        "Remise des photos sous 48h",
      ]
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/auto4.jpg")}
            alt="Services photographiques"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4">
              MES <span className="font-bold text-blue-400">SERVICES</span>
            </h1>
            <p className="text-xl text-blue-200">
              Des prestations sur mesure pour sublimer vos véhicules
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h2 className="text-3xl font-light mb-6 text-white">
                  {service.title.split(" ")[0]}{" "}
                  <span className="font-bold text-blue-400">
                    {service.title.split(" ")[1]}
                  </span>
                </h2>
                <p className="text-blue-200 mb-8">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            TARIFS SUR <span className="font-bold text-blue-400">DEMANDE</span>
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Chaque projet étant unique, contactez-moi pour obtenir un devis personnalisé
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
} 