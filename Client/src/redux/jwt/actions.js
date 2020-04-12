import * as types from "./constants";

export const remove = () => ({ type: types.REMOVE });
export const verify = () => ({ type: types.VERIFY });
export const add = (token, email, roles) => ({
  type: types.ADD,
  token,
  email,
  roles
});
