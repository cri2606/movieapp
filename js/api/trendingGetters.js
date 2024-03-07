import {OPTIONS, BASEURL} from "./config.js";

export const getTrending = async () => {
    const response = await fetch(BASEURL + "trending/all/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
}

export const getTrendingMovies = async () => {
    const response = await fetch(BASEURL + "trending/movie/day?language=en-US", OPTIONS);
    const movie = await response.json();
    return movie;
}

export const getTrendingPeople = async () => {
    const response = await fetch(BASEURL + "trending/person/day?language=en-US", OPTIONS);
    const people = await response.json();
    return people;
}

export const getTrendingTV = async () => {
    const response = await fetch(BASEURL + "trending/tv/day?language=en-US", OPTIONS);
    const tv = await response.json();
    return tv;
}

/** getTrendingMovies
 * 
 * @parametri baseUrl
 * 
 * @returns film di tendenza
 */