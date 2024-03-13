/**
 * createTrendingMovieList
 * 
 * la funzione prenderà in ingresso un array di movies per ogni movies aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo del movie
 * 
 * @param Array dei film
 * @returns 
 */
/*export const createTrendingList = (data, listID) => {
    // recupero il nodo con id trending-movies-list
    const list = document.getElementById(listID);
    // ciclo su ogni elemento dell'array che viene preso in ingresso come parametro
    data.forEach(element => {
          // creiamo un nuovo nodo che corrisponde a un tag <li>
          const listElement = document.createElement("li"); 
          // impostiamo il contenuto del tag li appena creato, assegnando il valore del title dell'elemento corrente in questa iterazione dell'array
          if(listID === "trending-movies-list"){
                listElement.textContent = element.title;
          } else {
                listElement.textContent = element.name; 
          }
          // appendiamo alla pagina hmtl il nuovo tag creato. Dove? sul tag recuperato
          list.appendChild(listElement);
    });
}*/

export const createCard = (data, cardID) => {
    const cardContainer = document.getElementById(cardID);
    data.forEach(element => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        const cardInner = document.createElement("div");
        cardInner.className = "card flex-column h-100";
        const cardImage = document.createElement("img");
        cardImage.alt = "backdrop";
        cardImage.className = "card-img-top";
        const textContainer = document.createElement("div");
        textContainer.className = "card-body";
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        const cardDescription = document.createElement("p");
        cardDescription.className = "card-text";
        const cardButtonContainer = document.createElement("div");
        cardButtonContainer.className = "card-button-container";
        const cardButton = document.createElement("a");
        cardButton.href = "#";
        cardButton.className = "btn btn-primary";

        if (cardID === "trendingMovies" || cardID === "trendingTV") {
            cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
            if (element.media_type === "movie")
                cardTitle.textContent = element.title;
            else
                cardTitle.textContent = element.name;
            cardDescription.textContent = element.overview;
        } else {
            if (element.profile_path !== null) {
                cardImage.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
            } else {
                // Se profile_path è null, non impostare alcuna immagine
                cardImage.style.display = "none";
            }
            cardTitle.textContent = element.name;
            cardDescription.innerHTML = `<b><i>Role:</i></b> ${element.known_for_department}<br><b><i>Popularity:</i></b> ${element.popularity}<br><b><i>Known For:</i></b>`;
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

        cardButton.textContent = "Learn More";

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

