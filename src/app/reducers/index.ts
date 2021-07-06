import { ActionReducerMap } from "@ngrx/store";
import { * } from "./movies.reducer";

export interface AppState {
}
movies: fromMovies.movieState;

export const reducers: ActionReducerMap<AppState> = {
    movies: fromMovies.reducer
};