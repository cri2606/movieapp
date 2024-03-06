const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

const options = {
    //method: "GET",
    headers : {
        //"Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODkwMWIyZDUwMGYxN2ExYTFiNTEyYmQ1NjgwODFkNiIsInN1YiI6IjY1ZTg2YjAxNDJmMTlmMDE2NDhjZjRiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ep5yDrqb9B6vcfumVkBsvEKLs3vk58cP0THzjqIbh40"
    },
};

export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "all/day?language=en-US", options);
    const data = await response.json();
    return data;
}

export const getTrendingMovies = async (baseUrl) => {
    const response = await fetch(baseUrl + "movie/day?language=en-US", options);
    const data = await response.json();
    return data;
}

/** getTrendingMovies
 * 
 * @parametri baseUrl
 * 
 * @returns film di tendenza
 */