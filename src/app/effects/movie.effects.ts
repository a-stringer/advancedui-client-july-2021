import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from "../actions/movies.actions";
import { map } from 'rxjs/operators';
import { MovieModel } from "../reducers/movies.reducer";
@Injectable()
export class MovieEffects {


  // actions.loadMovies => (???) => actions.loadMoviesSuceeded
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovies),
      map(() => ([
        {
          id: '1', title: 'The Matrix',
        },
        {
          id: '2', title: 'The Matrix Reloaded',
        },
        {
          id: '3', title: 'The Matrix Revolutions',
        }]) as MovieModel[]),
      map((payload: MovieModel[]) => actions.loadMoviesSucceeded({ payload })

      )
    )
  );

  constructor(private actions$: Actions) { }

}
