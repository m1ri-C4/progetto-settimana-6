const services = [
    {
        id: 1,
        emoji: "🏠",
        title: "Progettazione residenziale",
        description: "Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi."
    },
    {
        id: 2,
        emoji: "🪑",
        title: "Interior design",
        description: "Allestimenti d'interno per case e uffici, con materiali selezionati e arredo su misura."
    },
    {
        id: 3,
        emoji: "🧱",
        title: "Ristrutturazioni",
        description: "Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese."
    }
];

const works = [
    {
        id: 1,
        title: "Villa Moderna",
        year: 2025,
        category: "residenziale",
        image: "https://images.pexels.com/photos/18573914/pexels-photo-18573914.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    },
    {
        id: 2,
        title: "Casa Essenza",
        year: 2024,
        category: "interior",
        image: "https://images.pexels.com/photos/7587827/pexels-photo-7587827.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    },
    {
        id: 3,
        title: "Loft Urbano",
        year: 2025,
        category: "ristrutturazioni",
        image: "https://images.pexels.com/photos/19893586/pexels-photo-19893586.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    },
    {
        id: 4,
        title: "Villa Aurora",
        year: 2023,
        category: "residenziale",
        image: "https://images.pexels.com/photos/32647226/pexels-photo-32647226.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    },
    {
        id: 5,
        title: "Studio Forma",
        year: 2024,
        category: "interior",
        image: "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    },
    {
        id: 6,
        title: "Casa Rinascita",
        year: 2025,
        category: "ristrutturazioni",
        image: "https://images.pexels.com/photos/3952095/pexels-photo-3952095.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600"
    }
];


const serviciesCard = document.querySelector('#card-servizi');

//creazione card con le classi bootstrap
services.forEach((service) => {
    const article = document.createElement('article');
    article.classList.add('col-12', 'col-md-4');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100', 'shadow-sm', 'border', 'border-light', 'rounded-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardEmoji = document.createElement('p');
    cardEmoji.classList.add('fs-1');
    cardEmoji.textContent = service.emoji;

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title', 'fw-bold');
    cardTitle.textContent = service.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'text-muted');
    cardText.textContent = service.description;

    cardBody.append(cardEmoji, cardTitle, cardText);
    card.append(cardBody);
    article.append(card);
    serviciesCard.append(article);
});

const worksCard = document.querySelector('#card-lavori');

//funzione render con all'interno la creazione delle card lavori
function renderWorks(array) {
    worksCard.textContent = '';

    array.forEach((work) => {
        const article = document.createElement('article');
        article.classList.add('col-12', 'col-md-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100', 'shadow-sm', 'border', 'border-light', 'rounded-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = work.image;
        cardImg.alt = work.title;

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = work.title;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text', 'text-muted');
        cardText.textContent = work.year;

        cardBody.append(cardTitle, cardText);
        card.append(cardImg, cardBody);
        article.append(card);
        worksCard.append(article);
    });
}

renderWorks(works);

//filtra in base alla categoria
const filtri = document.querySelector('#filtri');

filtri.addEventListener('click', (e) => {
    e.preventDefault();

    const button = e.target.closest('button');

    if (!button || !filtri.contains(button)) return;

    if (button.id === 'tutti') {
        renderWorks(works);
    } else {
        let category = button.id;

        const filteredWorks = works.filter(
            work => work.category === category
        );

        renderWorks(filteredWorks);
    }
});


const form = document.querySelector('#form');

//reset e messaggio di ringraziamento del form con le classi bootstrap
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const thanks = document.createElement('div');
    thanks.classList.add('alert', 'alert-info', 'mt-3');
    thanks.classList.add('alert-dismissible');
    thanks.setAttribute('role', 'alert');
    thanks.textContent = 'Grazie! Abbiamo ricevuto la tua richiesta';

    const close = document.createElement('button');
    close.setAttribute('type', 'button');
    close.classList.add('btn-close', 'md-3');
    close.setAttribute('data-bs-dismiss', 'alert')
    close.setAttribute('aria-label', 'Close');

    thanks.append(close);
    form.append(thanks);
    form.reset();
    email.classList.remove('is-valid', 'is-invalid');
});

const email = document.querySelector('#email');

//validazione email con Regex e classi bootstrap
email.addEventListener('blur', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === '') {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');

    } else if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');

    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
});

const darkMode = document.querySelector('#dark-mode');

// funzione bottone dark mode con attributo bootstrap
darkMode.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.body.getAttribute('data-bs-theme') === 'light') {
        document.body.setAttribute('data-bs-theme', 'dark');
        darkMode.textContent = 'Tema chiaro';
    } else {
        document.body.setAttribute('data-bs-theme', 'light');
        darkMode.textContent = 'Tema scuro';
    }
});