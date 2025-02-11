import { Decrement, FetchCatsCommit, FetchCatsRequest, FetchCatsRollback, Increment, SelectPicture, CloseModal } from './types/actions.type';
import ApiResponse from './types/api.type';
import { Picture } from './types/picture.type';

export const increment = (): Increment => ({ type: 'INCREMENT' });
export const decrement = (): Decrement => ({ type: 'DECREMENT' });

export const fetchCatsRequest = (): FetchCatsRequest => ({
  type: 'FETCH_CATS_REQUEST',
  method: 'GET',
  path: 'https://pixabay.com/api/?key=48760354-84067b8629f8ecadcaa23b00b&per_page=10&q=cat',
}); // TODO : Update this value !

export const fetchCatsCommit = (payload: ApiResponse): FetchCatsCommit => ({ type: 'FETCH_CATS_COMMIT', payload });

export const fetchCatsRollback = (error: Error): FetchCatsRollback => ({ type: 'FETCH_CATS_ROLLBACK', error });

export const selectPicture = (selectedPicture : Picture): SelectPicture => ({ type: 'SELECT_PICTURE', picture: selectedPicture });

export const closeModal = (): CloseModal => ({ type: 'CLOSE_MODAL' });