# Projektuppgift i kursen DT208G, Programmering i TypeScript.
*Anton Eriksson, aner2308*

### Beskrivning
Denna README-fil dokumenterar funktionaliteten för min webbplats. Webbplatsen är skapad för slutprojektet i kursen **Programmering i TypeScript**. 

Syftet med uppgiften är att:
- Göra HTTP-anrop med Angular och HttpClient.
- Skapa services.
- Presentera data på skärmen från resultat från HTTP-anrop.
- Sortera, filtrera och söka data.
- Spara vald data i localStorage och visa den på en separat undersida.

## Lösning
### Webbsidan
Webbsidan skapades som en ny komponent med namn *home.components.html*. Routes skapades för att sätta denna sida som startsida. Om användaren försöker navigera till en route/undersida som inte finns så dirigeras man till en notFound-sida med ett 404 meddelande.

### Service
En service skapades för att hämta data från webbsidan *https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json*. För att säkerställa att datan hämtats i korrekt format skapades ett **interface**. För att hämta datan användes Angulars inbyggda HttpClient-metod. Det gjorde att jag enkelt kunde få ut datan från min URL till en array. Min service och min interface importerades sedan in i min *courses.components.ts*-fil.

### utskrift av data
Datan skrevs sedan ut med hjälp av en funktion som startar vid inladdning av webbsidan. Utskrift gjordes med hjälp av **ngFor**-metoden direkt i HTML-koden. Den går igenom alla mina element i min array med hämtad data, och skriver ut dom som separata rader i en tabell.

### Sortering av data
Sortering är gjord med hjälp av (click)-funktioner på mina tabellrubriker. Klickar man på en rubrik så körs en funktion med den kolumnen som parameter, och sorterar utefter den. Klickar man på samma kolumn två gånger i rad så vänds sorteringen från fallande till stigande. Det finns också en select-meny med utfällbara ämnen. Vid val av ett mne sorterar listan bort alla kurser som inte har med det ämnet att göra.

*Se kodkommentarer i courses.component.ts* 

### Filtrering av data
Filtrering med sökrutan är gjord med hjälp av angulars **FormsModule**. Med hjälp av den jämförs datan från mitt input-fält (konverterat till lowercase) med datan i min tabell (konverterat till lowercase). Enbart de posterna som matchar blir kvar i listan.

### Sparad data i LocalStorage
Med hjälp av en service med namn *course-storage.service.ts* skapade jag funktioner för att hämta in, lägga till, och ta bort data från localStorage. Inhämtningen körs vid initiering av webbsidan. De andra två funktionerna körs vid knapptryck. Det är då datan som är tillhörande den knappen som antingen sparas eller tas bort.

## Funktioner
- **Responsiv design**
Webbplatsen är utformad för att anpassa sig till olika skärmstorlekar.

- **Versionshantering och publicering**
Git används för versionshantering, och den färdiga webbplatsen publiceras på netlify.

## Installation
För att köra detta projekt lokalt:

1. Klona repositoryt från GitHub, och öppna det i VSC.
2. Se till att du har Angular nedladdat. Detta kan göras i nodeJS med kommandot *npm install -g @angular/cli*.
3. Installera dependencies med *'npm install'*. 
4. Starta utvecklingsservern med kommandot *'ng serve'*