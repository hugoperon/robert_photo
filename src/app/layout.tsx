import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert Photo | Photographe Auto & Moto",
  description: "Photographe professionnel spécialisé dans la photographie automobile et moto. Shooting, événements, courses et compétitions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-gray-900`}>
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-light tracking-wider text-white">
                ROBERT<span className="font-bold text-blue-400">PHOTO</span>
              </a>
              <ul className="hidden md:flex space-x-8 text-sm tracking-wide">
                <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">ACCUEIL</a></li>
                <li><a href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">PORTFOLIO</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">PRESTATIONS</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">À PROPOS</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">CONTACT</a></li>
              </ul>
              <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-light mb-4 text-white">
                  ROBERT<span className="font-bold text-blue-400">PHOTO</span>
                </h3>
                <p className="text-gray-400">Spécialiste de la photographie automobile et moto. Sublimez votre passion à travers mon objectif.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
                <p className="text-gray-400">Email: contact@robertphoto.fr</p>
                <p className="text-gray-400">Tél: +33 6 XX XX XX XX</p>
                <p className="text-gray-400">Paris, France</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-white">Suivez-moi</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">YouTube</a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} RobertPhoto. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
