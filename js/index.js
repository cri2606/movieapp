import {getTrending, getTrendingMovies, getTrendingPeople, getTrendingTV, getSearchActor} from "./api/trendingGetters.js";
import {baseUrl} from "./api/config.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingPeople(baseUrl);
getTrendingTV(baseUrl);
getSearchActor(baseUrl);