
# progetto-settimana-6

# Atelier — Studio di Architettura

### Progetto realizzato individualmente da Miriam Caridi

Questa repository contiene il codice sorgente di **Atelier**, un sito web responsive dedicato a uno studio di architettura, realizzato utilizzando HTML5, CSS3, JavaScript e Bootstrap 5 nell'ambito del percorso formativo EPICODE.

Il progetto ha lo scopo di presentare uno studio di architettura, descrivere i servizi offerti e permettere agli utenti di compilare un modulo di contatto.

L'interfaccia è progettata per adattarsi a dispositivi mobili, tablet e desktop, offrendo una navigazione semplice e intuitiva.

---

## Indice

- [Funzionalità](#funzionalità)
- [Anteprima](#anteprima)
- [Tecnologie utilizzate](#tecnologie-utilizzate)
- [Come eseguire il progetto in locale](#come-eseguire-il-progetto-in-locale)
- [Struttura del progetto](#struttura-del-progetto)
- [Architettura](#architettura)
- [Albero del DOM](#albero-del-dom)
- [Come funziona](#come-funziona)
- [Responsive design](#responsive-design)
- [Aspetto grafico](#aspetto-grafico)
- [Convenzioni di codice](#convenzioni-di-codice)
- [Sviluppo individuale](#sviluppo-individuale)

---

## Funzionalità

Il sito presenta un'interfaccia moderna, responsive e interattiva, suddivisa in sei aree principali.

1. **Header e navigazione:** barra di navigazione con logo Atelier, collegamenti alle sezioni e pulsante per cambiare il tema.
2. **Hero:** sezione introduttiva con titolo, descrizione dello studio e pulsante per raggiungere il modulo di contatto.
3. **Servizi:** visualizzazione dinamica di tre card contenenti emoji, titolo e descrizione dei servizi.
4. **Lavori:** visualizzazione dinamica di sei card contenenti immagine, titolo e anno, con filtri per categoria.
5. **Contatti:** modulo di contatto con campi obbligatori, validazione dell'email, messaggio di conferma e reset.
6. **Footer:** informazioni sullo studio, collegamenti alle sezioni e recapiti.

### Funzionalità principali

- **Navbar responsive:** la navigazione si adatta alle dimensioni dello schermo e utilizza un menu hamburger sui dispositivi più piccoli.
- **Navigazione interna:** i collegamenti permettono di raggiungere direttamente le sezioni della pagina.
- **Scorrimento fluido:** la proprietà `scroll-behavior: smooth` permette una navigazione più gradevole.
- **Dark mode:** un pulsante permette di alternare il tema chiaro e quello scuro attraverso gli attributi Bootstrap.
- **Card dinamiche:** i servizi e i lavori sono memorizzati in array di oggetti JavaScript e generati tramite manipolazione del DOM.
- **Filtri dei lavori:** quattro pulsanti permettono di visualizzare tutti i progetti oppure soltanto quelli appartenenti a una determinata categoria.
- **Event delegation:** un unico evento `click` gestisce i pulsanti dei filtri.
- **Aggiornamento dinamico:** le card vengono ricreate in base al filtro selezionato senza ricaricare la pagina.
- **Effetti hover:** le card si sollevano leggermente al passaggio del mouse, con un aumento dell'ombra.
- **Form di contatto:** permette di inserire nome, email, servizio richiesto e messaggio.
- **Validazione email:** controlla il formato dell'indirizzo attraverso una Regular Expression.
- **Feedback di validazione:** utilizza le classi Bootstrap `is-valid` e `is-invalid`.
- **Messaggio di conferma:** viene generato dinamicamente un alert Bootstrap dopo l'invio valido del form.
- **Chiusura alert:** il messaggio contiene un pulsante per la chiusura.
- **Reset del form:** dopo l'invio, i campi vengono ripristinati ai valori iniziali.

**Nota:** il form attualmente simula la ricezione della richiesta nell'interfaccia. Non è ancora collegato a un backend o a un servizio di invio email.

---

## Anteprima

Il progetto comprende le seguenti sezioni:

- **Header:** logo Atelier, menu di navigazione e pulsante per il tema scuro.
- **Hero:** presentazione dello studio con il titolo "Architettura per spazi che parlano".
- **Servizi:** tre card responsive dedicate alle attività dello studio.
- **Lavori:** sei progetti presentati attraverso card dinamiche, con filtri per categoria.
- **Contatti:** modulo di richiesta informazioni.
- **Footer:** informazioni, link e recapiti.

## Tecnologie utilizzate

### HTML5

Utilizzato per definire la struttura della pagina, organizzare le sezioni, creare il form e gestire gli elementi dell'interfaccia.

### CSS3

Utilizzato per personalizzare l'aspetto grafico attraverso:

- Colori HSL.
- Flexbox.
- Pseudo-classi `:hover`.
- Transizioni CSS.
- Ombre e bordi.
- Altezza minima delle sezioni.
- Scorrimento fluido.
- Personalizzazione dei pulsanti.
- Stile dei pulsanti dei filtri.

### Bootstrap 5

Framework CSS utilizzato per realizzare il layout responsive e gestire diversi componenti grafici.

Componenti e utility principali:

- `container` e `container-fluid`
- `row` e `col`
- `navbar` e `navbar-toggler`
- `card` e `card-body`
- `card-img-top`
- `btn`
- `form-control` e `form-select`
- `form-label`
- `alert` e `alert-dismissible`
- `shadow-sm`
- `rounded-3`
- `d-flex`
- `flex-wrap`
- `gap-2`
- `justify-content-center`
- `align-items-center`
- `text-center`
- `col-12` e `col-md-4`
- `is-valid` e `is-invalid`

### JavaScript ES6+

Utilizzato per gestire le funzionalità dinamiche della pagina:

- Array di oggetti.
- `forEach()`.
- `filter()`.
- `querySelector()`.
- `querySelectorAll()`.
- `createElement()`.
- `classList.add()` e `classList.remove()`.
- `textContent`.
- `append()`.
- `setAttribute()` e `getAttribute()`.
- `addEventListener()`.
- `preventDefault()`.
- `closest()`.
- `contains()`.
- `e.target`.
- `button.id`.
- `reset()`.
- Regular Expressions.
- Condizioni `if / else`.
- Funzioni con parametri.
- Event delegation.

---

## Come eseguire il progetto in locale

1. Scaricare o clonare la repository GitHub del progetto.
2. Aprire la cartella del progetto con Visual Studio Code.
3. Verificare che siano presenti `index.html` e la cartella `assets`.
4. Aprire `index.html` nel browser oppure utilizzare l'estensione **Live Server** di VS Code.
5. Verificare la connessione Internet per il caricamento delle risorse Bootstrap tramite CDN.

Il progetto non richiede l'installazione di dipendenze tramite npm.

---

## Struttura del progetto

La repository è organizzata nel seguente modo:

```text
progetto-studio-architettura/
│
├── index.html
├── README.md
│
└── assets/
    │
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js
```

### Descrizione dei file

**index.html**

Contiene la struttura della pagina, le sezioni principali, il contenitore dei filtri, il form e i collegamenti ai file CSS, JavaScript e Bootstrap.

**assets/css/style.css**

Contiene le personalizzazioni grafiche non gestite direttamente dalle classi Bootstrap, come colori, transizioni, hover, dimensioni e stile dei pulsanti dei filtri.

**assets/js/script.js**

Contiene le funzionalità JavaScript relative alla generazione delle card, al filtraggio dei lavori, alla validazione dell'email, alla gestione del form e al cambio di tema.

**README.md**

Contiene la documentazione del progetto, le tecnologie utilizzate e la descrizione delle funzionalità.

---

## Architettura

Il progetto utilizza una struttura basata sulla separazione tra HTML, CSS e JavaScript.

### 1. Struttura HTML

Il file `index.html` definisce gli elementi principali dell'interfaccia.

Bootstrap viene importato tramite CDN e utilizzato per il layout e i componenti.

### 2. Stile CSS

Il file `style.css` personalizza gli elementi HTML e i componenti Bootstrap.

Sono utilizzati selettori di elemento, ID, classi e pseudo-classi.

### 3. Logica JavaScript

Il file `script.js` gestisce le interazioni dell'utente e la generazione dinamica degli elementi.

La logica si basa principalmente su:

**Dati → Creazione elementi → Inserimento nel DOM → Gestione eventi**

Le informazioni dei servizi e dei lavori vengono memorizzate in array, trasformate in elementi HTML e inserite nella pagina.

Gli eventi permettono di gestire i filtri dei lavori, la validazione, l'invio del form e il cambio di tema.

---

## Albero del DOM

La seguente rappresentazione mostra una versione semplificata della struttura HTML e degli elementi generati dinamicamente.

```text
body
│
├── header
│   └── div.container
│       └── nav.navbar
│           └── div.container-fluid
│               ├── a.navbar-brand → Atelier
│               ├── button.navbar-toggler
│               │   └── span.navbar-toggler-icon
│               │
│               └── div#navbarNavAltMarkup.navbar-collapse
│                   └── div.navbar-nav
│                       ├── a.nav-link → Studio
│                       ├── a.nav-link → Servizi
│                       ├── a.nav-link → Lavori
│                       ├── a.nav-link → Contatti
│                       └── button#dark-mode → Tema scuro
│
├── hero#studio
│   ├── h1 → Architettura per spazi che parlano
│   ├── p → Descrizione dello studio
│   └── a#btn-hero → Inizia un progetto
│
├── main
│   │
│   ├── section#servizi
│   │   ├── h2 → I nostri servizi
│   │   ├── p → Descrizione dei servizi
│   │   │
│   │   └── div#card-servizi.row
│   │       └── article (generato in JS × 3)
│   │           └── div.card
│   │               └── div.card-body
│   │                   ├── p → Emoji
│   │                   ├── h5.card-title → Titolo
│   │                   └── p.card-text → Descrizione
│   │
│   ├── section#lavori
│   │   ├── h2 → I nostri lavori
│   │   ├── p → Descrizione dei lavori
│   │   │
│   │   ├── div#filtri
│   │   │   ├── button#tutti → Tutti
│   │   │   ├── button#residenziale → Residenziale
│   │   │   ├── button#interior-design → Interior design
│   │   │   └── button#ristrutturazioni → Ristrutturazioni
│   │   │
│   │   └── div#card-lavori.row
│   │       └── article (generato in JS × 6 inizialmente)
│   │           └── div.card
│   │               ├── img.card-img-top → Immagine
│   │               └── div.card-body
│   │                   ├── h5.card-title → Titolo
│   │                   └── p.card-text → Anno
│   │
│   └── section#contatti
│       ├── h2 → Contattaci
│       ├── p → Descrizione
│       │
│       └── form#form
│           ├── label → Nome
│           ├── input#nome
│           │
│           ├── label → Email
│           ├── input#email
│           ├── div.invalid-feedback
│           │
│           ├── label → Servizio
│           ├── select#servizio
│           │   ├── option → Residenziale
│           │   ├── option → Interior design
│           │   └── option → Ristrutturazioni
│           │
│           ├── label → Messaggio
│           ├── textarea#messaggio
│           │
│           ├── button#btn-form → Invia richiesta
│           │
│           └── div.alert (generato in JS)
│               ├── Testo di ringraziamento
│               └── button.btn-close
│
└── footer
    └── div.container
        │
        ├── div.row
        │   │
        │   ├── div.col-12.col-md-4
        │   │   ├── p → Atelier
        │   │   ├── p → Studio di architettura
        │   │   └── p → Indirizzo
        │   │
        │   ├── div.col-12.col-md-4
        │   │   ├── p → Link
        │   │   ├── p → Studio
        │   │   ├── p → Servizi
        │   │   └── p → Contatti
        │   │
        │   └── div.col-12.col-md-4
        │       ├── p → Contatti
        │       ├── p → Email
        │       └── p → Telefono
        │
        ├── hr
        └── p → Copyright © 2026 Atelier
```

---

## Come funziona

### 1. Header e navigazione

L'header contiene una navbar Bootstrap con il nome dello studio e quattro collegamenti:

- Studio
- Servizi
- Lavori
- Contatti

Ogni collegamento utilizza un attributo `href` associato all'ID della relativa sezione.

La navbar utilizza le classi `navbar` e `navbar-expand-md`.

Su schermi di larghezza inferiore a 768px, i collegamenti vengono raccolti in un menu hamburger.

Il menu viene gestito attraverso il componente Collapse di Bootstrap.

L'header utilizza inoltre:

```css
position: sticky;
top: 0;
z-index: 1000;
```

Queste proprietà permettono alla barra di navigazione di rimanere visibile nella parte superiore della pagina durante lo scorrimento.

### 2. Hero

La sezione introduttiva presenta lo studio attraverso un titolo, una breve descrizione e un pulsante.

Il titolo principale è:

**Architettura per spazi che parlano**

La sezione utilizza Flexbox attraverso le utility Bootstrap:

- `d-flex`
- `flex-column`
- `justify-content-center`
- `align-items-center`
- `text-center`

Il contenuto viene disposto verticalmente e centrato.

Nel CSS viene utilizzata la proprietà:

```css
min-height: 80vh;
```

La sezione occupa quindi almeno l'80% dell'altezza della finestra del browser.

Il pulsante **Inizia un progetto** è un collegamento interno alla sezione Contatti.

### 3. Servizi

La sezione presenta tre servizi principali:

1. Progettazione residenziale.
2. Interior design.
3. Ristrutturazioni.

Le card non sono scritte direttamente nell'HTML, ma vengono generate tramite JavaScript.

#### Array di oggetti

I dati vengono memorizzati nella costante `services`.

Ogni oggetto contiene quattro proprietà:

```javascript
{
    id: 1,
    emoji: "🏠",
    title: "Progettazione residenziale",
    description: "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi."
}
```

- `id`: identificativo del servizio.
- `emoji`: icona rappresentativa.
- `title`: nome del servizio.
- `description`: descrizione del servizio.

#### Generazione dinamica delle card

Il metodo `forEach()` itera l'array `services`.

Per ogni oggetto vengono creati:

- Un elemento `article`.
- Un contenitore `div.card`.
- Un contenitore `div.card-body`.
- Un paragrafo per l'emoji.
- Un titolo `h5`.
- Un paragrafo per la descrizione.

Gli elementi vengono creati utilizzando `document.createElement()`.

I contenuti vengono assegnati attraverso `textContent`.

Le classi Bootstrap vengono applicate con `classList.add()`.

Infine, attraverso `append()`, gli elementi vengono inseriti nei rispettivi contenitori fino a raggiungere il contenitore principale `#card-servizi`.

#### Layout responsive

Ogni card viene inserita in una colonna con le classi:

```javascript
article.classList.add('col-12', 'col-md-4');
```

Queste classi permettono di visualizzare:

- Una card per riga sui dispositivi mobili.
- Tre card affiancate a partire da 768px.

La classe `h-100` permette alle card della stessa riga di mantenere la stessa altezza.

#### Effetto hover

Le card utilizzano una transizione CSS:

```css
.card {
    transition: transform 150ms ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12) !important;
    }
}
```

Quando il puntatore passa sopra una card, questa si sposta di 5px verso l'alto e l'ombra diventa più evidente.

### 4. Lavori

La sezione **I nostri lavori** presenta sei progetti realizzati dallo studio di architettura, suddivisi in tre categorie:

- Residenziale
- Interior design
- Ristrutturazioni

Ogni progetto viene visualizzato attraverso una card Bootstrap contenente un'immagine placeholder, il titolo e l'anno di realizzazione.

#### Array di oggetti

I dati dei progetti sono memorizzati nell'array `works`.

Ogni oggetto contiene cinque proprietà:

- `id`: identificativo univoco del progetto.
- `title`: nome del progetto.
- `year`: anno di realizzazione.
- `category`: categoria di appartenenza.
- `image`: percorso o URL dell'immagine.

La proprietà `category` viene utilizzata per filtrare i progetti.

#### Generazione dinamica delle card

Le card vengono generate tramite la funzione `renderWorks(array)`, che riceve come parametro un array di progetti.

La funzione utilizza:

- `textContent = ''` per svuotare il contenitore prima di aggiornare le card.
- `forEach()` per scorrere gli elementi dell'array.
- `createElement()` per creare dinamicamente gli elementi HTML.
- `classList.add()` per applicare le classi Bootstrap.
- `append()` per inserire gli elementi nel DOM.

All'inizializzazione viene richiamata:

```javascript
renderWorks(works);
```

Questo permette di mostrare tutti e sei i progetti quando la pagina viene caricata.

La funzione può essere richiamata più volte con array differenti, evitando di riscrivere il codice di creazione delle card.

#### Filtri per categoria

Sopra le card sono presenti quattro pulsanti:

- **Tutti:** visualizza tutti i progetti.
- **Residenziale:** mostra soltanto i progetti residenziali.
- **Interior design:** mostra soltanto i progetti di interior design.
- **Ristrutturazioni:** mostra soltanto i progetti di ristrutturazione.

I pulsanti sono contenuti nell'elemento HTML con ID `filtri`.

Il filtraggio viene effettuato attraverso il metodo JavaScript `filter()`, che restituisce un nuovo array contenente soltanto gli oggetti appartenenti alla categoria selezionata, senza modificare l'array originale.

#### Funzionamento dei filtri con JavaScript

La sezione Lavori permette all'utente di filtrare dinamicamente i progetti in base alla categoria selezionata, senza ricaricare la pagina.

Il sistema utilizza quattro elementi principali:

- `addEventListener()`
- `closest()`
- `filter()`
- `renderWorks()`

**1. Gestione degli eventi con `addEventListener()`**

Anziché assegnare un evento `click` a ciascuno dei quattro pulsanti, viene utilizzata la tecnica dell'**event delegation**.

Un unico `addEventListener()` viene associato al contenitore `#filtri`, che racchiude tutti i pulsanti.

Grazie alla propagazione degli eventi, chiamata **event bubbling**, il contenitore può intercettare i click effettuati sui pulsanti al suo interno.

Questo approccio permette di evitare codice ripetitivo e semplifica la gestione dei filtri.

**2. Individuazione del pulsante con `e.target.closest()`**

Quando viene effettuato un click, `e.target` identifica l'elemento HTML effettivamente selezionato.

Il metodo:

```javascript
const button = e.target.closest('button');
```

cerca il pulsante più vicino, partendo dall'elemento cliccato e risalendo ai suoi elementi genitori.

Questo permette di individuare correttamente il pulsante anche quando l'utente clicca su un elemento contenuto al suo interno.

Successivamente, attraverso:

```javascript
button.id
```

viene recuperato l'ID del pulsante, che identifica il filtro selezionato.

Viene inoltre eseguito un controllo:

```javascript
if (!button || !filtri.contains(button)) return;
```

La condizione verifica che:

- `button` non sia `null`.
- Il pulsante appartenga effettivamente al contenitore `#filtri`.

Se il controllo non viene superato, `return` interrompe l'esecuzione della funzione.

**3. Selezione della categoria**

Una condizione `if / else` verifica quale pulsante è stato selezionato.

- Se viene selezionato **Tutti**, viene passato l'array originale `works` alla funzione `renderWorks()`.
- Se viene selezionata una categoria specifica, viene utilizzato il metodo `filter()` per ottenere soltanto i progetti corrispondenti.

La categoria viene recuperata attraverso l'ID del pulsante:

```javascript
let category = button.id;
```

**4. Filtraggio dei progetti con `filter()`**

Il metodo `filter()` scorre gli oggetti dell'array `works` e verifica se la proprietà `category` corrisponde alla categoria selezionata.

Esempio:

```javascript
const filteredWorks = works.filter(work => work.category === category);
```

Il metodo restituisce un **nuovo array**, contenente esclusivamente gli oggetti che soddisfano la condizione, senza modificare l'array originale.

La funzione freccia:

```javascript
work => work.category === category
```

viene eseguita per ogni oggetto dell'array.

Se la condizione restituisce `true`, l'oggetto viene inserito nel nuovo array.

Se restituisce `false`, l'oggetto viene escluso.

**5. Aggiornamento delle card con `renderWorks()`**

Dopo il filtraggio, il nuovo array viene passato alla funzione:

```javascript
renderWorks(filteredWorks);
```

La funzione:

1. Svuota il contenitore `#card-lavori` attraverso `textContent = ''`.
2. Scorre l'array ricevuto utilizzando `forEach()`.
3. Crea dinamicamente le card tramite `createElement()`.
4. Applica le classi Bootstrap con `classList.add()`.
5. Inserisce gli elementi nel DOM utilizzando `append()`.

In questo modo vengono mostrate soltanto le card appartenenti alla categoria selezionata.

Quando l'utente clicca nuovamente su **Tutti**, la funzione riceve l'array originale e ripristina la visualizzazione completa dei sei progetti.

**Risultato finale**

L'utilizzo combinato di event delegation, `closest()`, `filter()` e `renderWorks()` permette di creare un sistema di filtraggio dinamico, mantenendo il codice organizzato, riutilizzabile e facilmente modificabile.

#### Layout responsive

Le card utilizzano il sistema Grid di Bootstrap:

- `col-12`: una card per riga sui dispositivi mobili.
- `col-md-4`: tre card per riga a partire da 768px.
- `h-100`: altezza uniforme delle card.
- `shadow-sm`: ombra leggera.
- `rounded-3`: angoli arrotondati.

Anche i pulsanti dei filtri si adattano alle dimensioni dello schermo grazie alle utility Bootstrap.

La disposizione utilizza Flexbox per mantenere i pulsanti allineati e consentire il ritorno a capo sui dispositivi più piccoli.

#### Personalizzazione grafica

I pulsanti dei filtri utilizzano una classe CSS personalizzata `btn-filter`, con colori marroni coerenti con la palette del sito.

Il colore principale utilizzato è:

```css
background-color: hsl(20, 30%, 35%);
```

Al passaggio del mouse viene applicata una tonalità più scura:

```css
background-color: hsl(20, 30%, 27%);
```

Sono presenti effetti hover con transizioni che rendono più fluida l'interazione.

Le card mantengono lo stesso stile grafico della sezione Servizi, garantendo uniformità visiva tra le sezioni.

### 5. Form di contatto

La sezione Contattaci contiene un modulo composto da quattro campi:

- **Nome:** input di testo obbligatorio.
- **Email:** input email obbligatorio.
- **Servizio:** menu a tendina con tre opzioni.
- **Messaggio:** textarea obbligatoria.

Il form utilizza le classi Bootstrap `form-control`, `form-label` e `form-select`.

Nel CSS è impostata una larghezza massima di 500px:

```css
#form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}
```

Il form rimane quindi centrato orizzontalmente nella pagina.

#### Validazione email con Regex

La validazione personalizzata viene eseguita tramite l'evento `blur`.

Questo evento viene attivato quando l'utente esce dal campo email.

La Regular Expression utilizzata è:

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Il controllo verifica la presenza di una struttura compatibile con un indirizzo email.

La funzione `.test()` restituisce un valore booleano:

- `true` se il formato corrisponde alla Regex.
- `false` se il formato non corrisponde.

In caso di email non valida, JavaScript aggiunge la classe Bootstrap `is-invalid` e rimuove `is-valid`.

In caso di email valida, viene rimossa `is-invalid` e aggiunta `is-valid`.

Il messaggio di errore è presente nell'HTML all'interno di un elemento con classe `invalid-feedback`.

La validazione controlla il formato dell'indirizzo, ma non verifica che la casella email esista realmente.

#### Invio del form

L'invio viene gestito attraverso un listener sull'evento `submit`.

La funzione `preventDefault()` impedisce il normale invio del modulo e il conseguente ricaricamento della pagina.

Successivamente viene creato dinamicamente un messaggio di conferma attraverso `createElement()`.

Il messaggio utilizza le classi Bootstrap:

```javascript
'alert', 'alert-info', 'mt-3', 'alert-dismissible'
```

Il testo mostrato è:

**Grazie! Abbiamo ricevuto la tua richiesta**

Viene inoltre creato un pulsante con classe `btn-close` e attributo `data-bs-dismiss="alert"` per consentire la chiusura del messaggio.

Il metodo `form.reset()` ripristina i valori iniziali dei campi.

Le classi di validazione dell'email vengono rimosse per riportare il campo allo stato iniziale.

### 6. Dark mode

Il progetto include un pulsante per alternare il tema chiaro e il tema scuro.

La funzionalità viene gestita tramite un evento `click`.

JavaScript legge il valore dell'attributo `data-bs-theme` presente sul `body`.

Se il valore è `light`, viene impostato `dark`.

Se il valore è diverso da `light`, viene impostato `light`.

Il testo del pulsante viene aggiornato dinamicamente:

- **Tema scuro** per attivare la modalità scura.
- **Tema chiaro** per tornare alla modalità chiara.

Il cambio di tema sfrutta il sistema di color mode di Bootstrap 5.

I componenti che utilizzano colori fissi personalizzati mantengono invece il proprio stile, salvo ulteriori regole CSS.

### 7. Footer

Il footer contiene tre gruppi di informazioni.

**Atelier**

- Nome dello studio.
- Tipologia di attività.
- Indirizzo.

**Link**

- Studio.
- Servizi.
- Contatti.

**Contatti**

- Indirizzo email.
- Numero di telefono.

La struttura utilizza Bootstrap Grid con le classi `row`, `col-12` e `col-md-4`.

Su mobile i gruppi vengono disposti verticalmente, mentre da 768px vengono affiancati.

Una linea orizzontale `<hr>` separa le informazioni dal copyright.

---

## Responsive design

Il sito è stato sviluppato utilizzando il sistema responsive di Bootstrap 5.

### Mobile — larghezza inferiore a 768px

- Navbar con menu hamburger.
- Card dei servizi disposte una sotto l'altra.
- Card dei lavori disposte una sotto l'altra.
- Pulsanti dei filtri adattabili alla larghezza disponibile.
- Footer organizzato verticalmente.
- Form adattato alla larghezza disponibile.
- Contenuti centrati e spaziature gestite tramite utility Bootstrap.

### Tablet e desktop — da 768px

- Navbar con collegamenti visibili orizzontalmente.
- Tre card dei servizi affiancate.
- Tre card dei lavori per riga.
- Pulsanti dei filtri disposti orizzontalmente quando lo spazio è sufficiente.
- Footer suddiviso in tre colonne.
- Form centrato con larghezza massima di 500px.

Le classi responsive permettono di modificare il layout senza dover scrivere media query personalizzate per ogni elemento.

---

## Aspetto grafico

Il sito presenta uno stile elegante e minimale, ispirato all'ambito dell'architettura e dell'interior design.

### Palette cromatica

I colori principali sono definiti attraverso il modello HSL.

**Header e footer**

```css
background-color: hsl(20, 20%, 15%);
```

Un marrone molto scuro utilizzato per dare continuità visiva alla pagina.

**Hero e pulsante del form**

```css
background-color: hsl(20, 30%, 35%);
```

Un marrone caldo utilizzato per evidenziare gli elementi principali.

**Hover dei pulsanti**

```css
background-color: hsl(20, 30%, 27%);
```

Una tonalità più scura che segnala l'interazione dell'utente.

### Card

Le card presentano:

- Sfondo chiaro.
- Bordi delicati.
- Angoli arrotondati.
- Ombre leggere.
- Emoji rappresentative nella sezione Servizi.
- Immagini placeholder nella sezione Lavori.
- Effetto di sollevamento al passaggio del mouse.

### Filtri dei lavori

I pulsanti della sezione Lavori utilizzano la palette marrone del progetto.

La personalizzazione grafica comprende:

- Colore di sfondo marrone.
- Testo bianco.
- Bordi coordinati.
- Transizioni CSS.
- Effetto hover con colore più scuro.
- Leggero spostamento verticale al passaggio del mouse.

### Form

Il form presenta campi organizzati verticalmente, label allineate a sinistra e un pulsante di invio.

La validazione utilizza bordi verdi e rossi per distinguere i valori validi da quelli non validi.

Il messaggio di conferma utilizza un alert Bootstrap azzurro con pulsante di chiusura.

### Tema scuro

La modalità scura permette di modificare i colori dei componenti Bootstrap compatibili con il sistema `data-bs-theme`.

La palette marrone personalizzata rimane parte dell'identità grafica del progetto.

---

## Convenzioni di codice

Durante lo sviluppo sono state adottate le seguenti convenzioni:

- **camelCase** per le variabili JavaScript, come `darkMode`, `cardBody` e `cardEmoji`.
- Nomi descrittivi per variabili e proprietà degli oggetti.
- Utilizzo di `const` per i riferimenti che non devono essere riassegnati.
- Utilizzo di `let` per le variabili che possono essere riassegnate.
- Utilizzo di `querySelector()` per selezionare gli elementi del DOM.
- Utilizzo di `addEventListener()` per gestire gli eventi.
- Utilizzo di `createElement()` per generare gli elementi dinamicamente.
- Utilizzo di `classList.add()` e `classList.remove()` per gestire le classi.
- Utilizzo di `textContent` per inserire contenuti testuali.
- Utilizzo di `append()` per costruire e inserire gli elementi.
- Utilizzo di `filter()` per filtrare gli array senza modificare i dati originali.
- Utilizzo di funzioni riutilizzabili, come `renderWorks()`.
- Utilizzo dell'event delegation per gestire più pulsanti attraverso un unico listener.
- Separazione tra struttura HTML, stile CSS e logica JavaScript.
- Commenti per descrivere le principali funzionalità.
- Utilizzo delle utility Bootstrap per ridurre il CSS personalizzato.

---

## Sviluppo individuale

### Attività svolte

**Progettazione e struttura**

- Organizzazione delle sezioni della pagina.
- Creazione della struttura HTML.
- Definizione dei collegamenti di navigazione.
- Realizzazione del modulo di contatto.
- Creazione della sezione Lavori.
- Inserimento dei pulsanti per il filtraggio dei progetti.

**Sviluppo grafico**

- Utilizzo di Bootstrap 5.
- Creazione del layout responsive.
- Personalizzazione della palette cromatica.
- Realizzazione degli effetti hover.
- Gestione di ombre, bordi e spaziature.
- Personalizzazione dei pulsanti dei filtri.

**Sviluppo JavaScript**

- Creazione dell'array dei servizi.
- Creazione dell'array dei lavori.
- Generazione dinamica delle card.
- Realizzazione della funzione `renderWorks()`.
- Implementazione dei filtri con `filter()`.
- Gestione dei click attraverso l'event delegation.
- Utilizzo di `closest()` per individuare il pulsante selezionato.
- Aggiornamento dinamico delle card in base alla categoria.
- Manipolazione del DOM.
- Implementazione della validazione email.
- Gestione dell'evento `submit`.
- Creazione dinamica dell'alert.
- Reset del modulo.
- Implementazione della dark mode.

**Organizzazione del progetto**

- Separazione dei file HTML, CSS e JavaScript.
- Organizzazione delle cartelle `assets`.
- Documentazione delle funzionalità attraverso il README.

### Obiettivo formativo

Il progetto ha permesso di consolidare le conoscenze acquisite su HTML, CSS, Bootstrap e JavaScript, applicandole alla realizzazione di un sito web completo dal punto di vista dell'interfaccia.

Particolare attenzione è stata dedicata alla creazione dinamica degli elementi, alla gestione degli eventi, alla validazione dei form e all'utilizzo del sistema responsive di Bootstrap.

La realizzazione della sezione Lavori ha inoltre permesso di approfondire:

- La gestione degli array di oggetti.
- L'utilizzo del metodo `filter()`.
- La creazione di funzioni riutilizzabili.
- L'event delegation.
- La propagazione degli eventi nel DOM.
- L'utilizzo di `e.target` e `closest()`.
- L'aggiornamento dinamico degli elementi HTML.

**Progetto sviluppato individualmente da Miriam Caridi — EPICODE, 2026.**
