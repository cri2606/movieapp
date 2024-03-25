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
          if(listID === "trending-movies-list"){
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
        const card = document.createElement("div");
        card.className = "col-12 col-md-6 col-lg-4";
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
        cardButton.className = "btn btn-dark";

        if (cardID === "trendingMovies" || cardID === "trendingTV") {
            cardImage.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
            if (element.media_type === "movie"){
                cardTitle.textContent = element.title;
                cardButton.href = `https://www.google.com/search?q=${element.title}%20(movie)`;
            }
            else{
                cardTitle.textContent = element.name;
                cardButton.href = `https://www.google.com/search?q=${element.name}%20(TV%20Series)`;
            }
            cardDescription.textContent = element.overview;
        } else {
            if (element.profile_path !== null) {
                cardImage.src = `https://image.tmdb.org/t/p/w500${element.profile_path}`;
            } else {
                // Se profile_path è null, non impostare alcuna immagine
                cardImage.src = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg";
                cardImage.style="padding-top: 25%";
                textContainer.className = "card-body";
                textContainer.style="padding-top: 30%";
            }
            cardTitle.textContent = element.name;
            cardButton.href = `https://www.google.com/search?q=${element.name}`;
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
        cardButton.target = "_blank";

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







