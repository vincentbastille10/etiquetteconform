import React from 'react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'EtiquetteConform — EtiquetteConform est une application SaaS destinée aux artis',
  description: 'EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, …',
  url: 'http://localhost:3000',
};

export default function LandingPage() {
  return (
    <main>
      

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>EtiquetteConform</h1>
          <p className="subtitle">EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, confituriers, charcutiers, fromagers affineurs, producteurs fermiers, épiceries fines et traiteurs. Depuis l'entrée en vigueur et le renforcement des contrôles liés au règlement européen INCO et à ses décrets d'application français, chaque étiquette de produit alimentaire pré-emballé doit comporter exactement 14 mentions obligatoires : la dénomination légale de vente, la liste complète des ingrédients avec les 14 allergènes majeurs mis en évidence en gras ou en couleur, la quantité nette en grammes ou millilitres, la date limite de consommation ou date de durabilité minimale, les conditions particulières de conservation, le nom et l'adresse du responsable de la mise sur le marché, le pays d'origine pour certaines catégories de produits, le tableau des valeurs nutritionnelles calculées pour 100g ou 100ml, le numéro de lot permettant la traçabilité, et les instructions d'utilisation si nécessaires. La DGCCRF a intensifié ses contrôles depuis 2023 dans le cadre du plan national de contrôle pluriannuel et les amendes administratives vont de 1 500€ pour un premier avertissement à 15 000€ pour une récidive, sans compter le retrait obligatoire des lots non conformes du marché et la destruction des produits. Pourtant, la grande majorité des artisans conçoivent encore leurs étiquettes sur Word, Canva ou auprès d'un imprimeur local qui n'a pas de mission de vérification réglementaire. L'application propose un formulaire guidé par produit : l'artisan saisit les ingrédients et leur ordre décroissant de poids, indique les allergènes présents, renseigne les conditions de conservation et la durée de vie. Le moteur de règles TypeScript vérifie en temps réel la conformité de chaque mention, affiche les manques en rouge avec un message explicatif, calcule automatiquement les valeurs nutritionnelles par composition en interrogeant la base de données Ciqual de l'ANSES, et génère un PDF d'étiquette mise en page prêt à l'impression dans les formats standards du marché artisanal. Le catalogue multi-produits permet de gérer l'ensemble de la gamme d'un artisan avec un indicateur de conformité par SKU et un historique des versions d'étiquette pour la traçabilité interne. Modèle commercial : 3 étiquettes créées gratuitement sans inscription, puis 29€ par mois pour un catalogue illimité avec export multi-format, mises à jour réglementaires automatiques et certificat de conformité PDF téléchargeable par produit. Acquisition prioritaire via les chambres des métiers et de l'artisanat qui cherchent des outils concrets à recommander à leurs adhérents, les syndicats de boulangers et de charcutiers, et des groupes Facebook de producteurs fermiers et d'artisans de bouche.</p>
          <div className="cta-group">
            <a href="/contact" className="btn btn-lg btn-primary">Commencer</a>
            <a href="#features" className="btn btn-lg btn-secondary">En savoir plus</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Pourquoi choisir EtiquetteConform ?</h2>
          <div className="grid">
            <div className="card"><h3>Rapide à mettre en place</h3><p>Démarrez en quelques minutes, sans configuration complexe.</p></div>
            <div className="card"><h3>Fiable au quotidien</h3><p>Une base solide pensée pour durer et évoluer avec vous.</p></div>
            <div className="card"><h3>Pensé pour vous</h3><p>Une expérience claire, centrée sur l'essentiel.</p></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Un tarif simple pour les professionnels</h2>
          <div className="pricing-card">
            <h3>Plan Unique</h3>
            <p className="price">29€ / mois</p>
            <ul>
              <li>Accès complet à toutes les fonctions</li>
              <li>Support prioritaire</li>
              <li>Mises à jour à vie</li>
            </ul>
            <a href="/contact" className="btn btn-primary">Commencer maintenant</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq-list">
            <div className="faq-item"><h4>Comment démarrer ?</h4><p>Créez votre compte et suivez les étapes guidées. Aucune compétence technique requise.</p></div>
            <div className="faq-item"><h4>Puis-je annuler à tout moment ?</h4><p>Oui, sans engagement. Vous gardez le contrôle total de votre abonnement.</p></div>
            <div className="faq-item"><h4>Mes données sont-elles en sécurité ?</h4><p>Vos données sont protégées et ne sont jamais partagées avec des tiers.</p></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="final-cta">
        <div className="container">
          <h2>Prêt à transformer votre quotidien ?</h2>
          <p>EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, confituriers, charcutiers, fromagers affineurs, producteurs fermiers, épiceries fines et traiteurs. Depuis l'entrée en vigueur et le renforcement des contrôles liés au règlement européen INCO et à ses décrets d'application français, chaque étiquette de produit alimentaire pré-emballé doit comporter exactement 14 mentions obligatoires : la dénomination légale de vente, la liste complète des ingrédients avec les 14 allergènes majeurs mis en évidence en gras ou en couleur, la quantité nette en grammes ou millilitres, la date limite de consommation ou date de durabilité minimale, les conditions particulières de conservation, le nom et l'adresse du responsable de la mise sur le marché, le pays d'origine pour certaines catégories de produits, le tableau des valeurs nutritionnelles calculées pour 100g ou 100ml, le numéro de lot permettant la traçabilité, et les instructions d'utilisation si nécessaires. La DGCCRF a intensifié ses contrôles depuis 2023 dans le cadre du plan national de contrôle pluriannuel et les amendes administratives vont de 1 500€ pour un premier avertissement à 15 000€ pour une récidive, sans compter le retrait obligatoire des lots non conformes du marché et la destruction des produits. Pourtant, la grande majorité des artisans conçoivent encore leurs étiquettes sur Word, Canva ou auprès d'un imprimeur local qui n'a pas de mission de vérification réglementaire. L'application propose un formulaire guidé par produit : l'artisan saisit les ingrédients et leur ordre décroissant de poids, indique les allergènes présents, renseigne les conditions de conservation et la durée de vie. Le moteur de règles TypeScript vérifie en temps réel la conformité de chaque mention, affiche les manques en rouge avec un message explicatif, calcule automatiquement les valeurs nutritionnelles par composition en interrogeant la base de données Ciqual de l'ANSES, et génère un PDF d'étiquette mise en page prêt à l'impression dans les formats standards du marché artisanal. Le catalogue multi-produits permet de gérer l'ensemble de la gamme d'un artisan avec un indicateur de conformité par SKU et un historique des versions d'étiquette pour la traçabilité interne. Modèle commercial : 3 étiquettes créées gratuitement sans inscription, puis 29€ par mois pour un catalogue illimité avec export multi-format, mises à jour réglementaires automatiques et certificat de conformité PDF téléchargeable par produit. Acquisition prioritaire via les chambres des métiers et de l'artisanat qui cherchent des outils concrets à recommander à leurs adhérents, les syndicats de boulangers et de charcutiers, et des groupes Facebook de producteurs fermiers et d'artisans de bouche.</p>
          <a href="/contact" className="btn btn-lg btn-white">Commencer</a>
        </div>
      </section>
    </main>
  );
}
