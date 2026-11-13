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

const serviciesCard = document.querySelector('#card-servizi');

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

const darkMode = document.querySelector('#dark-mode');

// funzione bottone dark mode
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