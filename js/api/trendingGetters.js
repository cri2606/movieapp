import {options} from "./config.js";

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

/** getTrendingMovies
 * 
 * @parametri baseUrl
 * 
 * @returns film di tendenza
 */