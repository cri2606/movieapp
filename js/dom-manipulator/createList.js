/**
 * createTrendingMovieList
 * 
 * la funzione prenderà in ingresso un array di movies per ogni movies aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo del movie
 * 
 * @param Array dei film
 * @returns 
 */
export const createTrendingList = (data, listID) => {
    // recupero il nodo con id trending-movies-list
    const list = document.getElementById(listID);
    // ciclo su ogni elemento dell'array che viene preso in ingresso come parametro
    data.forEach(element => {
        // creiamo un nuovo nodo che corrisponde a un tag <li>
        const listElement = document.createElement("li");
        // impostiamo il contenuto del tag li appena creato, assegnando il valore del title dell'elemento corrente in questa iterazione dell'array
        if (listID === "trending-movies-list") {
            listElement.textContent = element.title;
        } else {
            listElement.textContent = element.name;
        }
        // appendiamo alla pagina hmtl il nuovo tag creato. Dove? sul tag recuperato
        list.appendChild(listElement);
    });
}

export const createCard = (data, cardID) => {
    const cardContainer = document.getElementById(cardID);
    data.forEach(element => {

        //creazione elementi
        const card = document.createElement("div");
        const cardInner = document.createElement("div");
        const cardImage = document.createElement("img");
        const textContainer = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardDescription = document.createElement("p");
        const cardButtonContainer = document.createElement("div");
        const cardButton = document.createElement("a");

        //classi CSS
        card.className = "mx-5";
        cardInner.className = "card flex-column h-100";
        cardImage.className = "card-img-top";
        textContainer.className = "card-body";
        cardTitle.className = "card-title";
        cardDescription.className = "card-text";
        cardButtonContainer.className = "card-button-container";
        cardButton.className = "button";

        //se non riesci a mostrare l'immagine
        cardImage.alt = "backdrop";

        //stile del bottone
        cardButton.innerHTML = "Learn More";
        cardButton.style = "color: #1e9bff;";
        cardButton.target = "_blank";

        if (cardID === "trendingMovies" || cardID === "trendingTV") {
            cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
            if (element.media_type === "movie") {
                cardTitle.textContent = element.title;
                cardButton.href = `https://www.google.com/search?q=${element.title}%20(movie)`;
            }
            else {
                cardTitle.textContent = element.name;
                cardButton.href = `https://www.google.com/search?q=${element.name}%20(TV%20Series)`;
            }
            cardDescription.textContent = element.overview;
        } else {
            if (element.profile_path !== null) {
                cardImage.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
            } else {
                //se profile_path è null, imposta immagine di utente senza foto profilo
                cardImage.src = "./assets/user.png";

                //imposta lo stile dell'immagine per mantenere il textContainer allineato
                cardImage.style = "padding-top: 25%; background-color: transparent;";
                textContainer.style = "padding-top: 30%";
            }
            cardTitle.textContent = element.name;
            cardButton.href = `https://www.google.com/search?q=${element.name}`;
            cardDescription.innerHTML = `<b><i>Role:</i></b> ${element.known_for_department}<br><b><i>Popularity:</i></b> ${element.popularity}<br><b><i>Known For:</i></b>`;
            
            //mostra un elenco dei film più gettonati dell'attore in questione
            if (element.known_for) {
                const knownForList = document.createElement("ul");
                element.known_for.forEach((item) => {
                    const listItem = document.createElement("li");
                    if (item.media_type === "movie")
                        listItem.textContent = item.title;
                    else
                        listItem.textContent = item.name;
                    knownForList.appendChild(listItem);
                });
                cardDescription.appendChild(knownForList);
            }
        }

        //aggiungi gli elementi delle cards alla pagina
        textContainer.appendChild(cardTitle);
        textContainer.appendChild(cardDescription);
        cardInner.appendChild(cardImage);
        cardInner.appendChild(textContainer);
        card.appendChild(cardInner);
        cardButtonContainer.appendChild(cardButton);
        cardInner.appendChild(cardButtonContainer);
        cardContainer.appendChild(card);
    });
}







