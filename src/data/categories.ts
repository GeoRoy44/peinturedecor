export type Categorie = {
  slug: string;
  titre: string;
  h1: string;
  description: string;
  intro: string;
  variante: 'terracotta' | 'sauge' | 'sable' | 'beton';
};

export const categories: Categorie[] = [
  {
    slug: 'peinture-a-effets',
    titre: 'Peinture à effets',
    h1: 'Peinture à effets : béton, chaux, métal',
    description: 'Guides et techniques pour réussir une peinture à effet béton ciré, chaux, rouille ou métallisé.',
    intro: 'Effet béton, chaux, rouille ou métal : les techniques pour donner de la matière à vos murs.',
    variante: 'terracotta'
  },
  {
    slug: 'enduits-decoratifs',
    titre: 'Enduits décoratifs',
    h1: 'Enduits décoratifs : tadelakt, stuc, béton ciré',
    description: 'Tadelakt, stuc vénitien, béton ciré : choisir et appliquer un enduit décoratif intérieur.',
    intro: 'Tadelakt, stuc vénitien, béton ciré : comprendre, choisir et appliquer.',
    variante: 'sable'
  },
  {
    slug: 'peinture-par-piece',
    titre: 'Peinture par pièce',
    h1: 'Quelle peinture pour chaque pièce ?',
    description: 'Salon, chambre, cuisine, salle de bain : la bonne peinture et la bonne finition pour chaque pièce.',
    intro: 'Salon, chambre, cuisine, salle de bain : la bonne peinture, la bonne finition.',
    variante: 'sauge'
  },
  {
    slug: 'couleurs-et-tendances',
    titre: 'Couleurs & tendances',
    h1: 'Couleurs et tendances déco',
    description: 'Associations de couleurs, nuanciers et tendances peinture pour la décoration intérieure.',
    intro: 'Terracotta, vert sauge, bleu nuit : associer les couleurs sans se tromper.',
    variante: 'beton'
  }
];
