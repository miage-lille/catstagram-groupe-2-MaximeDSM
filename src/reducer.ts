import { Loop, liftState } from 'redux-loop';
import { compose } from 'redux';
import { Actions } from './types/actions.type';
import { Picture } from './types/picture.type';
import data from './fake-datas.json'

export type State = {
  counter: number,
  pictures: Array<Picture>,
  selected: Picture | null
}

export const defaultState: State = {
  counter: 4,
  pictures: data.slice(0, 4),
  selected : null
}

export const reducer = (state: State | undefined, action: Actions) : State => {
  if (!state) return defaultState; // mandatory by redux
  let tmpPictures : Array<Picture>
  switch (action.type) {
    case 'INCREMENT':
      let pictureIndex : number = Math.floor(Math.random() * (9));
      return { ...state, counter: state.counter + 1, pictures: state.pictures.concat([data[pictureIndex]]), selected : state.selected};
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
      throw 'Not Implemented';
    case 'FETCH_CATS_COMMIT':
      throw 'Not Implemented';
    case 'FETCH_CATS_ROLLBACK':
      throw 'Not Implemented';
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
