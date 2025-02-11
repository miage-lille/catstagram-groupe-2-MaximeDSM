import { Failure, Loading, Success } from "./types/api.type";

export const loading = (): Loading => ({ type : "LOADING" }); // TODO : Update this value !
export const success = (payload: unknown): Success => ({ type : "SUCCESS", payload : payload }); // TODO : Update this value !
export const failure = (error: string): Failure => ({ type : "FAILURE", error : error }); // TODO : Update this value !
