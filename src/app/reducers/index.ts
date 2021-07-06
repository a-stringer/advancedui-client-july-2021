import { ActionReducerMap } from "@ngrx/store";
import * as fromMovies from './movies.reducer';
export interface AppState {
  movies: fromMovies.MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovies.reducer
};

const selectMoviesBranch = (state: AppState) => state.movies;

export const { selectAll: selectMovieArray } = fromMovies.adapter.getSelectors(selectMoviesBranch);
