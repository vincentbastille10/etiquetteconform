import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "EtiquetteConform — EtiquetteConform est une application SaaS destinée aux artis",
  description: "EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, …",
  keywords: "etiquetteconform, application, saas, destinée, artisans, alimentaires, français, vendent",
  alternates: { canonical: 'http://localhost:3000' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: "EtiquetteConform — EtiquetteConform est une application SaaS destinée aux artis",
    description: "EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, …",
    url: 'http://localhost:3000',
    siteName: "EtiquetteConform",
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EtiquetteConform — EtiquetteConform est une application SaaS destinée aux artis",
    description: "EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, …",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <nav className="navbar">
          <div className="container">
            <span className="logo">EtiquetteConform</span>
            <div className="nav-links">
              <a href="#features">Fonctionnalités</a>
              <a href="/pricing">Tarifs</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/login">Connexion</a>
              <a href="/contact" className="btn btn-primary">Commencer</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} EtiquetteConform. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
