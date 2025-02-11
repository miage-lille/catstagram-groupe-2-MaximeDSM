import { Cmd, Loop, liftState, loop } from 'redux-loop';
import { compose } from 'redux';
import { Actions } from './types/actions.type';
import { Picture } from './types/picture.type';
import data from './fake-datas.json'
import { cmdFetch } from './commands';
import { fetchCatsRequest } from './actions';
import ApiResponse from './types/api.type';

export type State = {
  counter: number,
  pictures: ApiResponse,
  selected: Picture | null
}

export const defaultState: State = {
  counter: 4,
  pictures: { type : "SUCCESS",  payload : []},
  selected : null
}

export const reducer = (state: State | undefined, action: Actions) : State => {
  if (!state) return defaultState; // mandatory by redux
  let tmpPictures : Array<Picture>
  switch (action.type) {
    case 'INCREMENT':
      let pictureIndex : number = Math.floor(Math.random() * (9));
      switch (state.pictures.type) {
        case ("SUCCESS") :
          
          return { ...state, counter: state.counter + 1, pictures: state.pictures.concat([data[pictureIndex]]), selected : state.selected};
      }
    case 'DECREMENT':
      if (counterSelector(state) >= 4) {
        tmpPictures = state.pictures.slice(0, counterSelector(state) - 1);
        return { ...state, counter: state.counter - 1, pictures: tmpPictures, selected : state.selected};
      }
      else
        return { ...state, counter: state.counter, pictures: state.pictures, selected : state.selected};
    case 'SELECT_PICTURE':
      console.log("passe");
      if (state.selected === action.picture)
        return { ...state, counter: state.counter, pictures: state.pictures, selected : null} 
      else
        return { ...state, counter: state.counter, pictures: state.pictures, selected : action.picture} 
    case 'CLOSE_MODAL':
      throw 'Not Implemented';
    case 'FETCH_CATS_REQUEST':
      return loop(state, cmdFetch(fetchCatsRequest()))[0];
    case 'FETCH_CATS_COMMIT':
      return { ...state, counter: state.counter, pictures: action.payload, selected : state.selected }
    case 'FETCH_CATS_ROLLBACK':
      return loop(state, Cmd.run(() => console.log(action.error)))[0];
  }
};

export const counterSelector = (state: State) => {
  return state.counter;
};
export const picturesSelector = (state: State) => {
  return state.pictures;
};
export const getSelectedPicture = (state: State) => {
  return state.selected;
};

export default compose(liftState, reducer);
