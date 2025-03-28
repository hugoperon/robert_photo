import Image from "next/image";
import { getImagePath, getPagePath } from "@/utils/paths";
import Link from "next/link";

export default function About() {
  const experiences = [
    {
      year: "2022 - Aujourd'hui",
      title: "Photographe Automobile & Moto",
      description: "Spécialisation dans la photographie automobile et moto. Shootings personnalisés et couverture d'événements."
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/auto2.jpg")}
            alt="À propos"
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
              À <span className="font-bold text-blue-400">PROPOS</span>
            </h1>
            <p className="text-xl text-blue-200">
              Découvrez mon parcours et ma passion
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src={getImagePath("/images/moto3.jpg")}
                alt="Portrait du photographe"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6 text-white">
                MA <span className="font-bold text-blue-400">PASSION</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Depuis janvier 2022, je me suis lancé dans l'aventure de la photographie automobile et moto, combinant ainsi mes deux passions.
                </p>
                <p>
                  Spécialisé dans la photographie de véhicules, je m'efforce de capturer l'essence et la personnalité unique de chaque auto et moto, en mettant en valeur ses lignes, ses détails et son caractère.
                </p>
                <p>
                  Mon approche combine technique précise et créativité artistique pour produire des images qui racontent une histoire et suscitent l'émotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-white">
            MON <span className="font-bold text-blue-400">PARCOURS</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l border-blue-400 last:pb-0">
                <div className="absolute left-0 top-0 w-2 h-2 bg-blue-400 rounded-full -translate-x-[5px]" />
                <div className="mb-1 text-blue-400 font-medium">
                  {experience.year}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-300">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-white">Véhicules Photographiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-white">Événements Couverts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2022</div>
              <div className="text-white">Année de début</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            ENVIE DE <span className="font-bold text-blue-400">COLLABORER</span> ?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            N'hésitez pas à me contacter pour discuter de votre projet
          </p>
          <Link
            href={getPagePath("/contact")}
            className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
} 