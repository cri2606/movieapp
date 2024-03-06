import {getTrending, getTrendingMovies, getTrendingPeople, getTrendingTV} from "./api/trendingGetters.js";
import {baseUrl} from "./api/config.js";
import {getSearchActor} from "./api/searchGetters.js";

getTrending(baseUrl);
getTrendingMovies(baseUrl);
getTrendingPeople(baseUrl);
getTrendingTV(baseUrl);
getSearchActor(baseUrl, "clooney");