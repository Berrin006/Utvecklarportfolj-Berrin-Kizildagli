Utvecklarportfölj – Berrin Kizildagli

Detta är min personliga utvecklarportfölj, byggd som ett självständigt Frontend-projekt i kursen Webbutveckling. Målet har varit att demonstrera djupa kunskaper inom HTML, CSS och JavaScript, samt att leverera en produkt som uppfyller höga krav på responsivitet, tillgänglighet (WCAG) och god praxis.

Länk till Live Demo: [Fyll i live-länk här]
Länk till Projektets Github Repository: [Privat repository]

---

Projektets Huvudfunktioner

Portföljen är uppdelad i tydliga sektioner och uppfyller alla obligatoriska krav i projektbeskrivningen:

* Porträttbild: Personlig presentation.
* CV-knapp: Knapp för nedladdning av CV-fil.
* Navbar: Tydlig navigationsbar (`<nav>`) för enkel sidnavigering.
* Sociala Länkar: Länkar till sociala medier och GitHub.
* About Me: Introduktionssektion.
* Kunskaper (Skills): Redovisning av teknologier med ikoner.
* Portfölj (Projects): Sektion med länkar till projekt (kod och demo).
* Referenser: Sektion med rekommendation (testimonial).
* Kontaktform: Komplett kontaktformulär.
* Footer: Avslutande sektion med kontaktinfo och copyright.

---

Tekniska Implementationer & Uppfyllda Krav

Projektet bygger på ren HTML5, CSS3 och JavaScript, med fokus på modern standard och robusthet.

1. Responsiv Design & Layout

* Responsivitet: Media queries i `responsivedesign.css` anpassar layouten för mobil, surfplatta och desktop. Navigeringen använder en tillgänglig hamburgermeny på mindre skärmar.
* Layout: CSS Grid och Flexbox används för responsiva projektkort, färdighetsikoner, navigering och sidsektioner.

1. Formulärvalidering och Felhantering

Formulärvalideringen i `app.js` är designad för att garantera en hög data-kvalitet och användarupplevelse.

* Korrekt Data: Klient-sidans JavaScript-validering på alla obligatoriska fält. Förhindrar inlämning vid tomma fält, ogiltigt e-postformat och för korta texter.
* Varningstexter: Realtidsvalidering och tydliga felmeddelanden. Relevanta varningstexter visas under respektive fält, och det felaktiga fältet markeras visuellt med en röd kant.
* Testning: Robusta kontroller i `app.js` garanterar att endast korrekt formaterad data kan skickas.

3. Kodstruktur, Praktik och Tillgänglighet

* God Praxis: Användning av återanvändbara JS-funktioner (DRY) och en tydlig, semantisk HTML-struktur.
* Semantik & Robusthet: Korrekta HTML5-element (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) och rubriktaggar säkerställer att strukturen är meningsfull för skärmläsare och sökmotorer.
* WCAG-Tillgänglighet: `alt`-attribut på alla meningsfulla bilder och `aria-label` på länkikoner utan text (t.ex. i footern) för bättre upplevelse för skärmläsare.
* Professionell Klass: Formulärvalidering, responsiv design och tillgänglighetsdokumentation bidrar till en genomarbetad helhet.
* WCAG-Rapport: En separat PDF-rapport har skapats för att i detalj förklara hur WCAG 2.1 AA-standarder har applicerats i projektet.

---

Tekniker som använts

* HTML5: För sidans semantiska struktur.
* CSS3: För styling, animationer, och responsivitet.
* JavaScript: För mobilnavigering och formulärvalidering.
* Font Awesome: För ikoner.

---

Git & Dokumentation

* Git Commits: Projektets utveckling har hanterats med Git, där meningsfulla commit-meddelanden.
* WCAG Rapport: En separat PDF-rapport är skapad och inlämnad.