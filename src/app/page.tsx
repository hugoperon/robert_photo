import Image from "next/image";

export default function Home() {
  const galleryImages = [
    { src: "/images/auto1.jpg", alt: "Voiture de sport" },
    { src: "/images/moto1.jpg", alt: "Moto custom" },
    { src: "/images/auto2.jpg", alt: "Supercar" },
    { src: "/images/moto2.jpg", alt: "Moto de course" },
    { src: "/images/auto3.jpg", alt: "Voiture de collection" },
    { src: "/images/moto3.jpg", alt: "Moto sportive" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Photographie automobile professionnelle"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-950/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              L'ART DE LA PHOTOGRAPHIE
              <span className="block font-bold mt-2 text-blue-300">AUTOMOBILE & MOTO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">
              Photographe spécialisé dans l'univers des belles mécaniques
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Réserver une séance
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-white">
            MES <span className="font-bold text-blue-400">SERVICES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition-colors">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Shooting Auto</h3>
              <p className="text-blue-200">Mise en valeur de votre véhicule, shooting dynamique ou statique</p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition-colors">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Événements</h3>
              <p className="text-blue-200">Courses, rassemblements, salons automobiles</p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-800/80 transition-colors">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Studio</h3>
              <p className="text-blue-200">Photos détaillées, customs et préparations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-white">
            DERNIERS <span className="font-bold text-blue-400">TRAVAUX</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block border-2 border-blue-400 text-blue-400 px-8 py-3 text-lg font-medium hover:bg-blue-400 hover:text-white transition-colors"
            >
              Voir tout le portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 text-white">
                EXPERTISE <span className="font-bold text-blue-400">AUTOMOBILE</span>
              </h2>
              <p className="text-blue-200 mb-4">
                Passionné par l'univers automobile et moto depuis plus de 10 ans, je mets mon expertise au service de votre passion.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Shooting professionnel de votre véhicule
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Couverture d'événements automobiles
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Photos de customs et préparations
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Reportages courses et compétitions
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/auto4.jpg"
                alt="Expertise automobile"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white">
            PRÊT À <span className="font-bold text-blue-400">SUBLIMER</span> VOTRE VÉHICULE ?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Contactez-moi pour discuter de votre projet photo
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </section>
    </>
  );
}
