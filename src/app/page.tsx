import Image from "next/image";
import Link from "next/link";
import { getImagePath, getPagePath } from "@/utils/paths";

export default function Home() {
  const galleryImages = [
    { src: getImagePath("/images/auto5.jpg"), alt: "Voiture classique" },
    { src: getImagePath("/images/auto7.jpg"), alt: "Voiture d'exception" },
    { src: getImagePath("/images/moto5.jpg"), alt: "Moto café racer" },
    { src: getImagePath("/images/moto8.jpg"), alt: "Moto de piste" },
    { src: getImagePath("/images/auto9.jpg"), alt: "Voiture GT" },
    { src: getImagePath("/images/moto10.jpg"), alt: "Moto superbike" },
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/hero.jpg")}
            alt="Photographie automobile"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              PHOTOGRAPHE <span className="font-bold text-blue-400">AUTO & MOTO</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Sublimez votre passion à travers mon objectif
            </p>
            <Link
              href={getPagePath("/contact")}
              className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-white">
            MES <span className="font-bold text-blue-400">RÉALISATIONS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[16/10] overflow-hidden rounded-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={getPagePath("/portfolio")}
              className="inline-block border-2 border-blue-400 text-blue-400 px-8 py-3 text-lg font-medium hover:bg-blue-400 hover:text-white transition-colors"
            >
              Voir tout le portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-white">
            MES <span className="font-bold text-blue-400">SERVICES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-4">Shooting Auto</h3>
              <p className="text-gray-400 mb-4">
                Mettez en valeur votre véhicule avec des photos professionnelles.
              </p>
              <Link href={getPagePath("/services")} className="text-blue-400 hover:text-blue-300">
                En savoir plus →
              </Link>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-4">Shooting Moto</h3>
              <p className="text-gray-400 mb-4">
                Sublimez votre deux-roues avec des photos qui capturent son caractère.
              </p>
              <Link href={getPagePath("/services")} className="text-blue-400 hover:text-blue-300">
                En savoir plus →
              </Link>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <h3 className="text-xl font-medium text-white mb-4">Événements</h3>
              <p className="text-gray-400 mb-4">
                Couverture complète de vos événements automobiles.
              </p>
              <Link href={getPagePath("/services")} className="text-blue-400 hover:text-blue-300">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            PRÊT À <span className="font-bold text-blue-400">COLLABORER</span> ?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Discutons de votre projet ensemble
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
