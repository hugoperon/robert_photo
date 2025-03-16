import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPagePath } from '@/utils/paths'

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
              <Link href={getPagePath('/')} className="text-2xl font-light text-white">
                ROBERT<span className="font-bold text-blue-400">PHOTO</span>
              </Link>
              <div className="space-x-6">
                <Link href={getPagePath('/')} className="text-gray-300 hover:text-blue-400">Accueil</Link>
                <Link href={getPagePath('/portfolio')} className="text-gray-300 hover:text-blue-400">Portfolio</Link>
                <Link href={getPagePath('/services')} className="text-gray-300 hover:text-blue-400">Services</Link>
                <Link href={getPagePath('/about')} className="text-gray-300 hover:text-blue-400">À propos</Link>
                <Link href={getPagePath('/contact')} className="text-gray-300 hover:text-blue-400">Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} ROBERTPHOTO - Tous droits réservés</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
