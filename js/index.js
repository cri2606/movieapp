import {getTrending, getTrendingMovies, getTrendingPeople, getTrendingTV} from "./api/trendingGetters.js";
import {getSearchActor} from "./api/searchGetters.js";
export { getTrendingMovies } from "./api/trendingGetters.js";
//importare la chiave e configurarla
/**poster_path
 * title
 * vote_average
 * media_type
 * release_date
 * id
 */

const trendingData = getTrending().then((data) => {
    data.results.forEach(element => {
        switch(element.media_type){
            case "movie":
                console.log(`Poster Path:${element.poster_path}\n Title:${element.title}\nVote Avg:${element.vote_average}\nMedia Type:${element.media_type}\nRelease Date:${element.release_date}\nID:${element.id}`);
            break;
        }
    });
});
const trendingMovies = getTrendingMovies().then((data) => {
    console.log(data)
});
const trendingPeople = getTrendingPeople().then((data) => {
    console.log(data)
});
const trendingTV = getTrendingTV().then((data) => {
    console.log(data)
});;
const searchActor = getSearchActor("clooney").then((data) => {
    console.log(data)
});