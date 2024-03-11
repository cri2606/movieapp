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
          const textContainer = document.createElement("div");
          const cardImage = document.createElement("img");
          cardImage.src = element.poster_path;
          cardImage.alt = "poster";
          const cardTitle = document.createElement("h5"); 
          const cardDescription = document.createElement("p"); 
          const cardButton = document.createElement("button"); 
          
          cardTitle.textContent = element.title;
          cardDescription.textContent = element.overview;
          cardButton.textContent = "Scopri di più";
          
          textContainer.appendChild(cardTitle);
          textContainer.appendChild(cardDescription);
          textContainer.appendChild(cardButton);
          card.appendChild(cardImage);
          card.appendChild(textContainer);
          
          cardContainer.appendChild(card);
    });
}
