export type Success = { type : "SUCCESS"; payload: unknown; }; // TODO : Update this type !
export type Loading = { type : "LOADING" }; // TODO : Update this type !
export type Failure = { type : "FAILURE"; error: string; }; // TODO : Update this type !

export type ApiResponse = Success | Loading | Failure;

export default ApiResponse;
