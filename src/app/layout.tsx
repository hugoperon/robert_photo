import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Robert Photo - Photographie Automobile',
  description: 'Photographe spécialisé dans la photographie automobile et moto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-light text-white">
                ROBERT<span className="font-bold text-blue-400">PHOTO</span>
              </Link>
              <div className="space-x-6">
                <Link href="/" className="text-gray-300 hover:text-blue-400">Accueil</Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-blue-400">Portfolio</Link>
                <Link href="/services" className="text-gray-300 hover:text-blue-400">Services</Link>
                <Link href="/about" className="text-gray-300 hover:text-blue-400">À propos</Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center space-y-6">
            <p>© {new Date().getFullYear()} ROBERTPHOTO - Tous droits réservés</p>
            <div className="border-t border-gray-800 pt-6">
              <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm">Vous souhaitez un site web professionnel ?</p>
                <div className="flex items-center space-x-2">
                  <p className="text-sm">Développé par Hugo Peron</p>
                  <a 
                    href="mailto:peron.h92@outlook.fr?subject=Demande de création de site web&body=Bonjour Hugo,%0D%0A%0D%0AJe suis intéressé(e) par la création d'un site web professionnel.%0D%0A%0D%0AMerci de me recontacter pour en discuter."
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Me contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
