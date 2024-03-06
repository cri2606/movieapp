const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

const options = {
    //method: "GET",
    headers : {
        //"Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODkwMWIyZDUwMGYxN2ExYTFiNTEyYmQ1NjgwODFkNiIsInN1YiI6IjY1ZTg2YjAxNDJmMTlmMDE2NDhjZjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep5yDrqb9B6vcfumVkBsvEKLs3vk58cP0THzjqIbh40"
    },
};

export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/all/day?language=en-US", options);
    const data = await response.json();
    return data;
}

export const getTrendingMovies = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", options);
    const movie = await response.json();
    return movie;
}

export const getTrendingPeople = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/person/day?language=en-US", options);
    const people = await response.json();
    return people;
}

export const getTrendingTV = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/tv/day?language=en-US", options);
    const tv = await response.json();
    return tv;
}

let attore = "clooney";
export const getSearchActor = async (baseUrl) => {
    const response = await fetch(baseUrl + "search/person" + "?query=" + attore, options);
    const actor = await response.json();
    return actor;
}

/** getTrendingMovies
 * 
 * @parametri baseUrl
 * 
 * @returns film di tendenza
 */