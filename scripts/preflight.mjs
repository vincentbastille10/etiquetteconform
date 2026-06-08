#!/usr/bin/env node
// Pre-flight — vérifie la cohérence du projet avant build. Exit 1 si erreur bloquante.
import fs from 'node:fs';
const read = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } };
const exists = (p) => fs.existsSync(p);
const issues = [], warns = [];

const pkgRaw = read('package.json');
if (!pkgRaw) { console.error('❌ package.json manquant'); process.exit(1); }
const pkg = JSON.parse(pkgRaw);
const isESM = pkg.type === 'module';
const deps = JSON.stringify({ ...pkg.dependencies, ...pkg.devDependencies });

// 1. Cohérence CommonJS / ES Module sur les configs .js
for (const f of ['next.config.js', 'postcss.config.js', 'tailwind.config.js']) {
  const c = read(f);
  if (c && isESM && c.includes('module.exports'))
    issues.push(`${f} utilise module.exports dans un projet ES Module — renommer en .cjs ou convertir en export default`);
}

// 2. Fichiers essentiels Next.js
if (!exists('app') && !exists('pages') && !exists('src/app') && !exists('src/pages'))
  issues.push('Aucun dossier app/ ou pages/ (Next.js)');
if (!deps.includes('"next"')) issues.push("'next' absent des dépendances");

// 3. Compatibilité PostCSS / Tailwind
const hasTw = deps.includes('tailwindcss');
const postcss = read('postcss.config.mjs') || read('postcss.config.js');
if (postcss && /tailwindcss|autoprefixer/.test(postcss) && !hasTw)
  issues.push('postcss.config référence tailwindcss/autoprefixer non installés');
const globals = read('app/globals.css') || read('src/app/globals.css');
if (globals && globals.includes('@tailwind') && !hasTw)
  issues.push('globals.css contient @tailwind sans tailwindcss installé');

// 4. Variables d'environnement manquantes (informatif)
const env = read('.env') || read('.env.local') || '';
const example = read('.env.example') || '';
for (const line of example.split('\n')) {
  const m = line.match(/^([A-Z0-9_]+)=/);
  if (m && !env.includes(m[1] + '=')) warns.push(`Variable d'env non renseignée : ${m[1]}`);
}

// 5. Commandes npm disponibles
for (const s of ['build', 'dev']) if (!pkg.scripts?.[s]) issues.push(`Script npm manquant : ${s}`);

console.log('— Pre-flight —');
console.log('Module:', isESM ? 'ES Module' : 'CommonJS', '| Tailwind:', hasTw ? 'oui' : 'non');
if (warns.length) console.log('Warnings:\n' + warns.map(w => '  ⚠ ' + w).join('\n'));
if (issues.length) { console.error('Erreurs:\n' + issues.map(i => '  ❌ ' + i).join('\n')); process.exit(1); }
console.log('✅ Pre-flight OK');
