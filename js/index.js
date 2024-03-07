import {getTrending, getTrendingMovies, getTrendingPeople, getTrendingTV} from "./api/trendingGetters.js";
//import {BASEURL} from "./api/config.js";
import {getSearchActor} from "./api/searchGetters.js";

getTrending();
getTrendingMovies();
getTrendingPeople();
getTrendingTV();
getSearchActor("clooney");