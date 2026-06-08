# Plan SEO — EtiquetteConform

## Intention SEO ciblée
Capter les utilisateurs qui cherchent une solution à : « EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, confituriers, charcutiers, fromagers affineurs, producteurs fermiers, épiceries fines et traiteurs. Depuis l'entrée en vigueur et le renforcement des contrôles liés au règlement européen INCO et à ses décrets d'application français, chaque étiquette de produit alimentaire pré-emballé doit comporter exactement 14 mentions obligatoires : la dénomination légale de vente, la liste complète des ingrédients avec les 14 allergènes majeurs mis en évidence en gras ou en couleur, la quantité nette en grammes ou millilitres, la date limite de consommation ou date de durabilité minimale, les conditions particulières de conservation, le nom et l'adresse du responsable de la mise sur le marché, le pays d'origine pour certaines catégories de produits, le tableau des valeurs nutritionnelles calculées pour 100g ou 100ml, le numéro de lot permettant la traçabilité, et les instructions d'utilisation si nécessaires. La DGCCRF a intensifié ses contrôles depuis 2023 dans le cadre du plan national de contrôle pluriannuel et les amendes administratives vont de 1 500€ pour un premier avertissement à 15 000€ pour une récidive, sans compter le retrait obligatoire des lots non conformes du marché et la destruction des produits. Pourtant, la grande majorité des artisans conçoivent encore leurs étiquettes sur Word, Canva ou auprès d'un imprimeur local qui n'a pas de mission de vérification réglementaire. L'application propose un formulaire guidé par produit : l'artisan saisit les ingrédients et leur ordre décroissant de poids, indique les allergènes présents, renseigne les conditions de conservation et la durée de vie. Le moteur de règles TypeScript vérifie en temps réel la conformité de chaque mention, affiche les manques en rouge avec un message explicatif, calcule automatiquement les valeurs nutritionnelles par composition en interrogeant la base de données Ciqual de l'ANSES, et génère un PDF d'étiquette mise en page prêt à l'impression dans les formats standards du marché artisanal. Le catalogue multi-produits permet de gérer l'ensemble de la gamme d'un artisan avec un indicateur de conformité par SKU et un historique des versions d'étiquette pour la traçabilité interne. Modèle commercial : 3 étiquettes créées gratuitement sans inscription, puis 29€ par mois pour un catalogue illimité avec export multi-format, mises à jour réglementaires automatiques et certificat de conformité PDF téléchargeable par produit. Acquisition prioritaire via les chambres des métiers et de l'artisanat qui cherchent des outils concrets à recommander à leurs adhérents, les syndicats de boulangers et de charcutiers, et des groupes Facebook de producteurs fermiers et d'artisans de bouche. ».
Cible : les professionnels.

## Mots-clés principaux
etiquetteconform, application, saas, destinée, artisans, alimentaires, français, vendent

## Title & meta
- **Title** : EtiquetteConform — EtiquetteConform est une application SaaS destinée aux artis
- **Meta description** : EtiquetteConform est une application SaaS destinée aux artisans alimentaires français qui vendent des produits pré-emballés : boulangers, pâtissiers, …
- **Canonical** : http://localhost:3000
- **Schema.org** : Product

## Structure de page recommandée
- **H1 (unique, intention)** : EtiquetteConform
- **H2** : Problème → Solution → Fonctionnalités → Tarifs → FAQ
- **H3** : sous-points de chaque section, orientés bénéfice client

## Angle commercial
Mettre en avant le bénéfice concret (gain de temps / argent / simplicité),
pas la technique. Preuve sociale + réassurance (sécurité, sans engagement).

## CTA recommandés
- Principal : « Commencer » (au-dessus de la ligne de flottaison + section finale)
- Secondaire : « En savoir plus »
- Page contact : formulaire de lead (/contact)

## Indexation
- robots.txt : autorise tout + référence le sitemap
- sitemap.xml : pages publiques (/ et /contact)
- OpenGraph + Twitter Cards configurés dans app/layout.tsx
