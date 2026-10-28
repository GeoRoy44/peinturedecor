export type Outil = {
  categorie: string;
  url: string;
  titre: string;
  accroche: string;
  description: string;
  cta: string;
};

export const outils: Outil[] = [
  {
    categorie: 'meilleure-peinture-interieure',
    url: '/meilleure-peinture-interieure/simulateur-peinture/',
    titre: 'Simulateur peinture',
    accroche: "Testez vos couleurs avant d'acheter",
    description: "Mur principal, sol, plinthes, canapé : le simulateur colore une pièce en vue 3D ou 2D, avec cinq ambiances prêtes à l'emploi.",
    cta: 'Lancer le simulateur'
  }
];

export const outilsDe = (slug: string) => outils.filter((o) => o.categorie === slug);
