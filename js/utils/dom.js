//funzione che al caricamento della pagina verifichi che il titolo sia corretto in caso lo corregge

export const fixTitle = () => {
    const title = document.getElementById("header");
    if(title.innerText === "Movie App"){
        return;
    }
    else{
        title.innerText = "Movie App";
    }
};

//funzione che al caricamento della pagina aggiunga il paragrafo col titolo di un film

export const addParagraph = () => {
    const title = document.getElementById("titolo");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Indiana Jones";
    title.appendChild(paragraph);
};