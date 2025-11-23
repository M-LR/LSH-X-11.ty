# Commandes de base Eleventy

Guide complet des commandes essentielles pour travailler avec Eleventy (11ty).

---

## Installation

### Installation globale
npm install -g @11ty/eleventy


### Installation locale (recommandée)
npm install --save-dev @11ty/eleventy

### Vérifier la version
npx @11ty/eleventy --version

---

## Commandes de build

### Build simple
npx @11ty/eleventy

### Développement avec live reload
npx @11ty/eleventy --serve

### Rebuild complet (recommandé)
rm -rf _site && npx @11ty/eleventy

Dans _data/site.json :

json
{
  "title": "Les Studios du Héron",
  "heroImage": "/assets/images/hero-studios-heron.jpg"
}

Puis dans index.njk :

xml
<img src="{{ site.heroImage }}" 
     alt="Studio de production audiovisuelle" 
     class="hero-image">