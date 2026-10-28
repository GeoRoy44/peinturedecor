import fs from 'node:fs';
import path from 'node:path';

const BASE_ARTICLES = 'src/content/articles';
const BASE_PAGES = 'src/pages';

function parcourir(dossier, extension, rappel) {
  if (!fs.existsSync(dossier)) return;
  for (const f of fs.readdirSync(dossier, { withFileTypes: true })) {
    const p = path.join(dossier, f.name);
    if (f.isDirectory()) parcourir(p, extension, rappel);
    else if (f.name.endsWith(extension)) rappel(p);
  }
}

function routesPubliees() {
  const routes = new Set(['/']);
  const cats = fs.readFileSync('src/data/categories.ts', 'utf8');
  for (const m of cats.matchAll(/slug:\s*'([^']+)'/g)) routes.add(`/${m[1]}/`);
  parcourir(BASE_ARTICLES, '.md', (p) => {
    if (/^draft:\s*true\s*$/m.test(fs.readFileSync(p, 'utf8'))) return;
    const rel = path.relative(BASE_ARTICLES, p).replace(/\\/g, '/').replace(/\.md$/, '');
    routes.add(`/${rel}/`);
  });
  parcourir(BASE_PAGES, '.astro', (p) => {
    const rel = path.relative(BASE_PAGES, p).replace(/\\/g, '/').replace(/\.astro$/, '');
    if (rel.includes('[')) return;
    const route = rel === 'index' ? '/' : `/${rel.replace(/\/index$/, '')}/`;
    routes.add(route);
  });
  return routes;
}

export default function rehypeLiensPublies() {
  return (tree) => {
    const ok = routesPubliees();
    const traiter = (node) => {
      if (!node.children) return;
      node.children = node.children.flatMap((enfant) => {
        const href = enfant.type === 'element' && enfant.tagName === 'a' ? enfant.properties?.href : null;
        if (typeof href === 'string' && href.startsWith('/')) {
          const cible = href.split('#')[0];
          const norme = cible.endsWith('/') ? cible : `${cible}/`;
          if (!ok.has(norme)) {
            traiter(enfant);
            return enfant.children;
          }
        }
        traiter(enfant);
        return [enfant];
      });
    };
    traiter(tree);
  };
}
