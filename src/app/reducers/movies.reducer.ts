import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/movies.actions';
export interface MovieModel {
  id: string;
  title: string;
}

export interface MovieState extends EntityState<MovieModel> {

}

export const adapter = createEntityAdapter<MovieModel>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadMoviesSucceeded, (s, a) => adapter.setAll(a.payload, s))
);

export function reducer(state: MovieState = initialState, action: Action): MovieState {
  return reducerFunction(state, action);
}
