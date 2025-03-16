import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function Portfolio() {
  const categories = [
    {
      title: "Automobiles",
      images: [
        { src: getImagePath("/images/auto1.jpg"), alt: "Voiture de sport" },
        { src: getImagePath("/images/auto2.jpg"), alt: "Supercar" },
        { src: getImagePath("/images/auto3.jpg"), alt: "Voiture de collection" },
        { src: getImagePath("/images/auto4.jpg"), alt: "Voiture de luxe" },
      ]
    },
    {
      title: "Motos",
      images: [
        { src: getImagePath("/images/moto1.jpg"), alt: "Moto custom" },
        { src: getImagePath("/images/moto2.jpg"), alt: "Moto de course" },
        { src: getImagePath("/images/moto3.jpg"), alt: "Moto sportive" },
        { src: getImagePath("/images/moto4.jpg"), alt: "Moto classique" },
      ]
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero.jpg")}
            alt="Portfolio automobile"
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
              PORT<span className="font-bold text-blue-400">FOLIO</span>
            </h1>
            <p className="text-xl text-blue-200">
              Une sélection de mes meilleures photographies
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="container mx-auto px-4 mb-20">
            <h2 className="text-3xl font-light text-center mb-12 text-white">
              {category.title.split("")[0]}
              <span className="font-bold text-blue-400">
                {category.title.slice(1)}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[16/10] overflow-hidden rounded-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-lg font-medium">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            VOUS AIMEZ MON <span className="font-bold text-blue-400">TRAVAIL</span> ?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Discutons de votre projet ensemble
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
} 