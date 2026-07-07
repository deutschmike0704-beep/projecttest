# Website-Grundvorlage

Statische Website mit klarer Ordnerstruktur.

## Struktur

```
├── index.html          # Startseite
├── css/
│   └── style.css       # Globales Styling
├── js/
│   └── main.js         # JavaScript
├── pages/              # Unterseiten
│   ├── about.html
│   └── contact.html
└── assets/
    ├── images/         # Bilder
    └── fonts/          # Schriftdateien
```

## Lokal öffnen

`index.html` im Browser öffnen oder:

```bash
npx serve .
```

## Anpassen

- Farben & Abstände: `css/style.css` (`:root`)
- Navigation: in jeder HTML-Datei unter `<header>`
- Neue Seite: Datei in `pages/` anlegen, Pfade `../css/` und `../js/` nutzen