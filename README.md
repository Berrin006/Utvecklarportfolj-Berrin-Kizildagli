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

* Responsivitet: Mobile-First-strategi med omfattande CSS Media Queries (`responsivedesign.css`). Layouten anpassar sig flytande till alla enheter, inklusive omstrukturering av navbar och footer på små skärmar.
* Layout: Användning av `display: flex`. Flexbox används i stor utsträckning för att centrera innehåll, bygga navigationsmenyer och hantera gallerier.

1. Formulärvalidering och Felhantering

Formulärvalideringen i `app.js` är designad för att garantera en hög data-kvalitet och användarupplevelse.

* Korrekt Data: Klient-sidans JavaScript-validering på alla obligatoriska fält. Förhindrar inlämning vid tomma fält, ogiltigt e-postformat och för korta texter.
* Varningstexter: Realtidsvalidering och tydliga felmeddelanden. Relevanta varningstexter visas under respektive fält, och det felaktiga fältet markeras visuellt med en röd kant.
* Testning: Robusta kontroller i `app.js` garanterar att endast korrekt formaterad data kan skickas.

3. Extern API-Integration

* Väder API: Asynkron hämtning av data från OpenWeatherMap API i `app.js`. Resultatet (temperatur, plats, fuktighet och väderikon) konverteras och visas i en dropdown-widget i navbaren. Temperatur visas i Celsius.

4. Kodstruktur, Praktik och Tillgänglighet

* God Praxis: Användning av återanvändbara JS-funktioner (DRY) och en tydlig, semantisk HTML-struktur.
* Semantik & Robusthet: Korrekta HTML5-element (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) och rubriktaggar säkerställer att strukturen är meningsfull för skärmläsare och sökmotorer.
* WCAG-Tillgänglighet: `alt`-attribut på alla meningsfulla bilder och `aria-label` på länkikoner utan text (t.ex. i footern) för bättre upplevelse för skärmläsare.
* Professionell Klass: Genomförandet med API-integration, detaljerad validering, och den omfattande dokumentationen (README och WCAG-rapport) bidrar till professionell klass.
* WCAG-Rapport: En separat PDF-rapport har skapats för att i detalj förklara hur WCAG 2.1 AA-standarder har applicerats i projektet.

---

Tekniker som använts

* HTML5: För sidans semantiska struktur.
* CSS3: För styling, animationer, och responsivitet.
* JavaScript: För API-integration och formulärinteraktivitet.
* OpenWeatherMap API: För extern datahämtning.
* Font Awesome: För ikoner.

---

Git & Dokumentation

* Git Commits: Projektets utveckling har hanterats med Git, där meningsfulla commit-meddelanden.
* WCAG Rapport: En separat PDF-rapport är skapad och inlämnad.