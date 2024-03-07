import {OPTIONS, BASEURL} from "./config.js";

export const getSearchActor = async (attore) => {
    const response = await fetch(`${BASEURL}search/person?query=${attore}`, OPTIONS);
    const actor = await response.json();
    return actor;
}