import {options} from "./config.js";

export const getSearchActor = async (baseUrl, attore) => {
    const response = await fetch(baseUrl + `search/person?query=${attore}`, options);
    const actor = await response.json();
    return actor;
}