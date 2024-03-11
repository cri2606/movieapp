export const createTrendingMoviesList = (movieData, listID) => {
    const list = document.getElementById(listID);
    movieData.forEach((element) => {
        const listElement = document.createElement("li");
        if(listID === "trending-movies-list"){
            listElement.textContent = element.title;
        }            
        else{
            listElement.textContent = element.name;
        }            
        list.appendChild(listElement);
    });
};