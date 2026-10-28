import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export const splitId = (a: Article) => {
  const [categorie, ...reste] = a.id.split('/');
  return { categorie, slug: reste.join('/') };
};

export const urlArticle = (a: Article) => {
  const { categorie, slug } = splitId(a);
  return `/${categorie}/${slug}/`;
};

export async function getArticles(categorie?: string): Promise<Article[]> {
  const tous = await getCollection('articles', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return tous
    .filter((a) => !categorie || splitId(a).categorie === categorie)
    .sort((a, b) => a.data.idPlan.localeCompare(b.data.idPlan));
}
