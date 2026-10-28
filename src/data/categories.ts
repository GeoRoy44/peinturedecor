export type Variante = 'terracotta' | 'sauge' | 'sable' | 'beton';

export type PageFille = {
  mc: string;
  volume: number | null;
};

export type Categorie = {
  cocon: 'C1' | 'C2' | 'C3' | 'C4' | 'C5';
  priorite: number;
  slug: string;
  titre: string;
  mcMere: string;
  volume: number | null;
  h1: string;
  description: string;
  intro: string;
  variante: Variante;
  filles: PageFille[];
};

export const categories: Categorie[] = [
  {
    cocon: 'C3',
    priorite: 1,
    slug: 'peindre-un-mur',
    titre: 'Méthodes & conseils',
    mcMere: 'comment peindre un mur',
    volume: 1900,
    h1: 'Comment peindre un mur comme un pro',
    description: 'Préparation, sous-couche, plafond, salle de bain, cuisine : toutes les méthodes pour peindre un mur sans traces.',
    intro: 'Lessivage, enduit, sous-couche, finitions : la méthode complète, pièce par pièce.',
    variante: 'terracotta',
    filles: [
      { mc: 'lessivage mur', volume: 1900 },
      { mc: 'peindre un plafond', volume: 6600 },
      { mc: 'peinture salle de bain', volume: 9900 },
      { mc: 'repeindre un meuble', volume: 590 },
      { mc: 'peinture qui cloque', volume: 1000 },
      { mc: 'peindre soi même ou peintre', volume: null }
    ]
  },
  {
    cocon: 'C1',
    priorite: 2,
    slug: 'peintre-en-batiment',
    titre: 'Trouver un peintre',
    mcMere: 'peintre en bâtiment',
    volume: 5400,
    h1: 'Trouver un peintre en bâtiment près de chez vous',
    description: 'Annuaire des peintres par ville, prix au m², devis et critères pour choisir un artisan peintre fiable.',
    intro: 'Annuaire par ville, prix au m² et conseils pour comparer les devis.',
    variante: 'sauge',
    filles: [
      { mc: 'artisan peintre', volume: 2900 },
      { mc: 'peintre intérieur', volume: 2900 },
      { mc: 'devis peinture', volume: 1600 },
      { mc: 'peintre nantes', volume: 720 },
      { mc: 'ravalement de façade nantes', volume: 390 }
    ]
  },
  {
    cocon: 'C2',
    priorite: 3,
    slug: 'peinture-decorative',
    titre: 'Peinture décorative',
    mcMere: 'peinture décorative',
    volume: 320,
    h1: 'Peinture décorative : effets, matières et finitions',
    description: 'Tadelakt, peinture à la chaux, enduits décoratifs, béton ciré, papier peint et couleurs tendance.',
    intro: 'Tadelakt, chaux, béton ciré, couleurs : donnez de la matière à vos murs.',
    variante: 'sable',
    filles: [
      { mc: 'tadelakt', volume: 8100 },
      { mc: 'peinture à la chaux', volume: 8100 },
      { mc: 'enduit décoratif', volume: 2900 },
      { mc: 'papier peint panoramique', volume: 49500 },
      { mc: 'couleur salon', volume: 1900 }
    ]
  },
  {
    cocon: 'C4',
    priorite: 4,
    slug: 'meilleure-peinture-interieure',
    titre: 'Outils & comparatifs',
    mcMere: 'meilleure peinture intérieure',
    volume: null,
    h1: 'Meilleure peinture intérieure : comparatif des marques',
    description: 'Comparatifs de marques de peinture, finitions, pistolets, rouleaux et petit matériel pour bien choisir.',
    intro: 'Marques, finitions et matériel : nos comparatifs pour acheter juste.',
    variante: 'beton',
    filles: [
      { mc: 'peinture seigneurie', volume: 9900 },
      { mc: 'peinture glycéro ou acrylique', volume: 390 },
      { mc: 'pistolet peinture', volume: 27100 },
      { mc: 'rouleau peinture', volume: 5400 }
    ]
  },
  {
    cocon: 'C5',
    priorite: 5,
    slug: 'peinture-facade',
    titre: 'Extérieur & façade',
    mcMere: 'peinture façade',
    volume: 5400,
    h1: 'Peinture de façade : prix, produits et démarches',
    description: 'Peinture de façade, ravalement, peinture extérieure, volets, portail et sol de garage : prix et méthodes.',
    intro: 'Façade, ravalement, volets, sols : réussir ses travaux extérieurs.',
    variante: 'sauge',
    filles: [
      { mc: 'ravalement de façade prix', volume: 1600 },
      { mc: 'peinture extérieure', volume: 4400 },
      { mc: 'peinture sol garage', volume: 8100 }
    ]
  }
];

export const getCategorie = (cocon: Categorie['cocon']) =>
  categories.find((c) => c.cocon === cocon) as Categorie;
