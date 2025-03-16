import Image from "next/image";
import { getImagePath } from "@/utils/paths";

export default function About() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/auto8.jpg")}
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
              À PRO<span className="font-bold text-blue-400">POS</span>
            </h1>
            <p className="text-xl text-blue-200">
              Découvrez ma passion pour la photographie automobile
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={getImagePath("/images/auto6.jpg")}
                alt="Passion automobile"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white">
                MA <span className="font-bold text-blue-400">PASSION</span>
              </h2>
              <p className="text-gray-300">
                Depuis janvier 2022, je me suis lancé dans l'aventure de la photographie automobile et moto. Une passion qui me permet de combiner mon amour pour les belles mécaniques et l'art de la photographie.
              </p>
              <p className="text-gray-300">
                Chaque véhicule est unique et mérite d'être sublimé à travers des photos qui capturent son essence et sa personnalité. Je m'efforce de trouver le meilleur angle, la meilleure lumière pour mettre en valeur ces œuvres mécaniques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-6 md:order-2">
              <h2 className="text-3xl font-light text-white">
                MON <span className="font-bold text-blue-400">APPROCHE</span>
              </h2>
              <p className="text-gray-300">
                Je propose des shootings personnalisés pour les particuliers et les professionnels. Que ce soit pour immortaliser votre véhicule de collection, capturer l'essence de votre moto custom, ou documenter un événement automobile.
              </p>
              <p className="text-gray-300">
                Mon objectif est de créer des images qui racontent une histoire, qui transmettent l'émotion et la passion que nous partageons tous pour ces machines exceptionnelles.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden md:order-1">
              <Image
                src={getImagePath("/images/moto7.jpg")}
                alt="Approche photographique"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2022</div>
              <div className="text-gray-300">Année de début</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Véhicules photographiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-300">Événements couverts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 