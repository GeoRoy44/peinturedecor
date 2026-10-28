import fs from 'node:fs';
import path from 'node:path';

const BASE_ARTICLES = 'src/content/articles';

function routesPubliees() {
  const routes = new Set(['/']);
  const cats = fs.readFileSync('src/data/categories.ts', 'utf8');
  for (const m of cats.matchAll(/slug:\s*'([^']+)'/g)) routes.add(`/${m[1]}/`);
  const parcourir = (dossier) => {
    if (!fs.existsSync(dossier)) return;
    for (const f of fs.readdirSync(dossier, { withFileTypes: true })) {
      const p = path.join(dossier, f.name);
      if (f.isDirectory()) parcourir(p);
      else if (f.name.endsWith('.md')) {
        const source = fs.readFileSync(p, 'utf8');
        if (/^draft:\s*true\s*$/m.test(source)) continue;
        const rel = path.relative(BASE_ARTICLES, p).replace(/\\/g, '/').replace(/\.md$/, '');
        routes.add(`/${rel}/`);
      }
    }
  };
  parcourir(BASE_ARTICLES);
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
